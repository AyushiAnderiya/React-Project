import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  // let counter=5;
  //prevCounter se previous counter mil jata h 
  //agar ek hi chiz me 3 se 4 bar update karna ho then apan prevCounter use karte h
  const addValue=()=>{
    counter=counter+1;
    if(counter<20)
    setCounter(counter);
    else
    setCounter(20);
  }
  const RemoveValue=()=>{
    counter=counter-1;
    if(counter>-1)
    setCounter(counter);
    else
    setCounter(0);
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove {counter}</button>
    </>
  )
}
export default App

