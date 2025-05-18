"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FC } from "react";
import Image from "next/image";

const Banner: FC = () => {
  const [text] = useTypewriter({
    words: ["Responsive web design"],
    loop: 20,
  });

  return (
    <div
      className="min-h-[720px] md:min-h-[700px] bg-cover bg-center relative"
      style={{ backgroundColor: "#1E1E3F" }}
    >
      <div className="absolute inset-0 bg-opacity-0"></div>
      <div className="container mx-auto flex items-center justify-center h-full text-white px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left mt-20 md:mt-0">
            <h1 className="text-3xl font-bold pb-3 text-white">Hey There...</h1>
            <h3 className="text-4xl font-bold pb-4">
              I'm <span className="text-cyan-400 uppercase">SHARMIN</span>
            </h3>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-cyan-300 text-2xl">{text}</span>
              <Cursor cursorColor="cyan" />
            </div>
            <a
              href="https://drive.google.com/file/d/1zKH2u-yxGKw3PRh_AaXJU90miGww2vFJ/view?usp=sharing"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-6 py-3 bg-[#2D2D5E] text-white rounded hover:bg-[#3D3D78] transition-colors duration-300"
            >
              DOWNLOAD RESUME
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.ibb.co/dgVzQLW/White-and-Orange-Modern-Digital-Marketing-Agency-Banner-Landscape.png" // Replace with an image matching the illustration
              alt="Sharmin working at desk"
              width={500}
              height={600}
              className="max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;