import './App.css'
import MediaCard from './components/MediaCard.jsx'
import { CssVarsProvider } from '@mui/joy/styles';

function App({ mediaList }) {
  return (
    <CssVarsProvider>
      {mediaList.map(media => {
        return (
          <MediaCard
            key={media.mediaName + media.mediaType}
            mediaName={media.mediaName}
            mediaType={media.mediaType}
            mediaInfo={media.mediaInfo}
            mediaImage={media.mediaImage}
            completionStatus={media.completionStatus}
          />
        );
      })}
    </CssVarsProvider>
  )
}

export default App
