import React from 'react'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

export default function Skills() {

  const skills = [
  {skill:"32%",img:"https://www.kindpng.com/picc/m/485-4850314_transparent-background-html-logo-hd-png-download.png"},
  {skill:"32",img:"https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"},
  {skill:"32",img:"https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"},
  {skill:"32",img:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},
  {skill:"32",img:"https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png"},
  {skill:"32",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/768px-MongoDB_Logo.svg.png"},
  {skill:"32",img:"https://cdn.freebiesupply.com/logos/large/2x/git-logo-png-transparent.png"},
  {skill:"32",img:""},
  {skill:"32",img:""},

];

  return (
    <motion.div 
    className='flex flex-col relative h-screen 
    text-center md:text-left md:flex-row xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[18px]
     text-gray-500 text-2xl'>
      Skills
     </h3>

     <h3 className='absolute top-36 uppercase tracking-[4px]
     text-gray-500 text-sm'>
      Hover to see skills %
      </h3>
      <div  className='grid grid-cols-4 gap-6'>  

      {skills?.map(({skill,img}) => 

                <SkillCard
                key={skill}
                skill={skill}
                img={img}
               />
                ) }
      </div>
     
    </motion.div>
  
  )
}

