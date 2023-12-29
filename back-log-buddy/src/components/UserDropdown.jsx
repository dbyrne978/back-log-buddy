import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import LogoutModal from './LogoutModal';
import PropTypes from 'prop-types';


export default function UserDropdown({ setUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutModalOpen, setLogoutModalOpen] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLogoutModalOpen(true)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        color='inherit'
        onClick={handleClick}
        sx={{
          '&:focus': { outline: 'none' },
          '&:hover': { backgroundColor: 'primary.600' }
        }}
      >
        <AccountCircleRoundedIcon fontSize='large'/>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          <ListItem>
           <ListItemButton onClick={handleLogout}>
             <ListItemDecorator><LogoutIcon /></ListItemDecorator>
             Logout
           </ListItemButton>
           <LogoutModal
            logoutModalOpen={logoutModalOpen}
            setLogoutModalOpen={setLogoutModalOpen}
            setUser={setUser}
          />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

UserDropdown.propTypes = {
  setUser: PropTypes.func,
}