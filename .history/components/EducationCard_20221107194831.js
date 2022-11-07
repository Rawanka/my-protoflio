import React from 'react'
import { motion } from 'framer-motion';


export default function EducationCard({education,by}) {
  return (

    <article className='flex flex-col rounded-lg items-center
     space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px]
     snap-center snap-x bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity overflow-hidden
       duration-200'>
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInview={{
          opacity: 0,
          y: 0,
        }}
        viewPort={{once: true,}}

        className='w-32 h-32 rounded-full 
      xl:w-[200px]
      xl:h-[200px] object-cover object-center'
        src= {img}
      /> */}

      <div className="px-0 md:px-10">
        <h4 className="flex text-xl font-semibold px-4">{education}</h4>
        <p className="font-semibold text-lg mt-1">{by}</p>

        {/* <div className="flex space-x-2 my-2">
        </div>
        <span>started workin in - ended in </span> */}

      </div>
    </article>
  )
}
