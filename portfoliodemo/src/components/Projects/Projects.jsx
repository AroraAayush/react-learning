import React from 'react'
import { PROJECTS } from '../../constants'

function Projects() {
  return (
    <div className='px-7 sm:px-16 lg:px-16 md:px-16 border-b border-neutral-500 sm:mt-12 md:mt-16 lg:mt-20 mt-8 pb-3'>
      <h2 className='font-thin text-center text-3xl mb-6'>Projects</h2>
      <div>
        {PROJECTS.map((project,index)=>(
            <div key={index} className='flex flex-wrap flex-row lg:justify-center'>
               <div className='w-full lg:w-1/4'>
                <img className="mb-6 rounded h-36 w-36" src={project.image} alt={project.title} />
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='font-semibold font-1xl pb-1'>{project.title}</h6>
                <p className='font-thin pb-5'>{project.description}</p>
                {project.technologies.map((tech,index)=>(
                    <span key={index} className='rounded-lg bg-neutral-900 mr-2 text-blue-800 p-2'>{tech}</span>
                ))}
                </div>
            </div>
        )

        )}
      </div>
    </div>
  )
}

export default Projects
