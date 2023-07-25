import Image from 'next/image'
import React from 'react'
import IMG from '../../public/assets/Bwana.png';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
//import CV from '../../public/assets/CV.pdf'

const About = () => {
  return (
    <div className=' w-full md:h-screen p-2 flex items-center py-8' id='about'>
      <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className=' w-full h-auto pt-4 rounded-xl flex items-center shadow-xl shadow-gray-500 justify-center'>
        <Image src={IMG} alt='bwana' className=' rounded-2xl'/>
        </div>
        <div className=' col-span-2'>
          <p className=' py-4 uppercase text-2xl tracking-widest text-blue-500'>About</p>
          <h2 className=' pb-2'>Summary Details</h2>
          <p className=' pb-2'>A highly skilled and dedicated MERN developer with two years of experience indesigning, developing, and deploying web applications. Seeking a challengingposition in a dynamic organization where I can utilize my expertise to createinnovative and efficient solutions.</p>
          <p className=' pb-2'>A highly skilled and dedicated MERN developer with two years of experience indesigning, developing, and deploying web applications. Seeking a challengingposition in a dynamic organization where I can utilize my expertise to createinnovative and efficient solutions.</p> 
          <div className=' flex items-center justify-between my-4 w-full sm:w-[80%]'>
                 <a href='https://www.linkedin.com/in/franklin-bwana-501426b4/' 
                 className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin />
                 </a>
                 <a href='https://www.upwork.com/freelancers/~012524736deea7052c' 
                 className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <SiUpwork />
                 </a>
                 <a href='https://github.com/frankbwana' 
                 className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineGithub />
                 </a>
                 <a href='' className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                 </a>
          </div>
          <div className=' flex items-center justify-center'>
            <a href='/' className=' bg-blue-500 p-2 rounded-xl mx-2 hover:bg-blue-400'>Download CV</a>
            <a href='#contacts' className=' bg-slate-500 p-2 rounded-xl mx-2 hover:bg-slate-400'>Let's Talk</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About