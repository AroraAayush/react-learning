import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <Card username="Aayush" paraText="THis is para 1" btnText="Click here"/>   
    <Card username="Ärora" paraText="This is para 2" btnText="Press me"/>
     </>
    

    
  </React.StrictMode>,
)
