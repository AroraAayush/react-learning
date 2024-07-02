import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let {userName}=useParams();
  return (
    <div>
      <h3 className='bg-gray-600 text-center px-2 py-2 w-full h-auto'> {`User is ${userName}`}</h3>
    </div>
  )
}

export default User
