import React from 'react'
import Logo from './Logo'
import MenuItems from './MenuItems'
import ContactBtn from './ContactBtn'

import './navbar.css'
import MobileNav from './MobileNav'
function Navbar() {
  return (
    <div id='navbar'>
      <Logo/>
      <MenuItems/>
      <ContactBtn/>
      <MobileNav/>

      

    </div>
  )
}

export default Navbar
