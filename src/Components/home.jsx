import React from 'react';
import { Grid, Paper, Typography, Button, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InsightsIcon from '@mui/icons-material/Insights';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      {/* Welcome Section */}
      <Grid item xs={12}>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: '#1e88e5',
            color: '#ffffff',
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Welcome to the Vulnerability Scanner
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2, maxWidth: '600px', margin: '0 auto' }}>
            Uncover hidden risks in your website! Scan for open ports, weak SSL configurations, outdated protocols, and more.
          </Typography>
          <Link to="/scan-settings"> {/* Using Link to navigate */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 3 }}
            >
              Start Your Free Scan
            </Button>
          </Link>
        </Paper>
      </Grid>

      {/* Features Section */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" sx={{ marginY: 4 }}>
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Scan for Weak SSL */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  SSL Vulnerability Detection
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Identify weak SSL/TLS configurations, outdated protocols, and cipher suites that may expose your data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Open Port Scanning */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <VisibilityIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  Open Port Analysis
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Discover open ports and detect exposed services that could make your site vulnerable to attacks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Vulnerability Insights */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <InsightsIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ marginTop: 1 }}>
                  Comprehensive Insights
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Gain insights into potential vulnerabilities, with easy-to-understand reports and risk assessments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Grid item xs={12} sx={{ marginTop: 6 }}>
        <Paper
          sx={{
            padding: 4,
            textAlign: 'center',
            backgroundColor: '#ff7043',
            color: '#ffffff',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5">
            Ready to Secure Your Site?
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Start scanning now and protect your website from potential threats.
          </Typography>
          <Link to="/scan-settings"> {/* Using Link to navigate */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 3 }}
            >
              Begin Scan
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
