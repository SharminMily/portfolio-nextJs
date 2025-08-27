/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
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
  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-[#111930] w-32 h-40 lg:px-8 flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-cyan-500/50 transition duration-300 relative"
    >
      {/* Top Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl"></div>

      {/* Icon */}
      {skill.image.includes("<svg") ? (
        <div
          dangerouslySetInnerHTML={{ __html: skill.image }}
          className="w-14 h-14"
        />
      ) : (
       <Image
          height={50}
          width={50}
          src={skill.image}
          alt={skill.title}
          className="w-12 h-12 object-contain mb-2"
        />
      )}

      {/* Title */}
      <p className="text-white text-sm font-medium mt-4">{skill.title}</p>
    </div>
  ))}
</div>



      </section>
    </div>
  );
};

// const Skill = () => {
//   const [skills, setSkills] = useState<Skill[]>([]);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch skills on component mount
//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         setLoading(true);
//         const fetchedSkills = await getAllSkills();
//         setSkills(fetchedSkills);
//         setLoading(false);
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (err: any) {
//         setError("Failed to load skills. Please try again later.");
//         setLoading(false);
//       }
//     };
//     fetchSkills();
//   }, []);

//   // Render loading state
//   if (loading) {
//     return (
//       <div className="text-white text-center my-28">Loading skills...</div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return <div className="text-red-500 text-center my-28">{error}</div>;
//   }

//   // Render no skills state
//   if (skills.length === 0) {
//     return <div className="text-white text-center my-28">No skills found.</div>;
//   }

//   return (
//     <div className="text-white my-28">
//       <section id="skills-section">

//         <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-4">
//           {/* Left Side */}
//           <div className="lg:text-left text-center">
//             <h1
//               data-aos="fade-right"
//               className="text-cyan-400 md:text-4xl text-3xl font-bold"
//             >
//               S
//               <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
//                KILLS </span>  -
//             </h1>
//           </div>

//           {/* Right Side */}
//           <div className="lg:text-right text-center mt-4 lg:mt-0">
//             <p className="text-gray-300 max-w-md">
//               Practice makes a man perfect in skill,
//       Without practice, <br /> even talent goes in vain.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-wrap  justify-evenly items-center gap-4 md:p-4 px-2 md:py-10 py-4 md:mx-16 mx-4 ">
//           {/* rounded-lg border border-cyan-400 shadow-inner shadow-cyan-400 */}
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="relative md:mb-12 mb-8 md:w-20 w-16  p-3 border-2 border-cyan-400 hover:bg-cyan-400 rounded-full shadow-lg shadow-white"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Render image: either as an Image height={100} tag or SVG */}
//               {skill.image.includes("<svg") ? (
//                 <div
//                   dangerouslySetInnerHTML={{ __html: skill.image }}
//                   className="w-14 h-14"
//                 />
//               ) : (
//                 <Image
//                   height={100}
//                   width={100}
//                   src={skill.image}
//                   alt={skill.title}
//                   className="w-14 h-14 object-contain"
//                   onError={() =>
//                     console.error(`Failed to load image for ${skill.title}`)
//                   }
//                 />
//               )}
//               {hoveredIndex === index && (
//                 <div className="absolute top-24 right-0 -left-4 md:w-28 w-20 p-1 md:p-2 border border-cyan-400 rounded-xl text-white text-sm text-center shadow-lg">
//                   {skill.title}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//       </section>
//     </div>
//   );
// };

export default Skill;
