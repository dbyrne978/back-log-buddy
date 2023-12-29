import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import UserDropdown from './UserDropdown';

export default function ButtonAppBar({ user, setUser }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            Backlog Buddy
          </Typography>

          <Typography variant="h8" component="div">
            {user ?
              user.username :
              'Please login'
            }
          </Typography>

          <UserDropdown setUser={setUser} />
        </Toolbar>
      </AppBar>

      {/* following Toolbar needed by MUI to push content out from under AppBar */}
      <Toolbar />
    </Box>
  );
}

ButtonAppBar.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
}