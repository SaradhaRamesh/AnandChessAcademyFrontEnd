import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Pagination } from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
import jsPDF from 'jspdf';
import Data from './Data.json';

function OnGoingTour() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const handleRegistration = () => {
    navigate('/registration'); // Redirect to the registration form page
  };

  const handleDownloadPDF = (imgUrl) => {
    const pdf = new jsPDF();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgUrl;

    img.onload = () => {
      const scaleFactor = 2; // Increase the scale factor for higher resolution
      const canvasWidth = img.width * scaleFactor;
      const canvasHeight = img.height * scaleFactor;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight); // Draw the image with higher resolution

      const dataUrl = canvas.toDataURL('image/png', 1.0); // Use quality parameter 1.0 for maximum quality
      const imgWidthMM = pdf.internal.pageSize.getWidth(); // Convert width to mm
      const imgHeightMM = (canvasHeight / canvasWidth) * imgWidthMM; // Maintain aspect ratio
      pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidthMM, imgHeightMM, '', 'FAST'); // Add image with full size and high quality
      pdf.save('tour_image.pdf');
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
    };
  };

  // Parse date strings to Date objects
  const tournaments = Data.map(tournament => ({
    ...tournament,
    dateObj: new Date(tournament.date.split('.').reverse().join('-'))
  }));

  // Get current date
  const currentDate = new Date();

  // Filter tournaments based on their dates
  const ongoingTournaments = tournaments.filter(tournament => tournament.dateObj.getMonth() === currentDate.getMonth());

  // Render filtered ongoing tournaments
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="xl">
        <Typography variant="h4" style={{ textAlign: "center" }}>Ongoing Tournaments</Typography>
        <Grid container spacing={1} style={{ marginTop: "20px", justifyContent: 'center', width: '100%' }}>
          {ongoingTournaments.map((result, index) => (
            <Grid item xs={12} sm={9} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="card" sx={{ maxWidth: 345, width: '100%' }} style={{ padding: "10px", marginBottom: "30px" }}>
                <CardActionArea>
                  <div
                    style={{
                      height: '350px',
                      backgroundImage: `url(${result.img})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '5px'
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <a href={result.link} style={{ textDecoration: 'none', color: 'inherit' }}>{result.title}</a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.description}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <EventIcon style={{ marginRight: '5px' }} />
                      <Typography variant="body2" color="text.secondary">
                        Date: {result.date}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon style={{ marginRight: '5px' }} />
                      <Typography variant="body2" color="text.secondary">
                        Address: {result.address}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="small" onClick={() => handleDownloadPDF(result.img)}>
                    DOWNLOAD
                  </Button>
                  <Button variant="contained" color="success" size='small' onClick={handleRegistration}>
                    REGISTER
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-20px', backgroundColor: '#f5f5f5', padding: '10px 0' }}>
          <Pagination
            count={Math.ceil(Data.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Container>
    </div>
  );
}

export default OnGoingTour;
