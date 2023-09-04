
import React from 'react'
import Project1 from '../../public/assets/portfolio1.jpg'
import Project2 from '../../public/assets/portfolio2.jpg'
import Project3 from '../../public/assets/portfolio3.jpg'
import Project4 from '../../public/assets/portfolio4.jpg'
import  ProjectItem  from './ProjectItem.js'



const Projects = () => {

  return (
    <div className=' w-full' id='projects'>
        <div className=' max-w-[1240px] mx-auto px-2 py-16'>
            <p className=' text-2xl tracking-widest uppercase text-blue-500'>Projects</p>
            <h2 className=' py-4'>What I've Built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>

           <ProjectItem 
            title='Food-App-NextJS'
            backgroundImg={Project1}
            projectUrl='/portfolio1'
            />
           <ProjectItem 
            title='MERN-Auth'
            backgroundImg={Project2}
            projectUrl='/portfolio1'
            />
           <ProjectItem 
            title='E-Commerce-NextJS'
            backgroundImg={Project3}
            projectUrl='/portfolio1'
            />
           <ProjectItem 
            title='Next-Portfolio-tailwind'
            backgroundImg={Project4}
            projectUrl='/portfolio1'
            />
            </div>
        </div>
    </div>
  )
}

export default Projects