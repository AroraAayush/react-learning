import React from 'react'
import { HERO_CONTENT } from '../../constants'
import profile from '../../assets/kevinRushProfile.png'
function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36 '>
        <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:text-6xl lg:mt-16 '>Aayush Arora</h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight '>Full Stack Developer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</p>
            </div>
            </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <img src={profile} alt="Aayush Arora" />
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Hero
