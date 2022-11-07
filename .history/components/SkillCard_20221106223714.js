import React from 'react'
import { motion } from 'framer-motion';
import Skills from './Skills';


export default function Skill({skill,img}) {
  // const skills = [
  //   {skill:"90", img:""},
  //   {skill:"90", img:""},
  //   {skill:"90", img:""},
  //   {skill:"90", img:""},
  // ]
  // const skills = [32,
  //   23, 
  //   32,23]
  // const map1 = skills?.map(skill => skill*2 + ','
  //    )

  return (
    <div className='top-20 group relative flex cursor-pointer'>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewPort={{ once: true, }}
        src={img}
        className='rounded-full border border-gray-500 
        object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:grayscale 
        transition duration-300 ease-in-out'/>

      <div className='absolute opacity-0 group-hover:opacity-80
          transition duration-300 ease-in-out group-hover:bg-white
          h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
           rounded-full z-0'>
        
          <div className='flex items-center justify-center h-full'>
            <span
              className='text-3xl font-bold text-black
            opacity-100'>{skill}</span>
          </div>

      </div>

    </div>
  )
}

