import PropTypes from 'prop-types';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Button, Divider } from '@mui/joy';

export default function LogoutModal({ logoutModalOpen, setLogoutModalOpen, setUser }) {
  const onLogoutConfirmation = () => {
    setLogoutModalOpen(false)
    window.localStorage.clear()
    setUser(null)
  }

  return(
    <Modal open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <WarningRoundedIcon />
          Logout Confirmation
        </DialogTitle>
        <Divider />
        <DialogContent>
          Are you sure you want to logout from Backlog Buddy?
        </DialogContent>
        <DialogActions>
          <Button variant="solid" color="danger" onClick={() => onLogoutConfirmation()}>
            Confirm Logout
          </Button>
          <Button variant="plain" color="neutral" onClick={() => setLogoutModalOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

LogoutModal.propTypes = {
  logoutModalOpen: PropTypes.bool,
  setLogoutModalOpen: PropTypes.func,
  setUser: PropTypes.func,
}