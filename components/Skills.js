import React, { useState } from 'react';

import SkillCard from './SkillCard'
import { motion } from 'framer-motion';

export default function Skills() {



const info = {
  option1: [
    {id:"html",skill:"100",img:"https://www.kindpng.com/picc/m/485-4850314_transparent-background-html-logo-hd-png-download.png"},
    {id:"css",skill:"90",img:"https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"},
    {id:"javascript",skill:"70",img:"https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"},
    {id:"reactjs",skill:"80",img:"https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"},
    {id:"nodejs",skill:"90",img:"https://miro.medium.com/max/800/1*COvz0L3FUapYYbsQHHZ90g.png"},
    {id:"tailwindcss",skill:"70",img:"https://www.aleksandrhovhannisyan.com/assets/images/8bNPGpHwaG-1280.png"},
    {id:"nextjs",skill:"70",img:"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"},
    {id:"typescript",skill:"70",img:"https://static.wixstatic.com/media/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e24fd_f1660d17db704473980a24ffca7ca9d4~mv2.png"},
    {id:"mongo-db",skill:"70",img:"https://www.nicepng.com/png/detail/868-8686277_mongo-db-badge-sticker-mongodb.png"},
    {id:"git",skill:"90",img:"https://www.nicepng.com/png/detail/38-381647_png-git-icon.png"},
    {id:"github",skill:"90",img:"https://pngimg.com/uploads/github/github_PNG58.png"},
  ],
  option2: [
    {id:"AA",skill:"100",img:"https://th.bing.com/th/id/OIP.bpTbPLEb52YZcU76dPa6UQHaHa?pid=ImgDet&rs=1"},
    {id:"uipath",skill:"100",img:"https://th.bing.com/th/id/R.c6c34846606e252f8d2d9f45ef50f34a?rik=1dDKOzZUrwigOg&pid=ImgRaw&r=0"},
  ],
  option3: [
    {id:"unity",skill:"60",img:"https://th.bing.com/th/id/R.a0bb70e17aa4d8d999bd2239add52840?rik=Njxy5Z%2f3HlmaqA&riu=http%3a%2f%2fallthingsd.com%2ffiles%2f2013%2f08%2funity3d1.jpg&ehk=aZyN11e48c3bmNYIhNJE5HgTTt%2fBLdJRLQfsw9bpE%2f0%3d&risl=&pid=ImgRaw&r=0"},
    {id:"c#",skill:"60",img:"https://th.bing.com/th/id/R.3f13a961d6ca4eec42d2c0667fd1da94?rik=lgTOFGoYtcu%2bTw&pid=ImgRaw&r=0"},

  ],
  option4: [
    {id:"flutter",skill:"60",img:"https://i.pinimg.com/originals/66/09/13/6609134eca39bc90ff24138d32708ab8.png"},

  ],
};



const [selectedOption, setSelectedOption] = useState('');

const handleOptionClick = (option) => {
  setSelectedOption(option);
};





  return (
// type 
<div  className='h-screen flex flex-col relative  
text-center md:text-left md:flex-row xl:flex-row
 xl:px-10 min-h-screen justify-center
xl:space-y-0 mx-auto items-center px-4 max-w-7xl'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
     <h2 className='absolute top-36 uppercase tracking-[4px]
    text-gray-500 text-sm'>Hover over to see %</h2>
     <div className='absolute top-48 md:px-16 sm:px-24 '>
     <div className='flex items-center justify-center gap-3 '>
       <button
         className={`option-btn ${selectedOption === 'option1' ? 'active' : ''} rounded-full border border-[#6a38e9] lg:text-lg md:text-base text-white lg:px-4 lg:py-4 px-2 py-2 sm:text-xs   `}
         onClick={() => handleOptionClick('option1')}
       >
         Web development
       </button>
       <button
         className={`option-btn ${selectedOption === 'option2' ? 'active' : ''} rounded-full border border-[#6a38e9] lg:text-lg md:text-base text-white lg:px-4 lg:py-4 px-2 py-2 sm:text-xs `}
         onClick={() => handleOptionClick('option2')}
       >
         RPA
       </button>
       <button
         className={`option-btn ${selectedOption === 'option3' ? 'active' : ''} rounded-full border border-[#6a38e9] lg:text-lg md:text-base text-white lg:px-4 lg:py-4 px-2 py-2 sm:text-xs`}
         onClick={() => handleOptionClick('option3')}
       >
         Game development
       </button>
       <button
         className={`option-btn ${selectedOption === 'option4' ? 'active' : ''} rounded-full border border-[#6a38e9] lg:text-lg md:text-base text-white lg:px-4 lg:py-4 px-2 py-2 sm:text-xs`}
         onClick={() => handleOptionClick('option4')}
       >
         APP development
       </button>
     </div>


     <div className='grid grid-cols-4 gap-3 md:grid-cols-4 lg:grid-cols-5 py-9'>
  {selectedOption && info[selectedOption]?.map(({ id, skill, img }) => (
    <SkillCard key={id} skill={skill} img={img} />
  ))}

</div>
</div>
    
 </div>


  )
}

