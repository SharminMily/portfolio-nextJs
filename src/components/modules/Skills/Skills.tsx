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
      <div className="text-white text-center my-10 sm:my-16 md:my-20 lg:my-28">Loading skills...</div>
    );
  }

  // Render error state
  if (error) {
    return <div className="text-red-500 text-center my-10 sm:my-16 md:my-20 lg:my-28">{error}</div>;
  }

  // Render no skills state
  if (skills.length === 0) {
    return <div className="text-white text-center my-10 sm:my-16 md:my-20 lg:my-28">No skills found.</div>;
  }

  return (
    <div className="text-white my-10 sm:my-16 md:my-20 lg:my-28">
      <section id="skills-section" className="bg-[#010118]">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center py-4 sm:py-6 md:py-8">
            {/* Left Side */}
            <div className="lg:text-left text-center mb-4 lg:mb-0">
              <h1
                data-aos="fade-right"
                className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold"
              >
                S
                <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
                  KILLS{" "}
                </span>{" "}
                -
              </h1>
            </div>

            {/* Right Side */}
            <div className="lg:text-right text-center">
              <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Practice makes a man perfect in skill, Without practice, <br /> even talent goes in vain.
              </p>
            </div>
          </div>

          {/* Skills Marquee */}
          <div className="px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
            <Marquee
              speed={100}
              pauseOnHover={true}
              gradient={false}
              loop={0}
              className=""
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#111930] w-20 sm:w-24 md:w-28 lg:w-32 h-24 sm:h-28 md:h-32 lg:h-36 flex flex-col items-center justify-center mx-2 sm:mx-3 rounded-2xl shadow-md hover:shadow-cyan-500/50 transition duration-300 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl"></div>
                  {/* Icon */}
                  {skill.image.includes('<svg') ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: skill.image }}
                      className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12"
                    />
                  ) : (
                    <Image
                      height={50}
                      width={50}
                      src={skill.image}
                      alt={skill.title}
                      className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 object-contain mb-1 sm:mb-2"
                    />
                  )}
                  {/* Title */}
                  <p className="text-white text-xs sm:text-sm md:text-base font-medium mt-1 sm:mt-2">
                    {skill.title}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
