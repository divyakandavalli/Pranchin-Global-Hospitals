import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/PrachinLogo-3.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center top-0 font-dm z-50">
        {/* HEADER */}
        <header className="w-[95%] md:w-[90%] max-w-[1400px] bg-[#FEFEFF] backdrop-blur-md shadow-[0px_0px_30px_0px_rgba(226,221,213,0.4)] rounded-b-[16px] py-2 px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="h-[60px] md:h-auto w-auto" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#094ca0]">Home</Link>
            <Link to="/about" className="hover:text-[#094ca0]">About</Link>
            <Link to="/doctors" className="hover:text-[#094ca0]">Doctors</Link>
            <Link to="/all-specialities" className="hover:text-[#094ca0]">Specialities</Link>
            <Link to="/gallery" className="hover:text-[#094ca0]">Gallery</Link>
            <Link to="/contact" className="hover:text-[#094ca0]">Contact</Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Button hidden on small */}
            <Link to="/book-visit">
              <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg bg-[#E5F4FF] text-[#094ca0] font-medium hover:bg-[#094ca0] hover:text-white text-sm sm:text-base">
                Book a visit
              </button>
            </Link>

            <Link to="/quick-contact">
              <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg bg-[#f37721] text-white font-medium hover:bg-[#094ca0] text-sm sm:text-base">
                Quick contact
              </button>
            </Link>

            {/* MOBILE TOGGLER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden ml-2 text-[#094ca0]"
            >
              <MenuIcon />
            </button>
          </div>
        </header>
      </div>

      {/* OFFCANVAS */}
      <div
        className={`fixed inset-0 z-50 transition ${open ? "visible" : "invisible"}`}
      >
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-lg p-6 transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* CLOSE */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          {/* MENU */}
          <nav className="flex flex-col gap-6 text-gray-700 font-medium text-lg">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/team" onClick={() => setOpen(false)}>Team</Link>
            <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <div className="cursor-pointer">Specialities</div>
            <Link to="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            {/* MOBILE BUTTONS */}
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/book-visit">
                <button className="w-full px-5 py-3 rounded-lg bg-[#E5F4FF] text-[#094ca0] font-medium">
                  Book a visit
                </button>
              </Link>

              <Link to="/quick-contact">
                <button className="w-full px-5 py-3 rounded-lg bg-[#f37721] text-white font-medium">
                  Quick contact
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
