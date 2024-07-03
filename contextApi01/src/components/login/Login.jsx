import React, { useState } from 'react'
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
function Login() {
    const [username,setUsername]=useState("");
    const [age,setAge]=useState(0);
    const {setUser} =useContext(UserContext);
    const login=()=>{
        console.log("Logging in...")
        setUser({username,age})
    }
  return (
    <>
    <label htmlFor="">Username : </label>
    <input type="text" name="" id="" value={username} onChange={(e)=>{setUsername(e.target.value)}}  />
    <label htmlFor="">Age : </label>
    <input type="number" name="" id="" value={age} onChange={(e)=>{setAge(e.target.value)}}  />
    <button onClick={login}>Login</button>
    </>
  )
}

export default Login
