import React from 'react'
import { motion } from 'framer-motion';


export default function EducationCard({education,img}) {
  return (

    <article className="flex flex-col rounded-lg items-center
     space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity overflow-hidden
       duration-200 ">
      <motion.img
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
        src={img}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">co-ceo </h4>
        <p className="font-bold text-2xl mt-1">valak compny</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
        </div>
        <p>started workin in - ended in </p>
      </div>
    </article>
  )
}
