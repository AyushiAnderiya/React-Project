import {createContext} from 'react';
import UseEffect from './UseEffect';
import './App.css';
export const LoginContext=createContext();
function Context(){
   return(
    <LoginContext.Provider value={true}>
    <>    
    <UseEffect /> 
    </>   
    </LoginContext.Provider>
    
    
   ) 
}

export default Context