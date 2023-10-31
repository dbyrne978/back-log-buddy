import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// adds new backlog item and media card to display it
function BacklogItemAdder({ backlogItems, setBacklogItems }) {
  const emptyBacklogItem = {
    title: '',
    format: 'Movie',
    completionStatus: 'Backlog',
  }

  const [newBacklogItem, setNewBacklogItem] = React.useState({...emptyBacklogItem})

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        width: 260,
        mx: 'auto',
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<PlaylistAddIcon />}>
        Add new backlog item
      </Typography>

      <Divider inset="none" />

      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            var alreadyExists = backlogItems.find((backlogItem) =>
              backlogItem.title == newBacklogItem.title
              && backlogItem.format == newBacklogItem.format
            )

            if (alreadyExists) alert("This item is already in your log")
            else {
              axios
                .post('http://localhost:3001/backlogItems', newBacklogItem)
                .then(response => {
                  setBacklogItems(backlogItems.concat(response.data))
                  setNewBacklogItem({...emptyBacklogItem})
                })
            }
          }}
        >
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              required
              value={newBacklogItem.title}
              onChange={(event) =>
                setNewBacklogItem({...newBacklogItem, title: event.target.value})
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Format</FormLabel>
            <Select
              placeholder="Choose one…"
              value={newBacklogItem.format}
              onChange={(event, newValue) =>
                setNewBacklogItem({...newBacklogItem, format: newValue})
              }
            >
              <Option value='Movie'>Movie</Option>
              <Option value='TV Show'>TV Show</Option>
              <Option value='Game'>Game</Option>
              <Option value='Book'>Book</Option>
            </Select>
          </FormControl>

          <FormControl>
            <RadioGroup
              name="completion-status-radio-group"
              orientation='horizontal'
              value={newBacklogItem.completionStatus}
              onChange={(event) =>
                setNewBacklogItem({...newBacklogItem, completionStatus: event.target.value})
              }
            >
              <Radio value="Backlog" label="Backlog" size="sm" />
              <Radio value="Complete" label="Complete" size="sm" />
              <Radio value="Playing" label="Playing" size="sm" />
            </RadioGroup>
          </FormControl>

          <CardActions>
            <Button variant="solid" color="primary" type='submit'>
              Add Backlog Item
            </Button>
          </CardActions>

        </form>
      </CardContent>
    </Card>
  );
}

BacklogItemAdder.propTypes = {
  backlogItems: PropTypes.array,
  setBacklogItems: PropTypes.func,
  completionStatus: PropTypes.string
}

export default BacklogItemAdder