import React from 'react'
import './about.css'
import Box from './Box'
import './about2.css'
import UIDesign from '../../assets/ui-design.png'

function About() {
  return (
    <section id="about">
      <span className="aboutTitle"> What I Do</span>
      <span className='aboutDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos, laborum quas dicta sed at nam dolor, voluptas dolorum, iure esse? Deserunt quasi at, sequi hic odio accusamus, eius, exercitationem voluptas veniam ullam sunt! </span>
      <div className="skillBoxes">
      
        <Box ind="1" title="UI/UX Design" desc="This is a demo Text for UI/UX design"/>
        <Box ind="2" title="WebSite Design" desc="This is a demo Text for WebSite design"/>
        <Box ind="3" title="App Design" desc="This is a demo Text for Application design"/>
      </div>
    </section>
  )
}

export default About
