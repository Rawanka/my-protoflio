import React, { useState } from 'react';

import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

export default function Skills() {

//   const skills = [
//   {id:"Python",skill:"50",img:"https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem-700x394.png"},
//   {id:"javascript",skill:"70",img:"https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"},
//   {id:"reactjs",skill:"80",img:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},
//   {id:"nodejs",skill:"90",img:"https://miro.medium.com/max/800/1*COvz0L3FUapYYbsQHHZ90g.png"},
//   {id:"tailwindcss",skill:"60",img:"https://www.aleksandrhovhannisyan.com/assets/images/8bNPGpHwaG-1280.png"},
//   {id:"nextjs",skill:"60",img:"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"},
//   {id:"typescript",skill:"50",img:"https://static.wixstatic.com/media/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png"},
//   {id:"mongo-db",skill:"50",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
//   {id:"git",skill:"70",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
//   {id:"github",skill:"80",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
//   // {id:"12",skill:"AA",img:"https://ae.automationanywhere.com/images/logo-aa-new.svg"},
//   // {id:"13",skill:"AA",img:"https://pngimg.com/uploads/github/github_PNG58.png"},

// ];

const info = {
  option1: [
    {id:"html",skill:"100",img:"https://www.kindpng.com/picc/m/485-4850314_transparent-background-html-logo-hd-png-download.png"},
    {id:"css",skill:"90",img:"https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"},
    {id:"javascript",skill:"70",img:"https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"},
    {id:"reactjs",skill:"80",img:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},
    {id:"nodejs",skill:"90",img:"https://miro.medium.com/max/800/1*COvz0L3FUapYYbsQHHZ90g.png"},
    {id:"tailwindcss",skill:"60",img:"https://www.aleksandrhovhannisyan.com/assets/images/8bNPGpHwaG-1280.png"},
    {id:"nextjs",skill:"60",img:"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"},
    {id:"typescript",skill:"50",img:"https://static.wixstatic.com/media/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png"},
    {id:"mongo-db",skill:"50",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
    {id:"git",skill:"70",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
    {id:"github",skill:"80",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
  ],
  option2: [
    {id:"10",skill:"70",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
    {id:"11",skill:"80",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
  ],
  option3: [
    {id:"10",skill:"70",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
    {id:"11",skill:"80",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
    {id:"9",skill:"50",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
  ],
};



const [selectedOption, setSelectedOption] = useState('');

const handleOptionClick = (option) => {
  setSelectedOption(option);
};





  return (
// type 
<div  className='flex flex-col relative h-screen 
text-center md:text-left md:flex-row xl:flex-row
max-w-[2000px] xl:px-10 min-h-screen 
xl:space-y-0 mx-auto items-center justify-between'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
     <h2 className='absolute top-36 uppercase tracking-[4px]
    text-gray-500 text-sm'>Hover over to see %</h2>
     <div className='absolute top-48 items-center justify-center h-full space-x-5 text-gray-400 text-xl'>
       <button
         className={`option-btn ${selectedOption === 'option1' ? 'active' : ''} rounded-full bg-blue-900 text-white px-4 py-2`}
         onClick={() => handleOptionClick('option1')}
       >
         web develop
       </button>
       <button
         className={`option-btn ${selectedOption === 'option2' ? 'active' : ''} rounded-full bg-blue-900 text-white px-4 py-2 `}
         onClick={() => handleOptionClick('option2')}
       >
         RPA
       </button>
       <button
         className={`option-btn ${selectedOption === 'option3' ? 'active' : ''} rounded-full bg-blue-900 text-white px-4 py-2 `}
         onClick={() => handleOptionClick('option3')}
       >
         Game develop
       </button>
     </div>

<div className='flex px-10'>
     <div className=' grid grid-cols-4 gap-3 md:grid-flow-cols-4 lg:grid-cols-5 bg-white '>
  {selectedOption && info[selectedOption]?.map(({ id, skill, img }) => (
    <SkillCard key={id} skill={skill} img={img} />
  ))}

</div>
</div>
    
 </div>

// //       <div className='absolute top-96 text-center w-full'>
// {selectedOption && info[selectedOption]?.map((id, skill , img) => (
//   <SkillCard key={id} skill={skill} img={img}/>
// ))}
// </div>



//skills
//     <motion.div 
//     className='flex flex-col relative h-screen 
//     text-center md:text-left md:flex-row xl:flex-row
//     max-w-[2000px] xl:px-10 min-h-screen justify-center
//     xl:space-y-0 mx-auto items-center'>
 
//             <h3 className=' absolute top-24 uppercase
//          tracking-[20px] text-gray-500
//          text-2xl'>
//             Education
//             </h3>
//             <p className='absolute top-36 uppercase tracking-[4px]
//      text-gray-500 text-sm'>scroll left to see more</p>

//             <div className='w-full flex space-x-5 
//              overflow-x-scroll scrollbar p-10 snap-x snap-mandatory
//             '>
//                       {type?.map(({education,by}) => 
//                 <skills
//                 key={education}
//                 education={education}
//                 by={by}/>

//                 ) }

//             </div>

//       {/* <h3 className='absolute top-24 uppercase tracking-[18px]
//      text-gray-500 text-2xl'>
//       Skills
//      </h3>

//      <h3 className='absolute top-36 uppercase tracking-[4px]
//      text-gray-500 text-sm'>
//       Hover to see skills %
//       </h3>
//       <div className='grid grid-cols-4 gap-3 md:grid-flow-cols-4 lg:grid-cols-5 '>  

//       {skills?.map(({skill,img}) => 

//                 <SkillCard
//                 key={skill}
//                 skill={skill}
//                 img={img}
//                />
//                 ) }
//       </div> */}
     
//     </motion.div>
  
  )
}

