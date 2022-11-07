import React from 'react'
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';


export default function Education() {
    const educations = [
        {education:"32%",by:"taibah"},
        {education:"32",by:""},
        {education:"32",by:""},
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
                      {educations?.map(({education,by}) => 
                <EducationCard
                key={education}
                education={education}
                by={by}/>

                ) }

            </div>
        </motion.div>
    )
}

