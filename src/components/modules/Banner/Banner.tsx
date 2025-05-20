/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Full stack Developer !",     
      "Creative Developer !",
      "Font end Developer !",
      "Backend Developer !",
      "Responsive web design",
    ],
    loop: 20,
  });

  return (
    <section
      id="home"
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/dgVzQLW/White-and-Orange-Modern-Digital-Marketing-Agency-Banner-Landscape.png)",
      }}
    >
      <div className=" bg-opacity-30 w-full h-full flex items-center justify-between mb=10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="text-white md:w-1/2 space-y-4 mt-10 md:mt-0">
            <h1 className="text-3xl font-bold">Hey There...</h1>
            <h3 className="text-4xl font-bold">
              I'm{" "}
              <span className="text-cyan-400 uppercase tracking-wide">
                Sha<span className="text-white">R</span>min
              </span>
            </h3>
            <div className="text-2xl text-cyan-400">
              {text}
              <Cursor cursorColor="red" />
            </div>

            {/* Small Button */}
            <a
              href="https://drive.google.com/file/d/1zKH2u-yxGKw3PRh_AaXJU90miGww2vFJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-3 py-1.5 text-sm font-medium text-black shadow-sm transition hover:bg-white mt-4"
            >
              <span>📄</span> Resume
            </a>
          </div>

          {/* Animation Section */}
          <div className="md:w-1/2 flex justify-center">
            <iframe
              src="https://lottie.host/embed/00fc78a7-704a-4a47-91a4-67f750023312/FYNQUn8NHR.json"
              className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px]"
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
