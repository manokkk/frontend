// src/components/Sidebar.jsx
import React from 'react';
import { Box, Button, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ padding: 2 }}>
        <Button component={Link} to="/" fullWidth>Home</Button>
        <Button component={Link} to="/scan-settings" fullWidth>Scan Settings</Button>
        <Button component={Link} to="/results" fullWidth>Scan Results</Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
