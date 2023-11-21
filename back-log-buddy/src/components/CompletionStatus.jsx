import PropTypes from 'prop-types';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import IconButton from '@mui/joy/IconButton';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import backlogItemsService from '../services/backlogItems'

export default function CompletionStatus({ completionStatus, id, setBacklogItems, backlogItems }) {
  const [groupValue, setGroupValue] = useState(completionStatus)
  let currentBacklogItem = backlogItems.find((backlogItem) => backlogItem.id == id)

  const onChange = (event, newCompletionStatus) => {
    backlogItemsService
      .update(id, {...currentBacklogItem, completionStatus: newCompletionStatus})
      .then(returnedItem => {
        setBacklogItems(backlogItems.map(item => item.id !== id ? item : returnedItem))
        setGroupValue(newCompletionStatus)
      })
  }

  return (
    <ToggleButtonGroup
      size='sm'
      variant="solid"
      value={groupValue}
      onChange={(event, newCompletionStatus) => onChange(event, newCompletionStatus || groupValue)}
      aria-label="figma button group"
      sx={{
        '--ButtonGroup-radius': '3px',
        '--ButtonGroup-separatorSize': '0px',
        '--ButtonGroup-connected': '0',
      }}
    >
      <IconButton value={'Backlog'}>
        <LibraryBooksIcon />
      </IconButton>
      <IconButton value={'Playing'}>
        <PlayArrowIcon />
      </IconButton>
      <IconButton value={'Complete'}>
        <TaskAltIcon />
      </IconButton>
    </ToggleButtonGroup>
  )
}

CompletionStatus.propTypes = {
  completionStatus: PropTypes.string,
  id: PropTypes.number,
  setBacklogItems: PropTypes.func,
  backlogItems: PropTypes.array
}