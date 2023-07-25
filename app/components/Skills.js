import React from 'react'
import { BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <div className=' w-full' id='skills'>
      <div className=' max-w-[1240px] mx-auto px-2 py-16'>
        <p className=' text-xl tracking-widest uppercase text-blue-400'>Skills</p>
        <h2 className=' flex justify-center py-4'>My Skills</h2>
        <div className=' grid md:grid-cols-2 gap-8'>
          <div className=' bg-slate-400 border-blue-500 border-2 rounded-2xl hover:bg-transparent py-2'>
            <h3 className=' flex justify-center py-12'>Frontend Skills</h3>
            <div className=' grid grid-cols-2 gap-6'>
            <article className=' flex ml-6'>
               <BsPatchCheckFill/>
               <div className=' ml-2'>
               <h4>HTML</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill/>
               <div className=' ml-2'>
               <h4>CSS</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill/>
               <div className=' ml-2'>
               <h4>Javascript</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className='flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>Tailwind CSS</h4>
               <small>Intermediate</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>React</h4>
               <small>Experienced</small>
               </div>
             </article>
              <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>Redux</h4>
               <small>Experienced</small>
               </div>
             </article>
             </div>
          </div>
          <div className=' bg-slate-400 border-blue-500 border-2 rounded-2xl hover:bg-transparent py-2'>
            <h3 className=' flex justify-center py-12'>Backend Skills</h3>
            <div className=' grid grid-cols-2 gap-6'>
            <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>Node JS</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>Express</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>MongoDB</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>Next JS</h4>
               <small>Experienced</small>
               </div>
             </article>
             <article className=' flex ml-6'>
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>MySQL</h4>
               <small>Intermediate</small>
               </div>
             </article>
             <article className=' flex ml-6'> 
               <BsPatchCheckFill />
               <div className=' ml-2'>
               <h4>TypeScript</h4>
               <small>Intermediate</small>
               </div>
             </article>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills