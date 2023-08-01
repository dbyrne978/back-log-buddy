import { useState } from 'react'
import './App.css'
import MediaCard from './MediaCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </>
  )
}

export default App
