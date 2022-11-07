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
  {skill:"32",img:"https://miro.medium.com/max/800/1*COvz0L3FUapYYbsQHHZ90g.png"},
  {skill:"32",img:"https://www.aleksandrhovhannisyan.com/assets/images/8bNPGpHwaG-1280.png"},
  {skill:"32",img:"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"},
  {skill:"32",img:"https://static.wixstatic.com/media/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png"},
  {skill:"32",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
  {skill:"32",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
  {skill:"32",img:"https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Photo.png"},
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

