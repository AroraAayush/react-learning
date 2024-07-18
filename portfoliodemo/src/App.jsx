

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Projects2 from './components/Projects/Projects2'
import Technology from './components/Technologies/Technology'
import Experience from './components/WorkExp/Experience'

function App() {
  return(
    <div className='text-neutral-300 antialized overflow-hidden selection:bg-cyan-400 selection:text-cyan-50 '>
      <div className='fixed h-full w-full top-0 -z-10' >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Technology/>
        <Experience/>
        <Projects2/>
        <Contact/>
      </div>
      
      
    </div>
  )
}

export default App
