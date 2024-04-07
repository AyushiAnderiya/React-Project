import {useState,useRef,useEffect} from 'react'
import './App.css'

function Ref(){
//  const[name,setName]=useState("");
//  const count=useRef(0);
//  useEffect(()=>{
//    count.current=count.current+1;
//  });
// return(
    
//     <>
//     <input type="text" onChange={(e)=>setName(e.target.value)}/>
//     <h1>Name:{name}</h1>
//     <h1>Render:{count.current}</h1>
//     </>
// )
const Element=useRef(0);
const handleClick=()=>{
   console.log(Element);
}
return(
   <>
   <input type="text" ref={Element}/>
   <button onClick={handleClick}>Click Here</button>
   </>
)
};


export default Ref;