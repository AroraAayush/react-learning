import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import { motion } from 'framer-motion'

const iconVariants=(duration)=>({
  initial:{
    y:-10
  },
  animate:{
    y:[10,-10],
    transition:{
      ease:"linear",
      duration:duration,
      repeat:Infinity,
      repeatType:"reverse"

    }
  }
});

function Technology() {
  
  return (
    <div className='px-7 sm:px-20 lg:px-20 md:px-20 border-b border-neutral-800 sm:mt-12 md:mt-16 lg:mt-20 mt-8 pb-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className='px-3'>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{delay:0 ,duration:0.5}} className='text-4xl font-thin tracking-tight pb-7'>Technologies</motion.h2>
        </div>
        <motion.div initial={{x:-100 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5}} className='flex flex-row gap-3 flex-wrap justify-center items-center'>
            <motion.div variants={iconVariants(4)} 
            initial="initial"
            animate="animate"
            className='p-3 rounded-xl border-2 border-neutral-600'>
                <RiReactjsLine className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate" className='p-3 rounded-xl border-2 border-neutral-600'>
                <TbBrandNextjs className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} 
            initial="initial"
            animate="animate" className='p-3 rounded-xl border-2 border-neutral-600'>
                <SiMongodb className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} 
            initial="initial"
            animate="animate" className='p-3 rounded-xl border-2 border-neutral-600'>
                <DiRedis className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-red-700'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} 
            initial="initial"
            animate="animate" className='p-3 rounded-xl border-2 border-neutral-600'>
                <FaNodeJs className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} 
            initial="initial"
            animate="animate" className='p-3 rounded-xl border-2 border-neutral-600'>
                <BiLogoPostgresql className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl  text-sky-700'/>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technology
