"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleNav = () =>{
    setNav(!nav)
   }

  return (
    <div className=' w-full h-20 shadow-xl z-[100] font-medium'>
        <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
          <h2>Bwana</h2>
          </Link>
           <div>
            <ul className='hidden md:flex'>
              <Link href='/'>
                <li className=' ml-10 text-sm uppercase hover:border-b'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className=' ml-10 text-sm uppercase hover:border-b'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className=' ml-10 text-sm uppercase hover:border-b'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li className=' ml-10 text-sm uppercase hover:border-b'>Projects</li>
              </Link>
              <Link href='/#contacts'>
                <li className=' mx-10 text-sm uppercase hover:border-b'>Contacts</li>
              </Link>
            </ul>
            <div onClick={handleNav} className=' md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
           </div>
        </div>
        <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-300 p-10 ease-in duration-500' : 
                                 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
             <div>
              <div className='flex w-full items-center justify-between'>
                <h2>Bwana</h2>
                <div onClick={handleNav} className=' rounded-2xl shadow-2xl shadow-gray-800 p-3 cursor-pointer bg-white text-black'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className=' my-4'>
                <p>Welcome to Bwana's webpage</p>
              </div>
             </div>
             <div className=' py-4 flex flex-col'>
              <ul className=' uppercase'>
                <Link href='/'>
                <li className=' py-4 text-sm hover:bg-slate-400 hover:text-white' onClick={handleNav}>Home</li>
                </Link>
                <Link href='/#about'>
                <li className=' py-4 text-sm  hover:bg-slate-400 hover:text-white' onClick={handleNav}>About</li>
                </Link>
                <Link href='/#skills'>
                <li className=' py-4 text-sm  hover:bg-slate-400 hover:text-white ' onClick={handleNav}>Skills</li>
                </Link>
                <Link href='/#projects'>
                <li className=' py-4 text-sm  hover:bg-slate-400 hover:text-white' onClick={handleNav}>Projects</li>
                </Link>
                <Link href='/#contacts'>
                <li className=' py-4 text-sm  hover:bg-slate-400 hover:text-white ' onClick={handleNav}>Contacts</li>
                </Link>
              </ul>
              <div className=' pt-4'>
                 <p className=' uppercase tracking-widest'>Let's Connect</p>
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
              </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar