import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Button, Divider } from '@mui/joy';

export default function BacklogItemDelete({ id, setBacklogItems, backlogItems, title, format }) {
  const [open, setOpen] = useState(false);

  const onDeleteConfirmation = (id) => {
    setOpen(false)
    axios
      .delete(`http://localhost:3001/backlogItems/${id}`)
      .then(setBacklogItems(backlogItems.filter((backlogItem) => backlogItem.id != id)))
  }

  return(
    <>
      <IconButton color='danger' onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Delete Backlog Item Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to delete the {format.toLowerCase()}, {title}, from your back log?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => onDeleteConfirmation(id)}>
              Confirm Deletion
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
  </>
  )
}

BacklogItemDelete.propTypes = {
  id: PropTypes.number,
  setBacklogItems: PropTypes.func,
  backlogItems: PropTypes.array,
  title: PropTypes.string,
  format: PropTypes.string
}