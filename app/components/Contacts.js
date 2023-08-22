import Image from 'next/image'
import React from 'react'
import Pic from '../../public/assets/contact.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'


const Contacts = () => {
  return (
    <div className=' w-full lg:h-screen' id='contacts'>
        <div className=' max-w-[1240px] m-auto px-2 py-8 w-full'>
            <p className=' text-xl tracking-widest uppercase text-blue-400'>Contacts</p>
            <h2 className=' py-4'>Get in Touch</h2>
             <div className=' grid lg:grid-cols-5 gap-8'>
              <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4'>
               <div className=' lg:p-4 h-full'>
                <div>
                  <Image className=' rounded-xl hover:scale-105 ease-in duration-300' src={Pic} alt='logo'/>
                </div>
                <div>
                  <h2 className=' py-2'>Franklin Bwana</h2>
                  <p>Full-stack Developer</p>
                  <p className=' py-4'>I am available for freelance and full-time positions. Contact me and let's talk</p>
                </div>
                <div>
                <p className=' uppercase'>Connect with me</p>
                <div className=' flex items-center justify-between py-4'>
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
               </div>
               </div>
              </div>
              
              <div className=' col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4 '>
               <div className=' p-4'>
                 <form>
                  <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className=' flex flex-col'>
                      <label className=' uppercase text-sm py-2'>Name</label>
                      <input className=' border-2 rounded-lg border-gray-500 p-3' type='text' placeholder='Enter your name'></input>
                    </div>
                    <div className=' flex flex-col'>
                      <label className=' uppercase text-sm py-2'>Phone Number</label>
                      <input className=' border-2 rounded-lg border-gray-500 p-3' type='text' placeholder='Enter your phone number'></input>
                    </div>
                  </div>
                  <div className=' flex flex-col py-2'>
                  <label className=' uppercase text-sm py-2'>Email</label>
                  <input className=' border-2 rounded-lg border-gray-500 p-3' type='email' placeholder='Enter your email address'></input>
                  </div>
                  <div className=' flex flex-col py-2'>
                  <label className=' uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg border-gray-500 p-3' rows='6' placeholder='Type your message'></textarea>
                  </div>
                  <button className=' w-full p-3 bg-blue-500 text-lg text-white'>Send Message</button>
                 </form>
               </div>
              </div>

             </div>
        </div>
    </div>
  )
}

export default Contacts