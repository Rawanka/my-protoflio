import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <div className='bg-[rgba(36,36,36)]
     text-white h-screen snap-y snap-mandatory 
     overflow-scroll z-0'>

      <title>Rawan portfolio</title>


      <Header />

      <section className='snap-start'>
        <Intro />
      </section>

      <section id='aboutme' className='snap-center'>
        <AboutMe />
      </section>

      <section id='experince' className='snap-start' >
      <Experience />
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
    </div>


    
  );
}
