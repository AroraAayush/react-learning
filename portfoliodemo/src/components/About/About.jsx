import React from 'react'
import about from '../../assets/about.jpg'
import { ABOUT_TEXT } from '../../constants'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-800 sm:mt-12 md:mt-16 lg:mt-20 mt-8 pb-4' >
      <div className='flex flex-col justify-center items-center'>
        <div>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='font-thin text-4xl pb-20'>About <span className='text-neutral-500' > Me</span></motion.h2>
        </div>
        <div className='flex flex-wrap justify-center '>
            <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5 }}
            className='w-full lg:w-1/2 '>
            <div className='flex lg:justify-start justify-center'>
                <img className='rounded-3xl ' src={about} alt="About" />
                </div>
            </motion.div>
            <motion.div
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5 }}
            className='w-full lg:w-1/2'>
            <div className='flex lg:justify-end justify-center'>
                <p className='font-thin px-4'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About
