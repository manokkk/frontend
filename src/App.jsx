import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

// Importing Components
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/about';
import ScanSettings from './Components/scanSettingsPanel';
import Login from './Components/login';
import SignUp from './Components/signup';
import Contact from './Components/contact';
import ResultsPanel from './resultsPanel';

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
            <Route path="/" element={<Login />} />
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
              <Link to="/signup" style={{ textDecoration: 'none', color: '#3f51b5' }}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link to="/login" style={{ textDecoration: 'none', color: '#3f51b5' }}>
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
