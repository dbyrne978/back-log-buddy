import './App.css'
import BacklogItem from './components/BacklogItem.jsx'
import BacklogItemAdder from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import PropTypes from 'prop-types';

function App({ mediaList }) {
  const [currentMediaList, setCurrentMediaList] = React.useState(mediaList)
  const [formatFilter, setFormatFilter] = React.useState(null)

  const filteredItems = ((formatFilter == 'Show All') || (formatFilter === null))
    ? currentMediaList
    : currentMediaList.filter(media => media.format == formatFilter)

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
        currentMediaList={currentMediaList}
        setCurrentMediaList={setCurrentMediaList}
      />
      
    </CssVarsProvider>
  )
}

App.propTypes = {
  mediaList: PropTypes.array
}

export default App