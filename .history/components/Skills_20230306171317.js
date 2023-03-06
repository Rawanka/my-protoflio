import React from 'react'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

export default function Skills() {

  const skills = [
  {id:"12",skill:"50",img:"https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem-700x394.png"},
  {id:"1",skill:"100",img:"https://www.kindpng.com/picc/m/485-4850314_transparent-background-html-logo-hd-png-download.png"},
  {id:"2",skill:"90",img:"https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"},
  {id:"3",skill:"70",img:"https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"},
  {id:"4",skill:"80",img:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},
  {id:"5",skill:"90",img:"https://miro.medium.com/max/800/1*COvz0L3FUapYYbsQHHZ90g.png"},
  {id:"6",skill:"60",img:"https://www.aleksandrhovhannisyan.com/assets/images/8bNPGpHwaG-1280.png"},
  {id:"7",skill:"60",img:"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"},
  {id:"8",skill:"50",img:"https://static.wixstatic.com/media/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png"},
  {id:"9",skill:"50",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
  {id:"10",skill:"70",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
  {id:"11",skill:"80",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
  // {id:"12",skill:"AA",img:"https://ae.automationanywhere.com/images/logo-aa-new.svg"},
  // {id:"13",skill:"AA",img:"https://pngimg.com/uploads/github/github_PNG58.png"},



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
      <div className='grid grid-cols-4 gap-3 md:grid-flow-cols-4 lg:grid-cols-5 '>  

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

