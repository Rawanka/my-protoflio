import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';


export default function Hero() {
    const [text1, count1] = useTypewriter({
        words: [
            "Hi World",
            "I'm Rawan",
            "full stack Devleoper",
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (

        <div className=' h-screen flex flex-col space-y-8
        items-center justify-center text-center overflow-hidden 
        '>

            <BackgroundCircles />
            <div>
                <link href='#intro' />
                <h2 className='text-sm uppercase text-gray-500
                pb-4 tracking-[15px] '>
                    Deveolper
                </h2>
                <h1 className='text-2xl font-semibold'>
                    <span className='mr-1'>{text1}</span>
                    <Cursor cursorColor='#6a38e9' />
                </h1>
            </div>
        </div>
    )
}

