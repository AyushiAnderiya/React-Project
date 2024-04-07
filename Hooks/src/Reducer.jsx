import {useReducer} from 'react';
import './App.css';
const initialState ={count:0};
const reducer=(state,action)=>{
    if(action.type=="increase")
    return{count:state.count+1};
    else
    return{count:state.count-1};

};

function Reducer(){
    const [state,dispatch]=useReducer(reducer,initialState)
    function increase(){
    dispatch({type:"increase"});
}
function decrease(){
    dispatch({type:"decrease"});
}
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={increase}> Increase</button>
        <button onClick={decrease}>Decrease</button>
        </>
    )
}

export default Reducer;