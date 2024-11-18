import React from 'react';
import { Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      {/* About Us Section */}
      <Grid item xs={12}>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: '#3f51b5',
            color: '#ffffff',
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            About Our Scanner
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2, maxWidth: '600px', margin: '0 auto' }}>
            Our mission is to empower individuals and organizations by providing a seamless, reliable, 
            and user-friendly solution to detect vulnerabilities and secure their digital presence.
          </Typography>
        </Paper>
      </Grid>

      {/* Our Values Section */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" sx={{ marginY: 4 }}>
          Our Core Values
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Innovation */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <InfoIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  Innovation
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  We leverage cutting-edge technology to stay ahead in the ever-changing landscape of cybersecurity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Collaboration */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <PeopleIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  Collaboration
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Working together with users and partners to create impactful solutions that ensure security for all.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Trust */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <VerifiedUserIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  Trust
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Building trust by delivering transparent, accurate, and reliable scanning results.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Mission Statement */}
      <Grid item xs={12} sx={{ marginTop: 6 }}>
        <Paper
          sx={{
            padding: 4,
            textAlign: 'center',
            backgroundColor: '#00c853',
            color: '#ffffff',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5">Our Mission</Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            To make the web a safer place by equipping users with the tools and knowledge needed to prevent cyber threats.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
