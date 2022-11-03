import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import index from '../pages/index.js'
import Link from 'next/link.js';


export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start
     justify-between max-w-7xl mx-auto z-20 xl:items-center
     '>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon url="https://twitter.com/jaketrent"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://github.com/Rawanka"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://www.linkedin.com/in/rawan-al-harbi-a44287179/"
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex-row items-center
         hidden md:inline-flex
       z-20'>

        <Link href='#aboutme'>
          <button className='introButton'>
            About</button>
        </Link>

        <Link href='#skills'>
          <button className='introButton'>
            Skills</button>
            </Link>

          <Link href='#projects'>
        <button className='introButton'>
          Projects</button>
          </Link>

      </motion.div>

      <div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center
       text-gray-300 cursor-pointer'>
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className=' uppercase hidden md:inline-flex 
        text-sm text-gray-400'>get in touch</p>
        </motion.div>
      </div>
    </header>
  )
}

