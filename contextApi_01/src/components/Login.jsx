import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    
    const [username,setusername]=useState("");
    const [age,setage]=useState(0);
    const {setUser}=useContext(UserContext);
    const onLogin=()=>{
        setUser({username,age});
        setusername("")
        setage(0);
    }
  return (
    <div className='w-full bg-black/30 h-auto px-3 py-4'>
      <label htmlFor="" className='block'>Username</label>
<input type="text" name="name" id="name"  value={username} onChange={(e)=>{setusername(e.target.value)}}/>
<label htmlFor="" className='block'>Age</label>
<input type="number" name="age" id="age"  value={age} onChange={(e)=>{setage(e.target.value)}}/>
<button onClick={onLogin} className='block'>Login</button>
    </div>
  )
}

export default Login
