
import './App.css'
import Navbar from './component/Header/Navbar'
import Hero from './component/HeroSection/Hero'
import About from './component/About/About'
import Technology from './component/Technology.jsx/Technology'
import Experience from './component/WorkExp/Experience'

function App() {
 

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

    <div className='fixed top-0 -z-10 h-full w-full'>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className='container mx-auto px-8'>
    <Navbar/>
    <Hero/>
    <About/>
    <Technology/>
    <Experience/>
      </div> 
      
    
    </div>
  )
}

export default App
