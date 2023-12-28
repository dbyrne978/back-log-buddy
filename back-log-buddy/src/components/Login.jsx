import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import * as React from 'react';
import PropTypes from 'prop-types';
import backlogItemsService from '../services/backlogItems'

const Login = ({ username, setUsername, password, setPassword }) => {
  const handleLogin = (event) => {
    event.preventDefault();

    if (true) alert('logging in with: '+username+' '+password)
    else {
      backlogItemsService
        .create(newBacklogItem)
        .then(returnedBacklogItem => {
          setBacklogItems(backlogItems.concat(returnedBacklogItem))
          setNewBacklogItem({...emptyBacklogItem})
        })
    }
  }

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
      <Typography level="title-lg" startDecorator={<PersonIcon />}>
        Login
      </Typography>

      <Divider inset="none" />

      <CardContent>
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              required
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              required
              type='password'
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </FormControl>

          <CardActions>
            <Button variant="solid" color="primary" type='submit'>
              Login
            </Button>
          </CardActions>

        </form>
      </CardContent>
    </Card>
  );
}

Login.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
}

export default Login