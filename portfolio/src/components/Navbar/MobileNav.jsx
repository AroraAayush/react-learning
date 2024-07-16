import React,{useState} from 'react'
import menuIcon from '../../assets/menu.png'
import { Link } from 'react-scroll'
import './navbar.css'

function MobileNav() {
    const [menu,setMenu]=useState(false);
  return (
    <div id="mobilenav">
      <img src={menuIcon} alt="Mobile Menu" id="mobMenuIcon" onClick={()=>{setMenu(!menu)}}/>
      <div className='mobilemenu' style={{display:menu?"flex":"none"}} >
      <Link activeClass="active" to="intro" spy="true" smooth="true" offset={-100} className="mobilemenuItem" duration={500}> <div onClick={()=>{setMenu(!menu)}}>Home</div> </Link>
        <Link activeClass="active" className="mobilemenuItem" to="about" spy="true" smooth="true" offset={-35} duration={500} > <div onClick={()=>{setMenu(!menu)}}>About</div>  </Link>
        <Link activeClass="active" className="mobilemenuItem" to="project" spy="true" smooth="true" offset={-35} duration={500} > <div onClick={()=>{setMenu(!menu)}}>Projects</div> </Link>
        <Link activeClass="active" className="mobilemenuItem" to="clients" spy="true" smooth="true" offset={-35} duration={500} > <div onClick={()=>{setMenu(!menu)}}>Clients</div> </Link>
        <Link activeClass="active" className="mobilemenuItem" to="contact" spy="true" smooth="true" offset={-35} duration={500} > <div onClick={()=>{setMenu(!menu)}}>Contact</div> </Link>
        </div>

    </div>
  )
}

export default MobileNav
