
"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-cyan-400 p-4 bg-[#020223] text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div>
          <Image height={100} width={100}
            src="https://i.ibb.co/M7HTfDb/SHARMIN-logo-removebg-preview.png"
            alt="footer-logo"
            className="w-40"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
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

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        SHARMIN © {currentYear} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
