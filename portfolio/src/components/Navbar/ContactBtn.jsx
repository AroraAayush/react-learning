import React from 'react'
import btnContact from '../../assets/contact.png'
import './navbar.css'
function ContactBtn() {
  return (
        
      <button id="desktopcontactbtn" className='flex px-2 py-2 items-center justify-center bg-white text-black rounded-2xl' > 
        <img className='object-cover h-4 w-4 mx-1' src={btnContact} alt="Contact" />
        <span className='mx-1' onClick={
          ()=>{
            document.getElementById('contact').scrollIntoView({behaviour:"smooth"});
          }
        }>Contact Us</span></button>
  )
}

export default ContactBtn
