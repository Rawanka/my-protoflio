import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import index from '../pages/index.js'
import Link from 'next/link.js';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';




export default function Header() {
  const { t } = useTranslation();
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
        <LanguageSwitcher/>
        <SocialIcon url="https://twitter.com/RawankAlharbi"
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
          {t('about me')}</button>
        </Link>

        <Link href='#education'>
          <button className='introButton'>
            {t('Education')}</button>
        </Link>
        
        <Link href='#skills'>
          <button className='introButton'>
          {t('Skills')}</button>
        </Link>

        <Link href='#projects'>
          <button className='introButton'>
            {t('Projects')}</button>
        </Link>


      </motion.div>
      

      <Link href='#contact'>
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
        text-sm text-gray-400 cursor-pointer'> {t('connect')}</p>
        </motion.div>
      </Link>
      
    </header>
  )
}

