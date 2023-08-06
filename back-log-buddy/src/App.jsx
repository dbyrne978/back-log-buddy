import './App.css'
import MediaCard from './MediaCard.jsx'
import { CssVarsProvider } from '@mui/joy/styles';

function App() {
  const mockGame1 = {
    mediaName : "Final Fantasy XII",
    mediaType : "Game",
    mediaInfo : "GOAT Final Fantasy. Truly the best world and gameplay.",
    mediaImage : null,
  }
  const mockGame2 = {
    mediaName : "Pikmin 4",
    mediaType : "Game",
    mediaInfo : "Highly anticipated. Just look at those little guys!",
    mediaImage : null,
  }
  const mockBook1 = {
    mediaName : "A Game of Thrones",
    mediaType : "Book",
    mediaInfo : "Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies \
      and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors \
      to win that deadliest of conflicts: the game of thrones.",
    mediaImage : null,
  }
  const mockShow1 = {
    mediaName : "Loki",
    mediaType : "TV Show",
    mediaInfo : "The mercurial villain Loki resumes his role as the God of Mischief in a new \
      series that takes place after the events of “Avengers: Endgame.”",
    mediaImage : null,
  }
  const mockMovie1 = {
    mediaName : "Dungeons & Dragons: Honor Among Thieves",
    mediaType : "Movie",
    mediaInfo : "A charming thief and a band of unlikely adventurers undertake an epic heist to \
      retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong \
      people.",
    mediaImage : null,
  }
  const mockMedia = [mockGame1, mockGame2, mockBook1, mockShow1, mockMovie1]

  return (
    <CssVarsProvider>
      {mockMedia.map((media) => {
        return (
          <MediaCard
            key={media.mediaName}
            mediaName={media.mediaName}
            mediaType={media.mediaType}
            mediaInfo={media.mediaInfo}
            mediaImage={media.mediaImage}
          />
        );
      })}
    </CssVarsProvider>
  )

}

export default App
