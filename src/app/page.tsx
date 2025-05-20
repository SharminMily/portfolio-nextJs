import About from '@/components/modules/About/About'
import Banner from '@/components/modules/Banner/Banner'
import Services from '@/components/modules/Services/Services'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import Projects from './projects/page'
import Skill from '@/components/modules/Skills/Skills'
import ContactMe from '@/components/modules/ContactMe/ContactMe'

const Home = () => {
  return (
    <div className="bg-[#031035] max-w-8xl mx-auto"> 
         <>
      <Navbar />
      <section id="home" className="h-screen text-white items-center justify-center text-4xl">
        <Banner />
      </section>
      <section id="about-section" className="h-screen bg-[#031035] text-white flex items-center justify-center">
        <About />
      </section>
      <section id="skills-section" className="h-screen bg-[#031035] text-white flex items-center justify-center">
       <Skill/>
      </section>
      <section id="project-section" className="h-screen bg-[#031035] text-white flex items-center justify-center">
        <Projects />
      </section>
      
      {/* <section id="contact-section" className="h-screen bg-[#031035]text-white flex items-center justify-center">
        blog
      </section> */}
    </>

    <Services />

      <section id="contact-section" className=" bg-[#031035] text-white flex items-center justify-center">
        <ContactMe />
      </section>
      
      <Footer />
    </div>
  )
}

export default Home