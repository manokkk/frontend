import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import '../Css/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // Send POST request to Django login endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', { email, password });

      // Check if response is valid and store tokens in localStorage
      if (response.data.access && response.data.refresh) {
        console.log(response.data);
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        // Redirect to dashboard or another page
        window.location.href = 'home'; // Update with your desired route
      } else {
        setError("Failed to login. Please try again.");
      }
    } catch (err) {
      console.error("Login error: ", err);
      setError("Invalid email or password.");
    }
  };

  return (
    <Paper className="auth-container" elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 8 }}>
      <Typography variant="h4" className="auth-title" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box mt={2}>
        <TextField
          label="Email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        sx={{ mt: 3 }}
      >
        Login
      </Button>
    </Paper>
  );
};

export default Login;
