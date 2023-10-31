import './App.css'
import BacklogItem from './components/BacklogItem.jsx'
import BacklogItemAdder from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import * as React from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';

const materialTheme = materialExtendTheme();

function App() {
  const [backlogItems, setBacklogItems] = React.useState([])
  const [formatFilter, setFormatFilter] = React.useState(null)

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/backlogItems')
      .then(response => {
        setBacklogItems(response.data)
      })
  }, [])

  const filteredItems = ((formatFilter == 'Show All') || (formatFilter === null))
    ? backlogItems
    : backlogItems.filter(media => media.format == formatFilter)

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <FormatFilter
          formatFilter={formatFilter}
          setFormatFilter={setFormatFilter}
        />
        {filteredItems.map(media => {
          return (
            <Box key={media.id} display={'flex'} justifyContent={'center'}>
              <BacklogItem
                title={media.title}
                format={media.format}
                completionStatus={media.completionStatus}
                id={media.id}
                setBacklogItems={setBacklogItems}
                backlogItems={backlogItems}
              />
            </Box>
          );
        })}
        <BacklogItemAdder
          backlogItems={backlogItems}
          setBacklogItems={setBacklogItems}
        />

      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}

export default App