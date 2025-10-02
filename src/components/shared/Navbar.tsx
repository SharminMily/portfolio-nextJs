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

  const handleScroll = (section : any) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setOpen(false);
    }
  };

  const navItemClass = (section: any) =>
    `flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${
      activeSection === section
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400 focus:text-cyan-400"
    } px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200`;

  const NavOptions = (
    <>
      <li>
        <button
          onClick={() => handleScroll("home")}
          className={navItemClass("home")}
        >
          <HiHome className="text-xs sm:text-base md:text-lg lg:text-xl" />
          <span className="text-xs sm:text-sm md:text-base inline">Home</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("about-section")}
          className={navItemClass("about-section")}
        >
          <IoMdContact className="text-xs sm:text-base md:text-lg lg:text-xl" />
          <span className="text-xs sm:text-sm md:text-base inline">About</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("skills-section")}
          className={navItemClass("skills-section")}
        >
          <AiFillSignal className="text-xs sm:text-base md:text-lg lg:text-xl" />
          <span className="text-xs sm:text-sm md:text-base inline">Skills</span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("project-section")}
          className={navItemClass("project-section")}
        >
          <GrProjects className="text-xs sm:text-base md:text-lg lg:text-xl" />
          <span className="text-xs sm:text-sm md:text-base inline ">Projects</span>
        </button>
      </li>
      <li>
        <Link href="/blogs">
          <button className={navItemClass("contact-section")}>
            <GrContact className="text-xs sm:text-base md:text-lg lg:text-xl" />
            <span className="text-xs sm:text-sm md:text-base inline ">Blog</span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="https://drive.google.com/file/d/1zKH2u-yxGKw3PRh_AaXJU90miGww2vFJ/view?usp=sharing">
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded text-white font-semibold hover:bg-gray-700 focus:bg-gray-700">
            <span className="text-xs sm:text-sm md:text-sm">📄 Resume</span>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#010118] text-white z-50 shadow-md">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div>
            <Image
              height={100}
              width={100}
              src="https://i.ibb.co/M7HTfDb/SHARMIN-logo-removebg-preview.png"
              alt="Logo"
              className="w-14 sm:w-16 md:w-20 lg:w-24 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            {NavOptions}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-lg sm:text-xl md:text-2xl text-white focus:outline-none"
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
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-2 sm:px-4 py-2 text-white bg-[#010118] transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-1 sm:gap-2">{NavOptions}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
