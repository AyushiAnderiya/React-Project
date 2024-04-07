import {createContext} from 'react';
import {useContext} from 'react';
import {LoginContext} from './Context';
import './App.css';

function Post(){
    const login=useContext(LoginContext);
    console.log(login);
   return(
    <>
    <h1>single post</h1>
    </>
   ) 
}

export default Post; 