/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { TiChevronRight } from "react-icons/ti";
import AOS from "aos";
import Image from "next/image";


const About = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <section id="about-section" className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full px-2 sm:px-4 md:px-6 lg:px-8">
  <h1
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-cyan-400 font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10"
  >
    A
    <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">bout Me</span>
  </h1>

  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-between shadow-lg shadow-cyan-600 rounded-lg p-2 sm:p-4 md:p-6 lg:p-8 bg-[#010118]">
    {/* Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <Image
        height={500}
        width={500}
        src="/myportfoliopic.jpg"
        alt="Sharmin"
        className="h-48 sm:h-56 md:h-64 lg:h-[50vh] w-40 sm:w-48 md:w-56 lg:w-72 object-cover rounded-lg border-4 border-cyan-600 shadow-2xl hover:shadow-cyan-300 transition duration-300"
      />
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-1/2 p-2 sm:p-4 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4">
      <div
        data-aos={open ? "zoom-in" : "zoom-out"}
        data-aos-duration="1000"
        className="shadow-inner shadow-cyan-400 p-2 sm:p-4 md:p-6 rounded-xl bg-[#111930] bg-opacity-40"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-500 font-bold underline mb-2 sm:mb-3 md:mb-4">
          {open ? "Why You Hire Me ?" : "INTRODUCTION:"}
        </h2>

        <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-[Georgia] leading-relaxed">
          {open ? (
            <>
              I am a Web, Full stack developer and I have skills in
              React/Next.js, Tailwind CSS, JavaScript, Node.js, Express.js, SQL, Prisma
              and MongoDB. I've been working with these technologies for a long
              time and can help create user-friendly web applications. <br /><br />
              If given the opportunity to join your team, I’ll contribute to
              building clean and performant digital products.
            </>
          ) : (
            <>
              Hey, I'm Sharmin — a passionate web developer dedicated to
              crafting intuitive digital solutions. I specialize in SQL, Prisma,
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
        className="mt-2 sm:mt-3 md:mt-4 inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 md:py-2 rounded-lg text-xs sm:text-sm md:text-base text-white border border-cyan-500 hover:bg-cyan-600 transition duration-300"
      >
        {open ? (
          <>
            <IoArrowBackOutline className="text-xs sm:text-base md:text-lg" />
            Back
          </>
        ) : (
          <>
            Why You Hire Me?
            <TiChevronRight className="text-sm sm:text-xl md:text-2xl" />
          </>
        )}
      </button>
    </div>
  </div>
</section>
  );
};

export default About;
