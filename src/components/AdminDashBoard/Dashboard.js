import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import './dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container maxWidth="xl" >
        <Typography variant="h4" className="dashboard-heading">DASHBOARD</Typography>
        
        <Grid container spacing={1} style={{ marginTop: '10px'}}>

          {/* Grid item for Contact Us */}
          <Grid item xs={12} sm={3} className='gridcontainer'>
            <Card className="grid-item">
              <CardActionArea component={Link} to="/contact/details">
                <CardContent className="grid-content">
                  <ContactSupportIcon fontSize="large" className='icon' />
                  <Typography variant="h6" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="body2">
                    Click here to navigate to the Contact Us page.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Grid item for Registration */}
          <Grid item xs={12} sm={3} className='gridcontainer'>
            <Card className="grid-item">
              <CardActionArea component={Link} to="/registration/details">
                <CardContent className="grid-content">
                  <AssignmentIndIcon fontSize="large" className='icon'/>
                  <Typography variant="h6" gutterBottom>
                    Registration
                  </Typography>
                  <Typography variant="body2">
                    Click here to navigate to the Registration page.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Grid item for Login */}
          <Grid item xs={12} sm={3}className='gridcontainer'>
            <Card className="grid-item">
              <CardActionArea component={Link} to="/login/details">
                <CardContent className="grid-content">
                  <LockIcon fontSize="large" className='icon'/>
                  <Typography variant="h6" gutterBottom>
                    Login
                  </Typography>
                  <Typography variant="body2">
                    Click here to navigate to the Login page.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}className='gridcontainer'>
            <Card className="grid-item">
              <CardActionArea component={Link} to="/course/details">
                <CardContent className="grid-content">
                  <LockIcon fontSize="large" className='icon'/>
                  <Typography variant="h6" gutterBottom>
                    Course
                  </Typography>
                  <Typography variant="body2">
                    Click here to navigate to the course page.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
