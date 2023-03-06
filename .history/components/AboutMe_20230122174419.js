import React from 'react'

export default function AboutMe() {
    return (
        <div>
            <div className='h-screen flex flex-col relative text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
                <h3 className=' absolute top-24 uppercase tracking-[18px]
     text-gray-500 text-2xl'>About
                </h3>
                <span className='text-center text-xs space-y-4 md:text-left md:space-y-6 md:px-8 md:text-lg'>
                    <p> 
                    I'm Rawan, a recent graduate from Taibah University with a Bachelor's degree in Business.<br/> Despite my major, I've always had a strong interest in technology and taught myself to code through online bootcamps, starting with HTML, CSS, and Javascript.
                    What kept me motivated was the satisfaction of building something from scratch and watching it evolve. <br/>
                    I continued to expand my skills by learning new frameworks and libraries, and recently delved into the world of AI and Python. I'm proud of the progress I've made in my journey so far and am eager to continue learning and exploring new technologies.
                    Currently, I am working as a freelancer utilizing my skills to build projects for clients.</p></span>
            </div>
        </div>
    )
}

