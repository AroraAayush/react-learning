import React from 'react'
import logo from '../../assets/kevinRushLogo.png'
import {animate, motion} from 'framer-motion'
import {FaLinkedin,FaGithub, FaSquareXTwitter,FaInstagram} from 'react-icons/fa6'
function Navbar() {
  const hoverAnimation=()=>({
    initial:{scale:1,y:0},
    animate:{scale:1.3,y:[5,-5],transition:{duration:0.5, repeat:Infinity ,repeatType:'reverse',ease:"linear"}}
  });
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 py-10 mb-10 '>
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-shrink-0'>
        <img className='w-10' src={logo} alt="" />
      </div>
      <div>
        <div className='flex flex-row justify-center items-center gap-3 text-2xl '>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate" >
            <FaLinkedin />
            </motion.div>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate">
            <FaGithub />
            </motion.div>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate">
            <FaSquareXTwitter/>
            </motion.div>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate">
            <FaInstagram/>
            </motion.div>
            
            
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
