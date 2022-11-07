import React from 'react'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

function Skills() {

  const Skills = [
    "90",
    "90",
    "90",
    "90",
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

      <div className='grid grid-cols-4 gap-6'>  
      {Skills?.map((Skill) => {
        <SkillCard
        key={skill}
        skill
        />
      })}
      <SkillCard/>

      </div>
    </motion.div>
  
  )
}

export default Skills