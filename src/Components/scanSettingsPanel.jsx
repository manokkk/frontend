import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, Box, TextField } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import ResultsPanel from '../resultsPanel'; // Import ResultsPanel to show scan results
import '../Css/scanner.css'; // Import CSS file

const ScanSettings = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openPorts, setOpenPorts] = useState([]);
  const [sslConfig, setSslConfig] = useState(null);
  const [apiError, setApiError] = useState(null); // State for API errors
  const [scanStarted, setScanStarted] = useState(false); // Track if scan has started

  // Function to handle URL validation and scan initiation
  const handleStartScan = async () => {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/\S*)?$/;
    if (urlPattern.test(url)) {
      setError(false);
      setApiError(null); // Reset previous API errors
      setScanStarted(true); // Start the scan process
      initiateScan(url); // Initiate scan with the valid URL
    } else {
      setError(true);
    }
  };

  const initiateScan = async (domain) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/scan/', {
        domain: domain, // Send domain to backend
      });

      if (response.status === 200) {
        setSslConfig(response.data.ssl_config); // Set SSL config from backend
        setOpenPorts(response.data.open_ports); // Set open ports from backend
      } else {
        setApiError('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      if (error.response) {
        setApiError('Invalid input. Please check your URL.');
      } else if (error.request) {
        setApiError('Unable to reach the server. Please check your connection.');
      } else {
        setApiError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper className="scan-container">
          <Typography variant="h4" className="scan-title">
            Scan Ports
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Enter a website URL to begin scanning for vulnerabilities.
          </Typography>

          {/* URL Input Field */}
          <Box sx={{ marginTop: 3 }}>
            <TextField
              fullWidth
              label="Website URL"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              error={error}
              helperText={error ? 'Please enter a valid URL' : ''}
              variant="outlined"
              className="text-field"
            />
            {error && <span className="url-error">Invalid URL format.</span>}
          </Box>

          {/* Start Scan Button */}
          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              fullWidth
              className="scan-button"
              onClick={handleStartScan}
              disabled={loading}
            >
              {loading ? 'Scanning...' : 'Start Scan'}
            </Button>
          </Box>

          {/* Display API Errors */}
          {apiError && <Box sx={{ color: 'red', marginTop: 2 }}>{apiError}</Box>}

          {/* Display Scan Results */}
          {scanStarted && (
            <ResultsPanel
              openPorts={openPorts}
              sslConfig={sslConfig}
              isLoading={loading} // Pass loading state
            />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ScanSettings;
