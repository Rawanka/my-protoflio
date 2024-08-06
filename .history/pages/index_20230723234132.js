// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Intro from '../components/Intro'
// import Education from '../components/Education'
// import Skills from '../components/Skills'
// import AboutMe from '../components/AboutMe'
// import Projects from '../components/Projects'
// import Contact from '../components/Contact'
// import Chat from '../components/Chat'
// import Select from '../components/i18n'
// import LanguageSwitcher from '../components/LanguageSwitcher'
// import React, { useState, useEffect } from 'react';
// import PubNub from 'pubnub';
// import { PubNubProvider, usePubNub } from 'pubnub-react';

// const pubnub = new PubNub({
//   publishKey: 'pub-c-0849b72c-151e-4068-a10e-f90a2dc727a0',
//   subscribeKey: 'sub-c-d209e7ae-98f7-4ee6-9b18-1dc2e15cf745',
//   uuid: 'myUniqueUUID'
// });



// export default function Home() {

//   return (
//     <div className='bg-[rgba(36,36,36)]
//      text-white h-screen snap-y snap-mandatory 
//      overflow-y-scroll overflow-x-hidden z-0
//       scrollbar scrollbar-track-transparent'>

//       <title>Rawan portfolio</title>
//       <PubNubProvider client={pubnub}>

//       <Header />

//       <section className='snap-start'>
//         <Intro />
//       </section>

//       <section id='aboutme' className='snap-center'>
//         <AboutMe />
//       </section>

//       <section id='education' className='snap-start' >
//       <Education />
//       </section>

//       <section id='skills' className='snap-start' >
//         <Skills />
//       </section>

//       <section id='projects' className='snap-start'>
//         <Projects />
//       </section>

//       <section id='contact' className='snap-start' >
//         <Contact />
//       </section>
//       <Footer/>
      

//       <Chat />
//     </PubNubProvider>


//     </div>

//   );
// }



// pages/index.js

import { useState, useEffect } from 'react'
import { usePubNub } from 'pubnub-react'

export default function Home() {


  const [channels] = useState(['chat'])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const listener = {
      message: msg => setMessages(prev => [...prev, msg])  
    }

    pubnub.addListener(listener)
    pubnub.subscribe({channels})

    return () => {
      pubnub.unsubscribe({channels})
      pubnub.removeListener(listener)
    }
  }, [pubnub])  

  const sendMessage = msg => {
    if (msg) pubnub.publish({channel: channels[0], message: msg})
  }

  return (
    <div className="h-screen flex bg-gray-200">

      <div className="m-auto bg-white rounded shadow p-8 max-w-xl">

        <div className="text-lg font-bold text-center mb-4">
          Chat
        </div>

        <div className="space-y-2 h-64 overflow-y-scroll">
          {messages.map((msg, index) => (
            <p key={index} className="bg-gray-300 p-2 rounded">{msg.text}</p>
          ))}
        </div>

        <div className="flex mt-4">
          <input 
            className="border p-2 flex-1 mr-2"
            onKeyPress={e => e.key === 'Enter' && sendMessage(e.target.value)}
          />
          <button 
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => sendMessage(document.querySelector('input').value)}
          >
            Send
          </button>
        </div>

      </div>

    </div>
  )
}

