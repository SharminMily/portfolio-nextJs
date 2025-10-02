/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// import { Cursor, useTypewriter } from "react-simple-typewriter";
  // const [text] = useTypewriter({
  //   words: [
  //     "Full stack Developer !",
  //     "Creative Developer !",
  //     "Font end Developer !",
  //     "Backend Developer !",
  //     "Responsive web design",
  //   ],
  //   loop: 20,
  // });
   // className="bg-cover bg-center md:h-[600px] min-h-screen "
      // style={{
      //   backgroundImage:
      //     "url(https://i.ibb.co/dgVzQLW/White-and-Orange-Modern-Digital-Marketing-Agency-Banner-Landscape.png)",
      // }}

const Banner = () => {
  return (
    <section id="home" className=" bg-[#010118] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-15 md:pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-start text-white space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Hello World...
            </h1>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              I'm{" "}
              <span
                data-aos="fade-left"
                className="text-cyan-500 uppercase tracking-wide"
              >
                Sh
                <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
                  aRmin
                </span>
              </span>
            </h3>
            <h3
              data-aos="fade-left"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-500"
            >
              Full{" "}
              <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
                Stack Developer
              </span>
            </h3>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/sharmin-akther-098595296"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-2 hover:bg-cyan-600 transition"
              >
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
              <a
                href="https://github.com/SharminMily"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500 p-2 hover:bg-cyan-600 transition"
              >
                <FaGithub className="text-2xl sm:text-3xl" />
              </a>
              <a
                href="mailto:sharminakther5599@gmail.com"
                className="rounded-full border border-cyan-500 p-2 hover:bg-cyan-600 transition"
              >
                <SiGmail className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
          {/* Animation Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              src="https://lottie.host/embed/00fc78a7-704a-4a47-91a4-67f750023312/FYNQUn8NHR.json"
              className="w-2/3 sm:w-1/2 md:w-full h-52 sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px] object-contain"
              title="Lottie Animation"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;