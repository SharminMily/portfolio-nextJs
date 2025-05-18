import About from '@/components/modules/About/About'
import Banner from '@/components/modules/Banner/Banner'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div> 
         <>
      <Navbar />
      <section id="home" className="h-screen text-white items-center justify-center text-4xl">
        <Banner />
      </section>
      <section id="about-section" className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <About />
      </section>
      <section id="skills-section" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        SKILLS SECTION
      </section>
      <section id="project-section" className="h-screen bg-gray-600 text-white flex items-center justify-center">
        PROJECTS SECTION
      </section>
      <section id="contact-section" className="h-screen bg-gray-500 text-white flex items-center justify-center">
        CONTACT SECTION
      </section>
      <section id="contact-section" className="h-screen bg-gray-500 text-white flex items-center justify-center">
        blog
      </section>
    </>
      
      <Footer />
    </div>
  )
}

export default Home