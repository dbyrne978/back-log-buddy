import './App.css'
import MediaCard from './components/BacklogItem.jsx'
import MediaCardNew from './components/BacklogItemAdder.jsx'
import FormatFilter from './components/FormatFilter.jsx'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import PropTypes from 'prop-types';

function App({ mediaList }) {
  const [currentMediaList, setCurrentMediaList] = React.useState(mediaList)
  const [formatFilter, setFormatFilter] = React.useState('all')

  return (
    <CssVarsProvider>
      <FormatFilter
        formatFilter={formatFilter}
        setFormatFilter={setFormatFilter}
      />

      {currentMediaList.map(media => {
        return (
          <MediaCard
            key={media.title + media.format}
            title={media.title}
            format={media.format}
            completionStatus={media.completionStatus}
          />
        );
      })}
      
      <MediaCardNew
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