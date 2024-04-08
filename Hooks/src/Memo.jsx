import { useState, useMemo } from 'react';
import './App.css'

function Memo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const Memofunction = useMemo(() => {
        return expensivefunction(number);
    }, [number])
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div style={cssStyle}>
            <input type="number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
            <h1>{Memofunction}</h1>
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
};
function expensivefunction(num) {
    console.log("Function");
    for (let i = 0; i < 1000000; i++) {}
        return num;
}
export default Memo;