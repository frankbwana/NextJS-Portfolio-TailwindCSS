import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' w-full h- mt-8 border-y-gray-50 border-4'>
        <div className=' mx-auto px-2 py-16'>
           <h2 className=' flex justify-center py-4'>Bwana</h2>
           <ul className='flex items-center justify-center'>
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
            <div className=' flex items-center justify-center py-4'>
                <small>&copy; Bwana website. All rights reserved.</small>
            </div>
        </div>


    </div>
  )
}

export default Footer