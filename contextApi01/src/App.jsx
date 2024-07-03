import UserContextProvider from './context/UserContextProvider'
import './App.css'
import {React,useState} from 'react';
import Login from './components/login/Login'
import Welcome from './components/welcome/Welcome';
function App() {
  const [username,setUsername]=useState("");
  return (
    <UserContextProvider>
     <div className='w-full h-screen bg-slate-500/40 flex justify-center items-center'>
     <h3 className='w-full text-center block'>This is a Context API Project 1 </h3>
     <div className='w-full text-center'>
     <Login/>
     </div>
     
     <Welcome/>
     </div>
         </UserContextProvider>
  )
}

export default App
