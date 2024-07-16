import React from 'react'
import webLogo from '../../assets/logo.png'
import './navbar.css'
function Logo() {
  return (
    <div>
        <img id="logoid"className='h-12 w-16 object-cover ' src={webLogo} alt="Portfolio" />
     {/* <img src={PortfolioLogo} alt="Portfolio" /> */}
    </div>
  )
}

export default Logo
