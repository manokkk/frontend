// src/Components/Contact.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}
      justifyContent="center"
      alignItems="center"
    >
      {/* Contact Information Section */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 4, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <PhoneIcon color="primary" sx={{ marginRight: 1 }} />
            <Typography variant="body1">09308418157</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <EmailIcon color="primary" sx={{ marginRight: 1 }} />
            <Typography variant="body1">vulnerabilityscanner@gmail.com</Typography>
          </Box>
        </Paper>
      </Grid>

      {/* Contact Form Section */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Send Us a Message
          </Typography>
          <form>
            <TextField
              fullWidth
              label="PortScanner"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              type="email"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ padding: 1 }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
