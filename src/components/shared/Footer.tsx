
"use client";
// import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-1 border-cyan-500 p-4 bg-[#010118] text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        {/* <div>
          <Image height={100} width={100}
            src="https://i.ibb.co/M7HTfDb/SHARMIN-logo-removebg-preview.png"
            alt="footer-logo"
            className="w-40"
          />
        </div> */}

       
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        SHARMIN © {currentYear} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
