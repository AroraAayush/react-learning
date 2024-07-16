import React from 'react'
import hireme from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import './intro.css'
function IntroText() {
  return (
    <div className='introtxt'>
    <span class="hello">Hello ,</span>
    <span class="">I am <span className='introName'>Aayush</span> <br /> <span>Website Designer</span></span>
    <p className="introPara">I am a Skilled Web Developer with experience in creating visually good websites</p>
    
    <Link>
    <button className='btn'>
        <img src={hireme} className='object-cover h-4 w-4 mx-2' alt="" />
        <span className='mx-2'>Hire me</span>
    </button>
    </Link>
    
    
    
    

    </div>
  )
}

export default IntroText
