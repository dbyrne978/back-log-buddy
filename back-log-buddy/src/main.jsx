import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const mockGame1 = {
  mediaName : "Final Fantasy XII",
  mediaType : "Game",
  completionStatus : "Complete"
}
const mockGame2 = {
  mediaName : "Pikmin 4",
  mediaType : "Game",
  completionStatus : "Backlog"
}
const mockBook1 = {
  mediaName : "A Game of Thrones",
  mediaType : "Book",
  completionStatus : "Backlog"
}
const mockShow1 = {
  mediaName : "Loki",
  mediaType : "TV Show",
  completionStatus : "Playing"
}
const mockMovie1 = {
  mediaName : "Dungeons & Dragons: Honor Among Thieves",
  mediaType : "Movie",
  completionStatus : "Backlog"
}
const mockMedia = [mockGame1, mockGame2, mockBook1, mockShow1, mockMovie1]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App mediaList={mockMedia} />
  </React.StrictMode>,
)
