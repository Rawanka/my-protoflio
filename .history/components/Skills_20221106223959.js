import React from 'react'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

export default function Skills() {

  const skills = [
  {skill:"32",img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20190705%2Foriginal%2Fpngtree-html-file-document-icon-png-image_4187497.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fhtml&tbnid=UAEAJ3SnrJiJGM&vet=12ahUKEwjyuI-9p5r7AhWIG-wKHS5pDa0QMygGegUIARC_AQ..i&docid=fZyVNr7fDe5amM&w=1099&h=1099&q=html%20transparent%20background&ved=2ahUKEwjyuI-9p5r7AhWIG-wKHS5pDa0QMygGegUIARC_AQ"},
  {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
  {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
  {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
];
    // "23", 
    // "32","23","58",



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

