/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { TiChevronRight } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about-section" className="py-16 mt-10 w-full px-4">
      <h1
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:text-5xl text-3xl text-center text-cyan-400 font-bold mb-10"
      >
        A
        <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">bout Me</span>
        
      </h1>

      <div className=" flex flex-col lg:flex-row gap-10 items-center justify-between shadow-lg shadow-cyan-400 rounded-lg p-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
          height={500} width={500}
            src="https://i.ibb.co/9b5CFth/IMG-20230601-101917-removebg-preview.png"
            alt="Sharmin"
            className="h-[50vh] w-72 object-cover rounded-lg border-4 border-cyan-300 shadow-2xl hover:shadow-cyan-300"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:p-4 md:p-8 lg:w-1/2 space-y-4">
          <div
            data-aos={open ? "zoom-in" : "zoom-out"}
            className="shadow-inner shadow-cyan-400 p-6 rounded-xl bg-[#111930] bg-opacity-40"
          >
            <h2 className="text-2xl text-cyan-400 font-bold underline mb-4">
              {open ? "Why You Hire Me ?" : "INTRODUCTION:"}
            </h2>

            <p className="text-gray-200 text-sm font-[Georgia] leading-relaxed">
              {open ? (
                <>
                  I am a Web, Full stack developer and I have skills in
                  React/Next.js, Tailwind CSS, JavaScript, Node.js, Express.js, SQl, prisma
                  and MongoDB. I've been working with these technologies for a long
                  time and can help create user-friendly web applications. <br /><br />
                  If given the opportunity to join your team, I’ll contribute to
                  building clean and performant digital products.
                </>
              ) : (
                <>
                  Hey, I'm Sharmin — a passionate web developer dedicated to
                  crafting intuitive digital solutions. I specialize in SQl, prisma,
                  Express.js, MongoDB, and Node.js to deliver efficient, user-friendly
                  applications. <br /><br />
                  I love solving real-world problems, continuously expanding my
                  skills, and turning ideas into powerful user-focused experiences.
                </>
              )}
            </p>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 inline-flex items-center gap-2 border border-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-500 transition"
          >
            {open ? (
              <>
                <IoArrowBackOutline />
                Back
              </>
            ) : (
              <>
                Why You Hire Me?
                <TiChevronRight className="text-2xl" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
