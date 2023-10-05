import './App.css'
import MediaCard from './components/MediaCard.jsx'
import MediaCardNew from './components/MediaCardNew.jsx'
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
            key={media.mediaName + media.mediaType}
            mediaName={media.mediaName}
            mediaType={media.mediaType}
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