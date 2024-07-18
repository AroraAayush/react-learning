import React from 'react'
import { EXPERIENCES } from '../../constants'
import {motion} from 'framer-motion'
function Experience() {
  return (


    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-800 sm:mt-12 md:mt-16 lg:mt-20 mt-8 pb-3'>
      <div className='flex flex-col items-center justify-center'>
        <div>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}}  className='text-4xl font-thin tracking-tight mb-8'>Experience</motion.h2>
        </div>
        <div className='lg:w-3/4  md:w-4/6 w-full  '>
            {EXPERIENCES.map((experience,index)=>
                (<div  key={index} className='flex flex-row flex-wrap justify-center items-start pb-5 lg:pl-12'>
                    <div className=' w-full lg:w-1/4 '>
                    <div className='flex justify-start items-center '>
                        <motion.span initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} className='font-thin font-1xl pb-3 '>{experience.year}</motion.span>
                    </div>
                    </div>
                     <div className='w-full lg:w-3/4 md:1/2'>
                     <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} className='flex flex-col'>
                        <span className='font-semibold font-1xl'>{experience.role} {' - '} <span>{experience.company}</span></span>
                        <p className='font-thin font-1xl pb-3 max-w-xl '>{experience.description}</p>
                        <div className='flex flex-row gap-2 items-center justify-start flex-wrap'>
                        {experience.technologies.map((tech,index)=>(
                            <div key={index} className='border-1 rounded-xl bg-neutral-900 text-blue-800 p-2'>
                                <span>
                                    {tech}
                                </span>
                            </div>
                        ))}
                        </div>
                    </motion.div>
                     </div>
                </div>)
            )}
        
        </div>
      </div>
    </div>
  )
}

export default Experience
