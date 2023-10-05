import './App.css'
import MediaCard from './components/BacklogItem.jsx'
import MediaCardNew from './components/BacklogItemAdder.jsx'
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import PropTypes from 'prop-types';

function App({ mediaList }) {
  const [currentMediaList, setCurrentMediaList] = React.useState(mediaList)

  return (
    <CssVarsProvider>

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