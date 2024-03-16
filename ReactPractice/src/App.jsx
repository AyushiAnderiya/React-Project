import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    {/* Challenge 1 */}
    <h1>Top Netflix picks</h1>
    <p>List of my favorate drama</p>
    <ol>
      <li>High School Love on</li>
      <li>The Legend of the blue Sea</li>
      <li>Heirs</li>
      <li>Put Your Head on my Sholder</li>
      <li>Crash Landing on You</li>
    </ol>
    </>
  )
}

export default App
