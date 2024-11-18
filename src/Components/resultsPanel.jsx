import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const ResultsPanel = ({ openPorts, sslConfig }) => {
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState('');

  // Extract Nmap and Scapy open ports from openPorts
  const scanMessage = openPorts?.open_ports || 'No scan results available.';
  
  const terminalText = `
Scan Results:

Open Ports:
${scanMessage}

SSL Configuration:
${sslConfig ? JSON.stringify(sslConfig, null, 2) : 'No SSL configuration available.'}
  `;
  
  useEffect(() => {
    // Simulate a 5-second loading delay before typing effect starts
    const loadingTimeout = setTimeout(() => setLoading(false), 5000);

    if (!loading) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + terminalText[index]);
        index++;
        if (index >= terminalText.length) {
          clearInterval(typingInterval); // Stop typing when done
        }
      }, 50);
    }

    return () => clearTimeout(loadingTimeout);
  }, [loading, terminalText]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{
          padding: 3,
          backgroundColor: '#1e1e1e', // Dark background to resemble terminal
          color: '#0f0',               // Green text for terminal-like feel
          fontFamily: 'monospace',      // Monospaced font for terminal effect
          minHeight: '300px',
          whiteSpace: 'pre-wrap',      // Preserve the format of the text
          wordWrap: 'break-word',      // Ensure long lines break correctly
        }}>
          {loading ? (
            <Typography variant="body1" sx={{ color: '#0f0' }}>
              Initializing scan... Please wait.
            </Typography>
          ) : (
            <Box sx={{ fontSize: '1rem' }}>
              {typedText}
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ResultsPanel;
