import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // const [Name,setName]=useState("");
  const [details, setDetails] = useState({ count: 0, Name: "" })
  function increaseCounter() {
     setDetails((prev) =>
      ({ ...prev,
         count: prev.count + 1 }
        ));
  }
  return (
    <>
      <input type="text" onChange={(e) => setDetails(prev => ({ ...prev, Name: e.target.value }))}  />
      <h1>{details.Name} is clicking {details.count} times</h1>
      <button onClick={increaseCounter}>Click</button>
    </>
  )
}

export default App
