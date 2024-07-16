import React from 'react'
import {Link} from 'react-scroll'
import './navbar.css'
function MenuItems() {
  return (
    <div id="desktopmenu" className='flex justify-between items-center'>
      
        <Link activeClass="active" to="intro" spy="true" smooth="true" offset={-100} className="menuItem" duration={500}>Home</Link>
        <Link activeClass="active" className="menuItem" to="about" spy="true" smooth="true" offset={-35} duration={500}>About</Link>
        <Link activeClass="active" className="menuItem" to="project" spy="true" smooth="true" offset={-35} duration={500}>Projects</Link>
        <Link activeClass="active" className="menuItem" to="clients" spy="true" smooth="true" offset={-35} duration={500}>Clients</Link>
      
    </div>
  )
}

export default MenuItems
