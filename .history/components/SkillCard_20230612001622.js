import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ skill, img }) {
  return (
    
    <div className=' top-28 flex relative group cursor-pointer align-baseline'>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewPort={{ once: true }}
        src={img}
        className='rounded-full border border-gray-500 bg-white object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-100 w-24 h-4 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <span className='text-3xl font-bold text-black opacity-100'>{skill}%</span>
         
        </div>
      </div>
    </div>
  );
}