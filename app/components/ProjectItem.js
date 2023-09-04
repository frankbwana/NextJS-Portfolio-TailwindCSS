"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll, motion } from 'framer-motion'

const ProjectItem = ({ title, backgroundImg, projectUrl}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
   target: ref,
   offset: ["0 1, 1.33 1"]
  })

  return (
    <motion.section>
    <div 
     ref={ref}
     style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
     }}
    className=' relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-slate-500'>
    <Image className=' rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
    <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className=' text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className=' pt-2 pb-4 text-white'>React JS</p>
        <Link href={projectUrl}>
            <p className=' text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
  </div>
  </motion.section>
  )
}

export default ProjectItem