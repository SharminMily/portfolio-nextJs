/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import Image from "next/image";

import { useState, useEffect } from "react";

interface Skill {
  title: string;
  image: string; 
}

export const getAllSkills = async (): Promise<Skill[]> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills`; 
  console.log("Request URL:", uri);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    
  };

  const res = await fetch(uri, {
    method: "GET",
    headers,
  });

  console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error);
    throw new Error(error.message || "Failed to fetch Skills");
  }

  const data = await res.json();
  console.log("Fetched Skills:", data);
  return data;
};

const Skill = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch skills on component mount
  useEffect(() => {
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
    return <div className="text-white text-center my-28">Loading skills...</div>;
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
    <div className="text-white my-28">
      <section id="skills-section">
        <h1
          data-aos="fade-right"
          className="text-cyan-400 md:text-4xl text-3xl underline font-bold text-center mb-10"
        >
          MY SKILLS
        </h1>

        <div className="flex flex-wrap justify-evenly items-center gap-4 md:p-4 px-2 md:py-10 py-4 md:mx-16 mx-4 rounded-lg border border-cyan-400 shadow-inner shadow-cyan-400">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative md:mb-12 mb-8 md:w-20 w-16  p-3 border-2 border-cyan-400 hover:bg-cyan-400 rounded-full shadow-lg shadow-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Render image: either as an Image height={100} tag or SVG */}
              {skill.image.includes("<svg") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: skill.image }}
                  className="w-14 h-14"
                />
              ) : (
                <Image height={100} width={100}
                  src={skill.image}
                  alt={skill.title}
                  className="w-14 h-14 object-contain"
                  onError={() => console.error(`Failed to load image for ${skill.title}`)}
                />
              )}
              {hoveredIndex === index && (
                <div className="absolute top-24 right-0 -left-4 md:w-28 w-20 p-1 md:p-2 border border-cyan-400 rounded-xl text-white text-sm text-center shadow-lg">
                  {skill.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;