import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/PrachinLogo-3.png";

export default function Header() {
  return (
    <div className="w-full flex justify-center  top-0 font-dm z-50">
      {/* Floating Header */}
      <header className="w-[90%] max-w-[80%] bg-[#FEFEFF] backdrop-blur-md  shadow-[0px_0px_30px_0px_rgba(226, 221, 213, 0.4)] rounded-b-[16px]  py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link to="/">
            <img src={logo} alt="logo" className="h-auto w-auto" />
          </Link>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#094ca0]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#094ca0]">
            About
          </Link>
          <Link to="/team" className="hover:text-[#094ca0]">
            Team
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#094ca0]">
            Specialities
          </div>
          <Link to="/gallery" className="hover:text-[#094ca0]">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-[#094ca0]">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link to="/book-visit">
            <button className="hidden sm:block px-[25px] py-[16px] rounded-lg bg-[#E5F4FF] text-[#094ca0] font-medium hover:bg-[#094ca0] hover:text-white">
              Book a visit
            </button>
          </Link>

          <Link to="/quick-contact">
            <button className="px-[25px] py-[16px] rounded-lg bg-[#f37721] text-white font-medium hover:bg-[#094ca0]">
              Quick contact
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
