import {useEffect,useLayoutEffect} from 'react'
import './App.css'

function Layout(){
useEffect(()=>{
    console.log("useeffect");
})
useLayoutEffect(()=>{
    console.log("useLayouteffect");
});
    return(
        <>
        <h1>Aa</h1>
        </>
    )
}

export default Layout;