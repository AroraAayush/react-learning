import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import Webdesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
function Box({ind,title,desc}) {
let skillimg=(ind=="1")?UIDesign:(ind=="2")?Webdesign:AppDesign
  return (
    <div className='skillBox'>
    <img className="skillImg"src={skillimg} alt="SkillImg" />
    <div className="skillboxtext">
      <h2 className="skilltitle">{title}</h2>
      <p className="skilldesc">{desc}</p>
    </div>

  </div>
  )
}

export default Box
