import img1 from '../../assets/portfolio-1.png'
import img2 from '../../assets/portfolio-2.png'
import img3 from '../../assets/portfolio-3.png'
import img4 from '../../assets/portfolio-4.png'
import img5 from '../../assets/portfolio-5.png'
import img6 from '../../assets/portfolio-6.png'

import React from 'react'
import './project.css'
function ProjectBox() {
  return (
    <div id="projectBoxes">
     <img  src={img1} alt="" className="projectimg" />
     <img src={img2} alt="" className="projectimg" />
     <img src={img3} alt="" className="projectimg" />
     <img src={img4} alt="" className="projectimg" />
     <img src={img5} alt="" className="projectimg" />
     <img src={img6} alt="" className="projectimg" /> 
    </div>
  )
}

export default ProjectBox
