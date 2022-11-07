import React from 'react'
import { motion } from 'framer-motion';


export default function EducationCard({skill,img}) {
  return (

    <article className="flex flex-col rounded-lg items-center
     space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity overflow-hidden
       duration-200 ">
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
        src='https://www.bing.com/ck/a?!&&p=c6b2516581c19386JmltdHM9MTY2NzM0NzIwMCZpZ3VpZD0wZDNiZTNlMS1jY2Q2LTYwOGYtMDJiNy1mMjExY2RkNjYxYjQmaW5zaWQ9NTM2MA&ptn=3&hsh=3&fclid=0d3be3e1-ccd6-608f-02b7-f211cdd661b4&u=a1L2ltYWdlcy9zZWFyY2g_cT1zcGFjZStwaWMrcG5nJmlkPUM2RkRBNDI5RTkyMDY1MDk5MjY2OEVENTE3Q0M2M0M5ODNCRkUzNjcmRk9STT1JUUZSQkE&ntb=1'
      /> */}

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
