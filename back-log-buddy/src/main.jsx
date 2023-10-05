import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const mockGame1 = {
  title : "Final Fantasy XII",
  format : "Game",
  completionStatus : "Complete"
}
const mockGame2 = {
  title : "Pikmin 4",
  format : "Game",
  completionStatus : "Backlog"
}
const mockBook1 = {
  title : "A Game of Thrones",
  format : "Book",
  completionStatus : "Backlog"
}
const mockShow1 = {
  title : "Loki",
  format : "TV Show",
  completionStatus : "Playing"
}
const mockMovie1 = {
  title : "Dungeons & Dragons: Honor Among Thieves",
  format : "Movie",
  completionStatus : "Backlog"
}
const mockMedia = [mockGame1, mockGame2, mockBook1, mockShow1, mockMovie1]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App mediaList={mockMedia} />
  </React.StrictMode>,
)
