import React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import NavigationPanel from './navigationPanel';
import ScanSettingsPanel from './scanSettingsPanel';
import ResultsPanel from './resultsPanel';

function MainWindow() {
  return (
    <Container>
      <Toolbar />
      <Box display="flex" flexDirection="row">
        <NavigationPanel />
        <Box component="main" flex={1} p={3}>
          <ScanSettingsPanel />
          <ResultsPanel />
        </Box>
      </Box>
    </Container>
  );
}

export default MainWindow;
