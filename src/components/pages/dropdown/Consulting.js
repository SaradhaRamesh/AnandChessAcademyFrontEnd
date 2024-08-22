import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Pagination } from '@mui/material';
import Container from '@mui/material/Container';
import Data from './Data.json';
import { CardActionArea } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';

function CompletedTournaments() {
  const [page, setPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 6;

  // Filter completed tournaments
  const completedTournaments = Data.filter(tournament => {
    const [day, month, year] = tournament.date.split('.').map(Number);
    const tournamentDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript dates
    const currentDate = new Date();
    return tournamentDate < currentDate;
  });

  // Handle pagination
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Update currentItems based on page change
  React.useEffect(() => {
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(completedTournaments.slice(indexOfFirstItem, indexOfLastItem));
  }, [page, completedTournaments]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container maxWidth="xl">
      <Typography 
  variant="h4" 
  style={{ 
    justifyContent:"center",
    textAlign: "center", 
    padding: "10px", 
    color:"#ff4879",
    paddingBottom: "1px",
    borderRadius: "10px", 
    boxShadow: "0 4px 8px rgba(255, 72, 121, 0.1)"

  }}
>
  CompletedTournaments
</Typography>
     
        <Grid container spacing={1} style={{ marginTop: "20px", justifyContent: 'center', width: '100%' }}>
          {currentItems.map((result, index) => (
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
                {/* <CardActions>
                  <Button variant="contained" size="small" onClick={() => handleDownloadPDF(result.img)}>
                    DOWNLOAD
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-20px', backgroundColor: '#f5f5f5', padding: '10px 0' }}>
          <Pagination
            count={Math.ceil(completedTournaments.length / itemsPerPage)}
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

export default CompletedTournaments;
