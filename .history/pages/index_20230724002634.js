import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Education from '../components/Education'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Chat from '../components/Chat'
import Select from '../components/i18n'
import LanguageSwitcher from '../components/LanguageSwitcher'
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';
// import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";


const pubnub = new PubNub({
  publishKey: 'pub-c-0849b72c-151e-4068-a10e-f90a2dc727a0',
  subscribeKey: 'sub-c-d209e7ae-98f7-4ee6-9b18-1dc2e15cf745',
  uuid: 'myUniqueUUID'
});

const currentChannel = "Default";
const theme = "light";


export default function Home() {

  return (
    <PubNubProvider client={pubnub}>

    <div className='bg-[rgba(36,36,36)]
     text-white h-screen snap-y snap-mandatory 
     overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-transparent'>

      <title>Rawan portfolio</title>

      <Header />

      <section className='snap-start'>
        <Intro />
      </section>

      <section id='aboutme' className='snap-center'>
        <AboutMe />
      </section>

      <section id='education' className='snap-start' >
      <Education />
      </section>

      <section id='skills' className='snap-start' >
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start' >
        <Contact />
      </section>
      <Footer/>
      
      <Chat {...{ currentChannel, theme }}>
        <MessageList />
        <MessageInput />
      </Chat>

  </div>  
    </PubNubProvider>
     );
}

