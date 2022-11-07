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
                <span className='text-center text-s space-y-4 md:text-left md:space-y-6 md:px-8 md:text-lg'>
                    <p> 
                    My name is Rawan I graduated from Taibah university with a bachelor in business degree I always loved technology while getting 
                    my degree I taught myself coding through Bootcamps starting from HTML, CSS to js.</p>
                    what made me continue was the satisfaction of building something from scratch and seeing it evolve was worth it all.<br />
                    <p></p>I continued my journey learning more frameworks and libraries wanting to learn more every day, also I'm interested in AI and how could it make life around us much easier in everything which made me start learning python.<br />
                    I'm proud of myself for how far I achieved in my journey and excited about how many things waiting to explore and learn.</span>
            </div>
        </div>
    )
}

