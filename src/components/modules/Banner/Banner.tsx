/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
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

  return (
    <section
      id="home"
      // className="bg-cover bg-center md:h-[600px] min-h-screen "
      // style={{
      //   backgroundImage:
      //     "url(https://i.ibb.co/dgVzQLW/White-and-Orange-Modern-Digital-Marketing-Agency-Banner-Landscape.png)",
      // }}
    >
      <div className="bg-opacity-60 lg:pt-20 pt-10 md:pb-0 pb-10 w-full h-full flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col-reverse md:flex-row items-center justify-between md:gap-6 sm:gap-2 lg:gap-12">

          {/* Text Section */}
          <div className="lg:text-start  text-white w-full md:w-1/2 space-y-4 mt-10 md:mt-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Hello World...</h1>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              I'm{" "}
              <span className="text-cyan-500 uppercase tracking-wide">Sh
                <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">aRmin</span>
              </span>
            </h3>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-500">Full  <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
     Stack Developer
  </span>
</h3>
            {/* <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-400">
              {text}
              <Cursor cursorColor="red" />
            </div> */}

           <div className="flex items-center gap-2">
               {/* resume */}
            {/* <a
              href="https://drive.google.com/file/d/1T43fYbS81xpJQectj_YJp2gZ8FehkcNy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-black shadow-sm mt-4 bg-gradient-to-b from-cyan-200 to-cyan-600 
 transition hover:from-cyan-100 hover:to-cyan-400 "
            >
              <span>📄</span> Resume
            </a> */}

             {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/sharmin-akther-098595296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400 p-2 hover:bg-cyan-400 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/SharminMily"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400 p-2 hover:bg-cyan-400 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:sharminakther5599@gmail.com"
            className="rounded-full border border-cyan-400 p-2 hover:bg-cyan-400 transition"
          >
            <SiGmail className="text-2xl" />
          </a>
        </div>

           </div>

          </div>

          {/* Animation Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              src="https://lottie.host/embed/00fc78a7-704a-4a47-91a4-67f750023312/FYNQUn8NHR.json"
              className="md:w-full h-1/2 w-1/2 md:h-96 lg:h-[500px] xl:h-[600px]"
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