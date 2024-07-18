import React from 'react'
import { HERO_CONTENT } from '../../constants'
import profile from '../../assets/kevinRushProfile.png'
import { motion } from 'framer-motion'
function Hero() {

  const container=(delay)=>
  ({
    hidden:{x:-100 ,opacity : 0} ,
    visible:{x:0 , opacity:1 ,transition:{duration:0.5 ,delay:delay}}
  })
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-800 sm:mt-16 md:mt-20 lg:mt-24 mt-12'>
      <div className="flex flex-wrap flex-row ">
        <div className="w-full lg:w-1/2 lg:px-4 md:px-3 px-2">
        <div className='flex flex-col items-start lg:items-start 
        '>
          <motion.h1  variants={container(0)} initial="hidden" animate="visible"
         
          className='  pb-5 sm:pb-8 md:pb-10 lg:pb-10 text-6xl font-thin tracking-tight'>Aayush Arora</motion.h1>
          <motion.span variants={container(0.45)} initial="hidden" animate="visible"
          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  text-4xl text-transparent bg-clip-text tracking-tight pb-4 sm:pb-5 md:pb-6 lg:pb-8 '>Full Stack Developer</motion.span>
          <motion.p variants={container(0.9)} initial="hidden" animate="visible"
         className='font-thin tracking-tight'>{HERO_CONTENT}</motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2'>
        <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1.4 , duration:0.5}}  className='flex justify-center lg:px-4 md:px-3 px-2 lg:pt-0 pt-9 pb-4 '>
          <img src={profile} alt="" />
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
