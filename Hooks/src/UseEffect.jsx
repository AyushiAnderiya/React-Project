import {useState,useEffect} from 'react'
import Ref from './Ref';
import Post from './post';
import './App.css'

function useeffect(){
    let [count,setCount]=useState(0);
    // useEffect(()=>{
       
    //     document.title=`Click:${count}`;
    // },[count]);
    // useEffect(()=>{
    //     const timer=setInterval(() => {
    //        setCount(count+1); 
           
    //     }, 1000);
    //     return()=>{clearInterval(timer)};
    // },[count]);
   
return(
    
    <>
    {/* <h1>{count}</h1>
    <button onClick={setCount}>Click</button> */}
    <Post />
    </>
)
};

export default useeffect;