import './App.css'
import BacklogItem from './components/BacklogItem.jsx'
import BacklogItemAdder from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import * as React from 'react';
import Box from '@mui/joy/Box';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import backlogItemsService from './services/backlogItems'

const materialTheme = materialExtendTheme();

function App() {
  const [backlogItems, setBacklogItems] = React.useState([])
  const [formatFilter, setFormatFilter] = React.useState(null)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    backlogItemsService
      .getAll()
      .then(initialBacklogItems => {
        setBacklogItems(initialBacklogItems)
      })
  }, [])

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBacklogBuddyUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      backlogItemsService.setToken(user.token)
    }
  }, [])

  const filteredItems = ((formatFilter == 'Show All') || (formatFilter === null))
    ? backlogItems
    : backlogItems.filter(backlogItem => backlogItem.format == formatFilter)

  const backlogComponents = () => (
    <div>
      <FormatFilter
        formatFilter={formatFilter}
        setFormatFilter={setFormatFilter}
      />
        
      <BacklogItemAdder
        backlogItems={backlogItems}
        setBacklogItems={setBacklogItems}
        user={user}
      />

      {filteredItems.map(backlogItem => {
        return (
          <Box key={backlogItem.id} display={'flex'} justifyContent={'center'}>
            <BacklogItem
              username={backlogItem.user.username}
              title={backlogItem.title}
              format={backlogItem.format}
              completionStatus={backlogItem.completionStatus}
              id={backlogItem.id}
              setBacklogItems={setBacklogItems}
              backlogItems={backlogItems}
            />
          </Box>
        );
      })}
    </div>
  )

  const loginForm = () => (
    <Login
      user={user}
      setUser={setUser}
    />
  )

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <Header user={user} setUser={setUser} key={user} />
        {user === null ?
          loginForm() :
          backlogComponents()
        }
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}

export default App