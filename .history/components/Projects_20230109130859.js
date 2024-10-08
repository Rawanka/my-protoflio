import React from 'react'
import Project from './Project'
import Image from 'next/image'

export default function Projects() {
    const projects = [
        {n:1, projeceName:"building Microsoft system",brief:"building a whole system for a private school with Microsoft and set up teams for the class "}, 
        {n:2, projeceName:"Airbnb clone",brief:"building Airbnb clone for learning purpose"}, 
        {n:3, projeceName:"Admin Dashboard App",brief:"made an admin dashboard for future project to build a whole system"},
        {n:4, projeceName:"build portfolio",brief:"building this portfolio by next js, tailwindcss, and other libraries "}

    ]


    return (
        <div className='h-screen flex flex-row relative text-center
         md:flex-row lg:text-left justify-evenly
        mx-auto items-center p-10'>
            <h3 className='absolute top-24 uppercase
         tracking-[20px] text-gray-500
         text-2xl '
            >Projects</h3>

            <div className=' relative w-full flex overflow-x-scroll 
             overflow-y-hidden snap-x snap-mandatory z-20 scrollbar'>
                {projects.map(({projeceName,brief,i}) => (

                    <div key={projects.length}
                    projeceName={projeceName}
                    brife={brief}
                     className='snap-center w-screen flex-shrink-0 flex flex-col space-y-5 justify-evenly p-20 md:p-40 lg:p-40'>
                        {/* <div className=' relative h-20 w-20'>
                        <Image
                            src='data:image/jpeg;base64,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'
                            alt=''
                            layout='fill'
                            />
                            </div> */}
                        <div className='px-0 md:px-10 max-w-6xl space-y-4'>
                            <h4 className='text-3xl font-semibold'>
                                <span className=' text-white '> {projeceName}</span>
                            </h4>
                            <p className='absolute top-36 uppercase tracking-[4px]
     text-gray-500 text-sm'>scroll left to see more</p>
                            <p className='flex text-md '>{brief}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[35%] bg-blue-900/10
             left-0 h-[200px] -skew-y-12'/>
        </div>
    )
}

