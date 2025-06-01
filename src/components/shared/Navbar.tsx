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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (section: any) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setOpen(false); 
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navItemClass = (section : any) =>
    `flex items-center gap-2 text-base font-semibold ${
      activeSection === section ? "text-cyan-400" : "text-white hover:text-cyan-400"
    }`;

  const NavOptions = (
    <>
      <li>
        <button onClick={() => handleScroll("home")} className={navItemClass("home")}>
          <HiHome className="text-lg" />
          HOME
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("about-section")}
          className={navItemClass("about-section")}
        >
          <IoMdContact className="text-lg" />
          ABOUT
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("skills-section")}
          className={navItemClass("skills-section")}
        >
          <AiFillSignal className="text-lg" />
          SKILLS
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("project-section")}
          className={navItemClass("project-section")}
        >
          <GrProjects className="text-sm" />
          PROJECTS
        </button>
      </li>
      {/* <li>
        <button
          onClick={() => handleScroll("contact-section")}
          className={navItemClass("contact-section")}
        >
          <GrContact className="text-base" />
          CONTACT
        </button>
      </li> */}
     <li>
  <Link href="/blogs">
    <button
      className={navItemClass("contact-section")} // Retain your conditional styling
    >
      <GrContact className="text-base" />
      BLOG
    </button>
  </Link>
</li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#031035] bg-opacity-95 text-white shadow-md">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 py-">
        {/* Logo */}
        <div>
          <Image height={100} width={100}
            src="https://i.ibb.co/M7HTfDb/SHARMIN-logo-removebg-preview.png"
            alt="Logo"
            className="w-36"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">{NavOptions}</ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-white">
            {open ? <CgClose /> : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---- Mobile Dropdown ---- */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-[#1A0B2E]">
          <ul className="flex flex-col gap-4">{NavOptions}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
