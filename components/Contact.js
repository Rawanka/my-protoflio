import React from 'react'
import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon
} from '@heroicons/react/24/solid'

export default function Contact() {
    return (
        <div className='flex relative h-screen flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

                <h3 className='absolute p-6 top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>
            contact
            </h3>
            <div className='flex flex-col space-y-7 relative top-14
            '>
                <h4 className='text-4xl font-semibold text-center'> I got what you need {""}
                <span className='decoration-slate-400/50 underline 
                '>Contact me</span>
                </h4>

                <div className='space-y-3'>
                 <div className='flex items-center space-x-5
                 justify-center'>
                <PhoneIcon className='text-[#6a38e9] h-7
                w-7 animate-pulse'/>
                <p className='text-2xl'>+(966)501438910</p>
                    </div>

                <div className='flex items-center space-x-5
                justify-center'>
                <EnvelopeIcon className='text-[#6a38e9] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>Rawankalharbi@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#6a38e9] h-7
                w-7 animate-pulse'/>
                <p className='text-2xl'>Sudia Arabia</p>
                </div>

                </div>

                <form className='flex flex-col space-y-2 mx-auto 
                 '>
                    <div className='flex space-x-2'>
                        <input type='text' placeholder='Name' className='contactInput' />
                        <input type='text' placeholder='Email' className='contactInput' />
                    </div>

                    <input type='text' placeholder='Subject' className='contactInput' />

                    <textarea placeholder='Message' className='contactInput' />

                    <button className='bg-[#6a38e9]/40 py-5 px-10
                    rounded-md text-white font-bold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

