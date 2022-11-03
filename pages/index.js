import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'

export default function Home() {

  return (
    <div className='bg-[rgba(36,36,36)]
     text-white h-screen snap-x snap-mandatory 
     overflow-scroll z-0'>

      <title>Rawan's portfolio</title>


      <Header />

      <section className='snap-start'>
        <Intro />
      </section>

      <section id='aboutme' className=''>
        <AboutMe />
      </section>

      <Experience />

      <section id='skills' className='snap-start' >
        <Skills />
      </section>

      {/* project */}
      {/* contact Me */}
    </div>
  );
}
