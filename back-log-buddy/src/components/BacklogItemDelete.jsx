import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function BacklogItemDelete({ id, setBacklogItems, backlogItems }) {
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3001/backlogItems/${id}`)
      .then(setBacklogItems(backlogItems.filter((backlogItem) => backlogItem.id != id)))
  }

  return(
      <IconButton color='danger' onClick={() => onDeleteClick(id)}>
        <DeleteIcon />
      </IconButton>
  )
}

BacklogItemDelete.propTypes = {
  id: PropTypes.number,
  setBacklogItems: PropTypes.func,
  backlogItems: PropTypes.array
}