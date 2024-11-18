import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

function NavigationPanel() {
  return (
    <List>
      <ListItem button component={Link} to="/scan-settings">
        <ListItemText primary="Scan Configuration" />
      </ListItem>
      <ListItem button component={Link} to="/results">
        <ListItemText primary="Results" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Help" />
      </ListItem>
    </List>
  );
}

export default NavigationPanel;
