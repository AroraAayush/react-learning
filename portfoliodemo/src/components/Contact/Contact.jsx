import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-800 sm:mt-16 md:mt-20 lg:mt-24 mt-12'>
        <motion.div initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='text-center font-thin text-3xl pb-3'>Get in Touch</motion.div>
        <div className='flex items-center justify-center'>
            <motion.button initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} className=' bg-neutral-900 rounded-md text-blue-600 font-semibold p-2 mb-4'>Email me</motion.button>
        </div>
      
    </div>
  )
}

export default Contact
