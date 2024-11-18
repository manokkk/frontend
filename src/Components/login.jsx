import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Css/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // Send POST request to Django login endpoint
      const response = await axios.post('https://backend-1-fwes.onrender.com/api/auth/login/', { email, password });

      // Check if response is valid and store tokens in localStorage
      if (response.data.access && response.data.refresh) {
        console.log(response.data);
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        // Navigate to the home page using React Router
        navigate('/home'); // Navigate to home page after successful login
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
