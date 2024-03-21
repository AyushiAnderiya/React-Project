import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './NData.jsx';
import logo from './'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <>
    <div id="headd">
    <p  className="text-4xl text-red-500 tracking-wider space-x-2">
        Netflix & Chill 
      </p>
    </div>
    <App data={data}/>
    </>
    
  </React.StrictMode>,
)
