import React from 'react'
import './project.css'
import ProjectBox from './ProjectBox'
function Project() {
  return (
    <section id="project"> 
        <div className="projectText">
            <h2>My Portfolio</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatem consequatur explicabo architecto placeat, inventore exercitationem sint veniam error totam nam sequi sapiente fugit repudiandae cupiditate nisi natus quae quos ad pariatur quam quia officia minus.</p>
        </div>
        <ProjectBox/>
    </section>
  )
}

export default Project
