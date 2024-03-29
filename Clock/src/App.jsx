import { useState } from "react";
import { format } from 'date-fns';
import './App.css'

function App(){
  let [tdate,setdate]=useState(0);
  const handleClick=()=>{
    tdate=new Date();
    let formatted=format(tdate,"dd/MM/yyyy")
    setdate(formatted);
    console.log(formatted);
  }
return(
  <>
  <h1>{tdate}</h1>
  <button onClick={handleClick}>Click</button>
  </>
)
}

export default App