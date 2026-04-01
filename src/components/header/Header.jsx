import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/PrachinLogo-3.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center top-0 font-dm z-50">
        
        {/* HEADER */}
        <header className="w-[95%] md:w-[90%] max-w-[1400px] bg-[#FEFEFF] backdrop-blur-md shadow-[0px_0px_30px_0px_rgba(226,221,213,0.4)] rounded-b-[16px] py-2 px-4 sm:px-6 flex items-center justify-between relative z-50 overflow-visible">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="h-[60px] md:h-auto w-auto" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium relative">
            <Link to="/" className="hover:text-[#094ca0]">Home</Link>
            <Link to="/about" className="hover:text-[#094ca0]">About</Link>
            <Link to="/doctors" className="hover:text-[#094ca0]">Doctors</Link>

            {/* 🔥 MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#094ca0]">
                Specialities
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="m19 9-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[900px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-8 transition-all duration-300 z-[9999] ${
                  megaOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >

                {/* COLUMN 1 */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Core Specialities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link to="/sample-service">Cardiology</Link></li>
                    <li><Link to="/neurology">Neurology</Link></li>
                    <li><Link to="/neuro-surgery">Neuro Surgery</Link></li>
                    <li><Link to="/oncology">Oncology</Link></li>
                    <li><Link to="/general-medicine">General Medicine</Link></li>
                    <li><Link to="/pulmonology">Pulmonology</Link></li>
                    <li><Link to="/nephrology">Nephrology</Link></li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Surgical Specialities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link to="/spine-surgery">Spine Surgery</Link></li>
                    <li><Link to="/gastroenterology">Gastroenterology</Link></li>
                    <li><Link to="/surgical-gastro">Surgical Gastroenterology</Link></li>
                    <li><Link to="/orthopedics">Orthopedics</Link></li>
                    <li><Link to="/arthroscopy">Arthroscopy - Arthroplasty</Link></li>
                    <li><Link to="/urology">Urology</Link></li>
                    <li><Link to="/vascular">Vascular Surgery</Link></li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Support & Others</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link to="/rheumatology">Rheumatology</Link></li>
                    <li><Link to="/obg">Obstetrics & Gynecology</Link></li>
                    <li><Link to="/pediatrics">Pediatrics & Neonatology</Link></li>
                    <li><Link to="/dental">Dental & Maxillo Facial</Link></li>
                    <li><Link to="/anaesthesia">Anaesthesiology & Pain Management</Link></li>
                    <li><Link to="/critical-care">Critical Care</Link></li>
                    <li><Link to="/emergency">Emergency Medicine</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            <Link to="/gallery" className="hover:text-[#094ca0]">Gallery</Link>
            <Link to="/careers" className="hover:text-[#094ca0]">Careers</Link>
            <Link to="/contact" className="hover:text-[#094ca0]">Contact</Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/book-visit">
              <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg bg-[#E5F4FF] text-[#094ca0] font-medium hover:bg-[#094ca0] hover:text-white">
                Book a visit
              </button>
            </Link>

        <Link to="/quick-contact">
  <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg border border-[#f37721] text-[#f37721] font-medium hover:bg-[#094ca0] hover:text-white hover:border-transparent transition">
    Quick contact
  </button>
</Link>
            <button onClick={() => setOpen(true)} className="md:hidden ml-2 text-[#094ca0]">
              <MenuIcon />
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        
        <div
          className={`absolute inset-0 bg-black/50 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-6 transition ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>

            {/* MOBILE SPECIALITIES */}
            <div>
              <button onClick={() => setMegaOpen(!megaOpen)} className="w-full text-left">
                Specialities
              </button>

              {megaOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                  <Link to="/cardiology">Cardiology</Link>
                  <Link to="/neurology">Neurology</Link>
                  <Link to="/oncology">Oncology</Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}