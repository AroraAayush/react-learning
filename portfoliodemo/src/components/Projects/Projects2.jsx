import React from 'react'
import { PROJECTS } from '../../constants'
import {motion} from 'framer-motion'
function Projects2() {
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-800 sm:mt-12 md:mt-16 lg:mt-20 mt-8 pb-3'>
      
        <div>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='text-3xl font-thin text-center tracking-tight mb-8'>Projects</motion.h2>
        </div>
        <div className='lg:w-3/4 md:4/6  m-auto'>
            {PROJECTS.map((project,index)=>(
                <div key={index} className=' mb-4'>
            <div className='flex flex-row flex-wrap  items-start'>
                <div className='lg:w-1/4 md:1/2 w-full'>
                <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} className='flex justify-start'>
                    <img className='w-36 h-36 lg:pr-4 md:pr-5 rounded-md mb-2' src={project.image} alt="" />
                
                </motion.div>

                </div>
                <div className='lg:w-3/4 md:1/2 max-w-xl w-full '>
                <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}}  className='flex flex-col'>
                <h2 className='font-semibold font-1xl pb-2'>{project.title}</h2>
                <p className='font-thin tracking-tight pb-3'>{project.description}</p>
                <div className='flex flex-row gap-2 flex-wrap lg:pl-4 md:pr-4'>
                    {project.technologies.map((tech,index)=>(
                    <div key={index} className=''>
                        <span className='bg-neutral-900 text-blue-800 p-2'>{tech}</span>
                    </div>
                ))}
                </div>
                </motion.div>
                </div>
            </div>
            
        </div>
            ))}
            
        </div>
        
      </div>
      
    
  )
}

export default Projects2

