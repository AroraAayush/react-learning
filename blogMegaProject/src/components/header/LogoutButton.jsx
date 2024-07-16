import React from 'react'
import { useDispatch } from 'react-redux'
import { authService } from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoutButton() {
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            useDispatch(logout());
        }).catch(()=>useDispatch(logout()))
    }
  return (
    <button  onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutButton
