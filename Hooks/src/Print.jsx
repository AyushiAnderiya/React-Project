import {useEffect,useState} from 'react';

function Print({calculateTable}){
const [rows,setRows]=useState([]);
useEffect(()=>{
    console.log("Print table!!");
setRows(calculateTable());
},[calculateTable]);
return rows.map((row,index)=>{
    return <p key={index}>{row}</p>;
});
}

export default Print;