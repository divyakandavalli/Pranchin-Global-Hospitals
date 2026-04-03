import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/PrachinLogo-3.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SPECIALITIES from "../../specialities/specialities";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const core = SPECIALITIES.filter((item) => item.category === "core");
  const Surgical = SPECIALITIES.filter((item) => item.category === "Surgical");
  const Support = SPECIALITIES.filter((item) => item.category === "Support");
  return (
    <>
      <div className="w-full flex justify-center top-0 font-dm z-50">
        {/* HEADER */}
        <header className="w-full xl:w-full 3xl:w-[85%]  bg-[#FEFEFF] backdrop-blur-md shadow-[0px_0px_30px_0px_rgba(226,221,213,0.4)] rounded-b-[16px] py-2 px-4 sm:px-6 flex items-center justify-between relative z-50 overflow-visible">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[60px] md:h-auto w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-1 xl:gap-4 3xl:gap-8 text-gray-700 font-medium relative">
            <Link to="/" className="hover:text-[#094ca0]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#094ca0]">
              About
            </Link>
            <Link to="/doctors" className="hover:text-[#094ca0]">
              Doctors
            </Link>

            {/* 🔥 MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                to="/specialities"
                className="flex items-center gap-1 hover:text-[#094ca0]"
              >
                Specialities
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m19 9-7 7-7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

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
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Core Specialities
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {core.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/specialities/${item.slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Surgical Specialities
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {Surgical.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/specialities/${item.slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Support & Others
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {Support.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/specialities/${item.slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link to="/gallery" className="hover:text-[#094ca0]">
              Gallery
            </Link>
            <Link
              to="/health-packages"
              className="hover:text-[#094ca0] capitalize"
            >
              Health packages
            </Link>
            <Link to="/careers" className="hover:text-[#094ca0]">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-[#094ca0]">
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/contact">
              <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg bg-[#E5F4FF] text-[#094ca0] font-medium hover:bg-[#094ca0] hover:text-white">
                Book a visit
              </button>
            </Link>

            <Link to="/quick-contact">
              <button className="hidden sm:block px-4 sm:px-[25px] py-2 sm:py-[16px] rounded-lg border border-[#f37721] text-[#f37721] font-medium hover:bg-[#094ca0] hover:text-white hover:border-transparent transition">
                Quick contact
              </button>
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden ml-2 text-[#094ca0]"
            >
              <MenuIcon />
            </button>
          </div>
        </header>
      </div>
      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/50 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setOpen(false);
            setMegaOpen(false);
          }}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-screen bg-white p-6 transition overflow-y-auto font-manrope ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end mb-6 sticky top-0 bg-white z-10">
            <button
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* MENU */}
          <nav className="flex flex-col gap-4 text-[15px] font-medium">
            <Link
              to="/"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              About
            </Link>

            <Link
              to="/doctors"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              Doctors
            </Link>

            {/* SPECIALITIES */}
            <div>
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className="w-full flex justify-between items-center  transition"
              >
                <span>Specialities</span>
                <span className="text-lg">{megaOpen ? "−" : "+"}</span>
              </button>

              {megaOpen && (
                <div className="ml-2 mt-3 space-y-5 text-[14px]">
                  {/* CORE */}
                  <div>
                    <p className="font-semibold text-[#094ca0] pb-2">
                      Core Specialities
                    </p>
                    <div className="flex flex-col gap-2 text-gray-600 pl-2">
                      <Link
                        to="/sample-service"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Cardiology
                      </Link>
                      <Link
                        to="/neurology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Neurology
                      </Link>
                      <Link
                        to="/neuro-surgery"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Neuro Surgery
                      </Link>
                      <Link
                        to="/oncology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Oncology
                      </Link>
                      <Link
                        to="/general-medicine"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        General Medicine
                      </Link>
                      <Link
                        to="/pulmonology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Pulmonology
                      </Link>
                      <Link
                        to="/nephrology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Nephrology
                      </Link>
                    </div>
                  </div>

                  <hr className="border-[#094ca0]" />

                  {/* SURGICAL */}
                  <div>
                    <p className="font-semibold text-[#094ca0] pb-2">
                      Surgical Specialities
                    </p>
                    <div className="flex flex-col gap-2 text-gray-600 pl-2">
                      <Link
                        to="/spine-surgery"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Spine Surgery
                      </Link>
                      <Link
                        to="/gastroenterology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Gastroenterology
                      </Link>
                      <Link
                        to="/surgical-gastro"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Surgical Gastroenterology
                      </Link>
                      <Link
                        to="/orthopedics"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Orthopedics
                      </Link>
                      <Link
                        to="/arthroscopy"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Arthroscopy - Arthroplasty
                      </Link>
                      <Link
                        to="/urology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Urology
                      </Link>
                      <Link
                        to="/vascular"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Vascular Surgery
                      </Link>
                    </div>
                  </div>

                  <hr className="border-[#094ca0]" />

                  {/* SUPPORT */}
                  <div>
                    <p className="font-semibold text-[#094ca0]  pb-2">
                      Support & Others
                    </p>
                    <div className="flex flex-col gap-2 text-gray-600 pl-2">
                      <Link
                        to="/rheumatology"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Rheumatology
                      </Link>
                      <Link
                        to="/obg"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Obstetrics & Gynecology
                      </Link>
                      <Link
                        to="/pediatrics"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Pediatrics & Neonatology
                      </Link>
                      <Link
                        to="/dental"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Dental & Maxillo Facial
                      </Link>
                      <Link
                        to="/anaesthesia"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Anaesthesiology & Pain Management
                      </Link>
                      <Link
                        to="/critical-care"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Critical Care
                      </Link>
                      <Link
                        to="/emergency"
                        onClick={() => {
                          setOpen(false);
                          setMegaOpen(false);
                        }}
                      >
                        Emergency Medicine
                      </Link>
                    </div>
                  </div>

                  {/* VIEW ALL */}
                  <Link
                    to="/specialities"
                    className="text-[#094ca0] font-medium block mt-2"
                    onClick={() => {
                      setOpen(false);
                      setMegaOpen(false);
                    }}
                  >
                    View All Specialities →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              Gallery
            </Link>
            <Link
              to="/health-packages"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              Health Packages
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              Contact
            </Link>

            {/* BUTTONS */}
            <Link
              to="/book-visit"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              <Link
                to="/contact"
                className="mt-4 w-full px-4 py-2 rounded-lg bg-[#E5F4FF] text-[#094ca0] hover:bg-[#094ca0] hover:text-white transition"
              >
                Book a visit
              </Link>
            </Link>

            <Link
              to="/quick-contact"
              onClick={() => {
                setOpen(false);
                setMegaOpen(false);
              }}
            >
              <button className="w-full px-4 py-2 rounded-lg border border-[#f37721] text-[#f37721] hover:bg-[#094ca0] hover:text-white transition">
                Quick contact
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
