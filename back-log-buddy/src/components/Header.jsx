import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            News
          </Typography>

          <Typography variant="h8" component="div">
            username
          </Typography>

          <PersonIcon />
        </Toolbar>
      </AppBar>

      {/* following Toolbar needed by MUI to push content out from under AppBar */}
      <Toolbar />
    </Box>
  );
}