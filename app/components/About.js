import Image from 'next/image'
import React from 'react'
import IMG from '../../public/assets/Bwana.png';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import CV from '../../public/assets/CV.jpg'

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
          <p className=' pb-2'>A highly skilled and dedicated Full Stack JavaScript Developer with expertise in both front-end and back-end development. I have a deep understanding of JavaScript and its related technologies, allowing me to build dynamic and interactive web applications. With a passion for clean and efficient code, I am committed to delivering high-quality solutions that meet the needs of clients and users alike.</p>
          <p className=' pb-2'>Seeking a challenging position in a dynamic organization where I can utilize my expertise to create innovative and efficient solutions.</p> 
          <div className=' flex items-center justify-between my-4 w-full sm:w-[80%]'>
                 <a href='https://www.linkedin.com/in/franklin-bwana-501426b4/' 
                 className=' p-3 cursor-pointer bg-slate-400 rounded-xl hover:scale-105 hover:ease-in duration-300 hover:text-white'>
                  <FaLinkedin />
                 </a>
                 <a href='https://www.upwork.com/freelancers/~012524736deea7052c' 
                 className=' p-3 cursor-pointer bg-slate-400 rounded-xl hover:scale-105 hover:ease-in duration-300 hover:text-white'>
                  <SiUpwork />
                 </a>
                 <a href='https://github.com/frankbwana' 
                 className=' p-3 cursor-pointer bg-slate-400 rounded-xl hover:scale-105 hover:ease-in duration-300 hover:text-white'>
                  <AiOutlineGithub />
                 </a>
                 <a href='' className=' p-3 cursor-pointer bg-slate-400 rounded-xl hover:scale-105 hover:ease-in duration-300 hover:text-white'>
                  <AiOutlineMail />
                 </a>
          </div>
          <div className=' flex items-center justify-center'>
            <a href={CV} download={CV} className=' bg-blue-500 p-2 rounded-xl mx-2 hover:bg-blue-400 hover:text-white'>Download CV</a>
            <a href='#contacts' className=' bg-slate-500 p-2 rounded-xl mx-2 hover:bg-slate-400 hover:text-white'>Let's Talk</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About