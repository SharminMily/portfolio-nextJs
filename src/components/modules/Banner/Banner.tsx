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
      className="bg-cover bg-center md:h-[600px] min-h-screen "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/dgVzQLW/White-and-Orange-Modern-Digital-Marketing-Agency-Banner-Landscape.png)",
      }}
    >
      <div className="bg-opacity-60 lg:pt-20 pt-10 md:pb-0 pb-10 w-full h-full flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col-reverse md:flex-row items-center justify-between md:gap-6 sm:gap-2 lg:gap-12">

          {/* Text Section */}
          <div className="text-center text-white w-full md:w-1/2 space-y-4 mt-10 md:mt-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Hey There...</h1>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              I'm{" "}
              <span className="text-cyan-400 uppercase tracking-wide">
                Sha<span className="text-white">R</span>min
              </span>
            </h3>
            <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-400">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              src="https://lottie.host/embed/00fc78a7-704a-4a47-91a4-67f750023312/FYNQUn8NHR.json"
              className="md:w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
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