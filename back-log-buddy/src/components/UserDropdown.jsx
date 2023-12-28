import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Popover from '@mui/material/Popover';
import { Button } from '@mui/joy';
import { Typography } from '@mui/joy';

export default function UserDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <Typography sx={{ p: 1 }}>Logout</Typography>
      </Popover>
    </div>
  );
}