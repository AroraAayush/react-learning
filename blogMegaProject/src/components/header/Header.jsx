import React from 'react'
import {Container,Logo,LogoutButton} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout,login } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { list } from 'postcss'
function Header() {
  const currentStatus=useSelector((state)=>state.status);
  const navigate=useNavigate();
  const navItems=[
   {
    name:'Home',
    slug:'/',
    active:true
   },
   {
    name:'Login',
    slug:'/login',
    active: !currentStatus
   },
   {
    name:'Signup',
    slug:'/signup',
    active:!currentStatus
   },
   {

    name: "All Posts",
    slug:'/all-posts',
    active:currentStatus
   },
   {

    name: "Add Post",
    slug:'/add-post',
    active:currentStatus
   }  
  ]
  return (
    <header >
      <Container>
        <nav className='flex'>
          <div>
            <Link to='/'>
            <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>{
              item.active? ( <li key={item.name}> 
              <button onClick={()=>{
                navigate(item.slug)
              }}>{item.name}</button>
              </li> )
              : null
            })}
            {currentStatus && ( 
              <li>
<LogoutButton/>
            </li> )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
