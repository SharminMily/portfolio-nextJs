/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import { GrContact, GrProjects } from "react-icons/gr";
import { AiFillSignal } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (section: any) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setOpen(false);
    }
  };

  const navItemClass = (section: any) =>
    `flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold ${
      activeSection === section
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400"
    } transition-colors duration-200`;

  const NavOptions = (
    <>
      <li>
        <button
          onClick={() => handleScroll("home")}
          className={navItemClass("home")}
        >
          <HiHome className="text-base sm:text-lg lg:text-xl " />
          <span className="md:text-sm"> HOME</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("about-section")}
          className={navItemClass("about-section")}
        >
          <IoMdContact className="text-base sm:text-lg lg:text-xl" />
          <span className="md:text-sm">ABOUT</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("skills-section")}
          className={navItemClass("skills-section")}
        >
          <AiFillSignal className="text-base sm:text-lg lg:text-xl" />
          <span className="md:text-sm"> SKILLS</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("project-section")}
          className={navItemClass("project-section")}
        >
          <GrProjects className="text-sm md:text-sm sm:text-base lg:text-lg" />
          <span className="md:text-sm"> PROJECTS</span>
        </button>
      </li>
      <li>
        <Link href="/blogs">
          <button className={navItemClass("contact-section")}>
            <GrContact className="text-sm sm:text-base lg:text-lg" />
            <span className="md:text-sm"> BLOG</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="https://drive.google.com/file/d/1T43fYbS81xpJQectj_YJp2gZ8FehkcNy/view?usp=sharing">
          <button className="">
         
            <span className="md:text-sm font-semibold"> 📄 RESUME</span>
            {/* <a
              href="https://drive.google.com/file/d/1T43fYbS81xpJQectj_YJp2gZ8FehkcNy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            ></a> */}
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-transparent overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 bg-[#010118] bg-opacity-95 shadow-md">
        {/* Logo */}
        <div>
          <Image
            height={100}
            width={100}
            src="https://i.ibb.co/M7HTfDb/SHARMIN-logo-removebg-preview.png"
            alt="Logo"
            className="w-20 sm:w-24 md:w-24 lg:w-28 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {NavOptions}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-xl sm:text-2xl md:text-3xl text-white focus:outline-none"
          >
            {open ? (
              <CgClose />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 sm:h-6 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 sm:px-6 md:px-8 pb-4 bg-[#1A0B2E] transition-all duration-300">
          <ul className="flex flex-col gap-3 sm:gap-4">{NavOptions}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
