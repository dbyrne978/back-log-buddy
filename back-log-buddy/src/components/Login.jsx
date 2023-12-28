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
import loginService from '../services/login';
import backlogItemsService from '../services/backlogItems';

const Login = ({ user, setUser }) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username, password,
      })

      backlogItemsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Username or password does not exist')
      setTimeout(() => {
        setErrorMessage('timeout')
      }, 5000)
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
  user: PropTypes.object,
  setUser: PropTypes.func,
}

export default Login