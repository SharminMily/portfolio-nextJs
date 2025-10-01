/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import AOS from "aos";
import Image from "next/image";
import Marquee from "react-fast-marquee"; 
import { useState, useEffect } from "react";
import { getAllSkills } from "../../../../hooks/getAllSkills";

interface Skill {
  title: string;
  image: string;
}


const Skill = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
   
  // Fetch skills on component mount
  useEffect(() => {
     AOS.init({ duration: 1000 });
    const fetchSkills = async () => {   
            try {
        setLoading(true);
        const fetchedSkills = await getAllSkills();
        setSkills(fetchedSkills);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError("Failed to load skills. Please try again later.");
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="text-white text-center my-28">Loading skills...</div>
    );
  }

  // Render error state
  if (error) {
    return <div className="text-red-500 text-center my-28">{error}</div>;
  }

  // Render no skills state
  if (skills.length === 0) {
    return <div className="text-white text-center my-28">No skills found.</div>;
  }

  return (
    <div className="text-white my-28 ">
      <section id="skills-section">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-4">
          {/* Left Side */}
          <div className="lg:text-left text-center">
            <h1
              data-aos="fade-right"
              className="text-cyan-400 md:text-4xl text-3xl font-bold"
            >
              S
              <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
                KILLS{" "}
              </span>{" "}
              -
            </h1>
          </div>

          {/* Right Side */}
          <div className="lg:text-right text-center mt-4 lg:mt-0">
            <p className="text-gray-200 max-w-md">
              Practice makes a man perfect in skill, Without practice, <br />{" "}
              even talent goes in vain.
            </p>
          </div>
        </div>

<div className="flex flex-wrap justify-center gap-6 md:gap-6 px-4 py-10">
      <Marquee
        speed={100}
        pauseOnHover={true}
        gradient={false}
        //autoFill={true}
        loop={0} 
        className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2 md:px-4 py-6 md:py-10"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111930] w-28 h-36 flex flex-col items-center justify-center mx-3 rounded-2xl shadow-md hover:shadow-cyan-500/50 transition duration-300 relative"
          >
            {/* Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl"></div>
            {/* Icon */}
            {skill.image.includes('<svg') ? (
              <div
                dangerouslySetInnerHTML={{ __html: skill.image }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
            ) : (
              <Image
                height={50}
                width={50}
                src={skill.image}
                alt={skill.title}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-2"
              />
            )}
            {/* Title */}
            <p className="text-white text-xs sm:text-sm md:text-base font-medium mt-2 md:mt-4">
              {skill.title}
            </p>
          </div>
        ))}
      </Marquee>
    </div>



      </section>
    </div>
  );
};


export default Skill;
