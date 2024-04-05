import { useState } from "react";
import { format } from 'date-fns';
import './App.css'

function App(){
  let [tdate,setdate]=useState("Today's Date");
  let[ttime,settime]=useState("Current Time");
  const[visible,setvisible]=useState(false);
  const[tvisible,settvisible]=useState(false);
  const[intervalStarted,setIntervalStarted]=useState(false);
  const handleClick=()=>{
    tdate=new Date();
    let formatted=format(tdate,"dd/MM/yyyy")
    setdate(formatted);
    setvisible(true);
  }
  const handleTime=()=>{
    ttime=new Date().toLocaleTimeString();
    settime(ttime);
    settvisible(true);

    if (!intervalStarted) {
      setIntervalStarted(true); // Set the state to indicate the interval has been started
      setInterval(handleTime, 1000); // Start the interval
    }
  }
  
return(
  <>
  <h1 className={visible?"show":"hide"}>{tdate}</h1>
  <button onClick={handleClick}>Click</button>
  <h1 className={tvisible?"show":"hide"}>{ttime}</h1>
  <button onClick={handleTime}>Click</button>
  </>
)
}

export default App