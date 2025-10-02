import About from "@/components/modules/About/About";
import Banner from "@/components/modules/Banner/Banner";
import Services from "@/components/modules/Services/Services";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import Projects from "./projects/page";
import Skill from "@/components/modules/Skills/Skills";
import ContactMe from "@/components/modules/ContactMe/ContactMe";

const Home = () => {
  return (
    <div className=" ">
      {/* bg-[#031035] bg-[#020223] */}
      <>
        <Navbar />
        <section
          id="home"
          className=""
        >
          <Banner />
        </section>
        <section
          id="about-section"
          className=""
        >
          <About />
        </section>
        <section
          id="skills-section"
          className=" "
        >
          <Skill />
        </section>
        <section
          id="project-section"
          className=""
        >
          <Projects />
        </section>

       </>

     <section 
      
          className=""
          >
       <Services />
     </section>

      <section
        id="contact-section"
        className=""
      >
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
