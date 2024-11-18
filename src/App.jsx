// src/App.jsx
import React from 'react';
import { Box, CssBaseline, Typography, Link } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importing Components
import Navbar from './Components/navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/about.jsx';
import ScanSettings from './Components/scanSettingsPanel.jsx';
import ResultsPanel from './Components/ResultsPanel.jsx';
import Login from './Components/login.jsx';
import SignUp from './Components/signup.jsx';
import Contact from './Components/contact.jsx';


function App() {
  return (
    <Router>
      <CssBaseline />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ display: 'flex', marginTop: 8 }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: '#f4f4f4',
            padding: 3,
          }}
        >
          <Routes>
            {/* Default route - redirect to login page */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<AuthPage isLogin={true} />} />
            <Route path="/signup" element={<AuthPage isLogin={false} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scan-settings" element={<ScanSettings />} />
            <Route path="/results" element={<ResultsPanel />} />

          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

function AuthPage({ isLogin }) {
  return (
    <Box>
      {isLogin ? <Login /> : <SignUp />}
      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Link href="/signup" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link href="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                Login
              </Link>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
