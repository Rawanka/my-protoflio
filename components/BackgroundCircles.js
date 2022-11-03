import React from 'react'
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <div >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className=' relative flex justify-center items-center'>

        {/* <div className='absolute border border-[#6a38e9] rounded-full h-[200px] w-[200px] mt-52 animate-pulse'/> */}

        <div className='rounded-full border border-[#6a38e9] opacity-7 h-[400px] w-[400px] absolute mt-52 animate-pulse' />

        <div className='rounded-full border border-[#6a38e9] opacity-10 duration-75 h-[500px] w-[500px] absolute mt-52 animate-pulse' />

        <div className='rounded-full border border-[#6a38e9] opacity-10 duration-150 h-[600px] w-[600px] absolute mt-52 animate-pulse ' />

        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52' />

      </motion.div>

    </div>
  )
}

