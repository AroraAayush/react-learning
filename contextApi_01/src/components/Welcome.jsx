import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Welcome() {
    const {user}=useContext(UserContext);
    if(user)

  return (
    <div className='w-full flex justify-center items-center'>
      Welcome {user.username} !!!!
    </div>
  )
  else
  {
    return (
        <div className='w-full flex justify-center items-center'>
          Login first!!!!!!!
        </div>
      )    
  }
}

export default Welcome
