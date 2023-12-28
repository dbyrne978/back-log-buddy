import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';

export default function ButtonAppBar({ user }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            News
          </Typography>

          <Typography variant="h8" component="div">
            {user ?
              user.username :
              'Please login'
            }
          </Typography>

          <PersonIcon />
        </Toolbar>
      </AppBar>

      {/* following Toolbar needed by MUI to push content out from under AppBar */}
      <Toolbar />
    </Box>
  );
}

ButtonAppBar.propTypes = {
  user: PropTypes.object,
}