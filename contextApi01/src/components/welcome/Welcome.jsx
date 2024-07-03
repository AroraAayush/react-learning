import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Welcome() {
    const {user}=useContext(UserContext);
    if(user)
        {
  return (
    <div>
      Welcome {user.username}
    </div>
  )
}
  else
  {
    return (
        <>
        Login First!!!!!
        </>
    )
  }

}

export default Welcome
