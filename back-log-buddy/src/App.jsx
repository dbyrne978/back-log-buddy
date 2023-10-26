import './App.css'
import BacklogItem from './components/BacklogItem.jsx'
import BacklogItemAdder from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import PropTypes from 'prop-types';
import axios from 'axios';

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
          <BacklogItem
            key={media.title + media.format}
            title={media.title}
            format={media.format}
            completionStatus={media.completionStatus}
          />
        );
      })}
      
      <BacklogItemAdder
        backlogItems={backlogItems}
        setBacklogItems={setBacklogItems}
      />
      
    </CssVarsProvider>
  )
}

App.propTypes = {
  mediaList: PropTypes.array
}

export default App