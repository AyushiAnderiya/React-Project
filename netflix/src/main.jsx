import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './NData.jsx';
import logo from './Componend/logo.jpg'
import netflix from './Componend/netflix.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <>
    <div id="headd">
    <img src={logo} id='logo' alt="logo" />
    
    <span className="text-4xl text-red-500 tracking-wider space-x-2">
    <img src={netflix} id='name' alt="name" /> & Chill 
      </span>
    </div>
    <App data={data}/>
    </>
    
  </React.StrictMode>,
)
