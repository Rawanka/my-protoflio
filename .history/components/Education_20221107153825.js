import React from 'react'
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';


export default function Education() {
    const education = [
        {skill:"32%",img:"https://www.kindpng.com/picc/m/485-4850314_transparent-background-html-logo-hd-png-download.png"},
        {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
        {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
        {skill:"32",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fremoval.ai%2Fspace-background-images%2F&psig=AOvVaw3wedCO8OYKDoWoQvvBLAev&ust=1667849861489000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1iYanmvsCFQAAAAAdAAAAABAJ"},
      ];

    return (
        <motion.div
            initial={{ x: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1.5, }}

            className='flex flex-col h-screen 
    overflow-hidden
    relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>

            <h3 className=' absolute top-24 uppercase
         tracking-[20px] text-gray-500
         text-2xl'
            >Education
            </h3>

            <div className='w-full flex space-x-5 
             overflow-x-scroll scrollbar p-10 snap-x snap-mandatory
            '>
                      {skills?.map(({skill,img}) => 
                <EducationCard
                key={skill}
                skill={skill}
                img={img}/>

                ) }

            </div>
        </motion.div>
    )
}

