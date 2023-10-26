import './App.css'
import BacklogItem from './components/BacklogItem.jsx'
import BacklogItemAdder from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import axios from 'axios';
import BacklogItemDelete from './components/BacklogItemDelete.jsx'
import Box from '@mui/joy/Box';

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
    <CssVarsProvider>
      <FormatFilter
        formatFilter={formatFilter}
        setFormatFilter={setFormatFilter}
      />

      {filteredItems.map(media => {
        return (
          <Box key={media.id + '_box'}>
            <BacklogItem
              key={media.id + '_item'}
              title={media.title}
              format={media.format}
              completionStatus={media.completionStatus}
            />
            <BacklogItemDelete
              key={media.id + '_delete'}
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
      
    </CssVarsProvider>
  )
}

export default App