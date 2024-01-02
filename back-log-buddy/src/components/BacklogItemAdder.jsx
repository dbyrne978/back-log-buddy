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
import { ToggleButtonGroup } from '@mui/joy';
import * as React from 'react';
import PropTypes from 'prop-types';
import backlogItemsService from '../services/backlogItems'

// adds new backlog item and media card to display it
function BacklogItemAdder({ backlogItems, setBacklogItems, user }) {
  const emptyBacklogItem = {
    user: user,
    title: '',
    format: 'Movie',
    completionStatus: 'Backlog',
  }

  const [showAdder, setShowAdder] = React.useState(false)
  const [newBacklogItem, setNewBacklogItem] = React.useState({...emptyBacklogItem})

  const adder = () => (
    <div>
      <Card
        variant="outlined"
        sx={{
          maxHeight: 'max-content',
          width: 210,
          mx: 'auto',
          my: '2px',
          overflow: 'auto',
        }}
      >
        <Typography level="title-lg" startDecorator={<PlaylistAddIcon />}>
          New backlog item
        </Typography>

        <Divider inset="none" />

        <CardContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              var alreadyExists = backlogItems.find((backlogItem) =>
                backlogItem.title == newBacklogItem.title
                && backlogItem.format == newBacklogItem.format
                && backlogItem.user == newBacklogItem.user
              )

              if (alreadyExists) alert("This item is already in your log")
              else {
                backlogItemsService
                  .create(newBacklogItem)
                  .then(returnedBacklogItem => {
                    setNewBacklogItem({...newBacklogItem, id:'new'})
                    setBacklogItems(backlogItems.concat(newBacklogItem))
                    setNewBacklogItem({...emptyBacklogItem})
                    setShowAdder(false)
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
              <ToggleButtonGroup
                color='primary'
                variant="solid"
                value={newBacklogItem.completionStatus}
                onChange={(event) =>
                  setNewBacklogItem({...newBacklogItem, completionStatus: event.target.value})
                }
                sx={{
                  mt: 2,
                  '--ButtonGroup-separatorSize': '0px',
                  justifyContent: 'center'
                }}
              >
                <Button
                  value='Backlog'
                  sx={{ '&:focus': { outline: 'none' }, px: 1 }}
                >
                  Backlog
                </Button>
                <Button
                  value='Complete'
                  sx={{ '&:focus': { outline: 'none' }, px: 1  }}
                >
                  Complete
                </Button>
                <Button
                  value='Playing'
                  sx={{ '&:focus': { outline: 'none' }, px: 1  }}
                >
                  Playing
                </Button>
              </ToggleButtonGroup>
            </FormControl>

            <CardActions buttonFlex="0 1 120px">
              <Button variant="solid" color="primary" type='submit' sx={{ mr: 'auto' }}>
                Add Item
              </Button>
              <Button variant="solid" color="danger" onClick={() => setShowAdder(false)}>
                Cancel
              </Button>
            </CardActions>

          </form>
        </CardContent>
      </Card>
    </div>
  )

  const askForAdder = () => (
    <Button
      variant="solid"
      color="primary"
      onClick={() => setShowAdder(true)}
      startDecorator={<PlaylistAddIcon />}
      sx={{ my: '2px' }}
    >
      Add New Backlog Item
    </Button>
  )

  return (
    <div>
      {showAdder === true ?
        adder() :
        askForAdder()
      }
    </div>
  );
}

BacklogItemAdder.propTypes = {
  backlogItems: PropTypes.array,
  setBacklogItems: PropTypes.func,
  completionStatus: PropTypes.string
}

export default BacklogItemAdder