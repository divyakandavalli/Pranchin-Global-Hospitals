import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Prachin Final Logo Website Size-02.png";

import SPECIALITIES from "../../specialities/specialities";
import AmbulanceIcon from "../../assets/icons/Ambulance Icon.png";
import CallIcon from "../../assets/icons/Contact Page Icons-02.png";
import LandlineIcon from "../../assets/icons/Landline Icon.png";
import EmergencyIcon from "../../assets/icons/Emergancy Services Icon.png";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  // Split specialities into 3 balanced columns (no headings)
  const totalItems = SPECIALITIES.length;
  const colSize = Math.ceil(totalItems / 3);

  const column1 = SPECIALITIES.slice(0, colSize);
  const column2 = SPECIALITIES.slice(colSize, colSize * 2);
  const column3 = SPECIALITIES.slice(colSize * 2);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-center font-dm z-50 bg-white shadow-sm">
        <header className="w-full xl:w-full 3xl:w-[85%] px-4 sm:px-6 flex items-center justify-between relative z-50 bg-white">
          {/* LOGO */}
          <div className="hidden xl:flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[60px] md:h-auto w-auto"
              />
            </Link>
          </div>

          <div className="hidden xl:flex flex-col items-center justify-center">
            {/* TOP INFO BAR */}
            <div className="flex items-center justify-between gap-3 text-[15px] text-gray-700 font-medium py-2">
              <div className="flex justify-center items-center gap-3 text-gray-700 hover:text-[#ed721d]">
                <img src={AmbulanceIcon} alt="" />
                <Link to="">+91 92475 75108</Link>
              </div>
              <span className="h-5 w-px bg-[#365e8f]"></span>
              <div className="flex justify-center items-center gap-3 text-gray-700 hover:text-[#ed721d]">
                <img src={CallIcon} alt="" />
                <Link to="">+91 70369 99111</Link>
              </div>
              <span className="h-5 w-px bg-[#365e8f]"></span>
              <div className="flex justify-center items-center gap-3 text-gray-700 hover:text-[#ed721d]">
                <img src={LandlineIcon} alt="" />
                <Link to="">08455 - 671111/99</Link>
              </div>
              <span className="h-5 w-px bg-[#365e8f]"></span>
              <div className="flex justify-center items-center gap-3 text-gray-700 hover:text-[#ed721d]">
                <img src={EmergencyIcon} alt="" />
                <Link to="">24/7 Emergency</Link>
              </div>
            </div>
            <div className="w-full h-px bg-[#c5daf3]"></div>

            {/* DESKTOP NAVIGATION */}
            <nav className="flex items-center gap-6 lg:gap-1 xl:gap-4 3xl:gap-8 text-gray-700 font-medium relative py-5 text-[14px] 3xl:text-[15px]">
              <Link to="/" className="hover:text-[#ed721d]">
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <Link
                  to="/about"
                  className="flex items-center gap-1 hover:text-[#ed721d]"
                >
                  About
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 w-48 flex flex-col gap-2 items-center transition-all duration-300 z-[9999] ${aboutOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link className="w-full text-left  py-1 rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition">
                    Leadership Team
                  </Link>
                </div>
              </div>

              {/* Doctors Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDoctorOpen(true)}
                onMouseLeave={() => setDoctorOpen(false)}
              >
                <Link
                  to="/doctors"
                  className="flex items-center gap-1 hover:text-[#ed721d]"
                >
                  Doctors
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 w-48 flex flex-col gap-2 items-center text-left transition-all duration-300 z-[9999] ${doctorOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1">
                    Emergency Team
                  </Link>
                  <Link className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1">
                    Critical Care
                  </Link>
                </div>
              </div>

              {/* Specialities Mega Menu - 3 Columns, No Headings */}
              <div
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to="/specialities"
                  className="flex items-center gap-1 hover:text-[#ed721d]"
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

                <div
                  className={`fixed left-1/2 -translate-x-1/2 top-[120px] w-[1220px] bg-white shadow-xl rounded-xl py-6 px-8 grid grid-cols-3 gap-x-3  transition-all duration-300 z-[9999] ${
                    megaOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {/* Column 1 */}
                  <ul className="space-y-1 text-gray-600">
                    {column1.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/specialities/${item.slug}`}
                          className="block w-full  py-1 rounded-md  hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Column 2 */}
                  <ul className="space-y-1 text-gray-600">
                    {column2.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/specialities/${item.slug}`}
                          className="block w-full  py-1 rounded-md  hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Column 3 */}
                  <ul className="space-y-1 text-gray-600">
                    {column3.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/specialities/${item.slug}`}
                          className="block w-full py-1 rounded-md  hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gallery Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGalleryOpen(true)}
                onMouseLeave={() => setGalleryOpen(false)}
              >
                <Link
                  to="/gallery"
                  className="flex items-center gap-1 hover:text-[#ed721d]"
                >
                  Gallery
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 w-52 flex flex-col gap-2 items-center transition-all duration-300 z-[9999] ${galleryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link
                    to="/gallery/photos"
                    className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1"
                  >
                    Photos
                  </Link>
                  <Link
                    to="/gallery/videos"
                    className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1"
                  >
                    Videos
                  </Link>
                  <Link
                    to="/gallery/news"
                    className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1"
                  >
                    News Articles
                  </Link>
                  <Link
                    to="/gallery/patients"
                    className="w-full text-left rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] py-1"
                  >
                    Happy Patients
                  </Link>
                </div>
              </div>

              {/* Packages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowPackages(true)}
                onMouseLeave={() => setShowPackages(false)}
              >
                <p className="hover:text-[#ed721d] cursor-pointer flex items-center justify-center gap-1 capitalize">
                  Packages
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 w-48 flex flex-col gap-2 items-center transition-all duration-300 z-[9999] ${showPackages ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link
                    to="/health-packages"
                    className="w-full text-left  py-1 rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                  >
                    Health Packages
                  </Link>
                  <Link
                    to="/special-offers"
                    className="w-full text-left  py-1 rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                  >
                    Special Offers
                  </Link>
                </div>
              </div>

              {/* Careers Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCareerOpen(true)}
                onMouseLeave={() => setCareerOpen(false)}
              >
                <Link
                  to="/careers"
                  className="flex items-center gap-1 hover:text-[#ed721d]"
                >
                  Careers
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m19 9-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 w-60 flex flex-col gap-2 items-center transition-all duration-300 z-[9999] ${careerOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link
                    to="/careers/vacancies"
                    className="w-full text-left py-1 rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                  >
                    Vacancy Positions
                  </Link>
                  <Link
                    to="/careers/internships"
                    className="w-full text-left py-1 rounded-md hover:text-[#ed721d] px-2 hover:bg-[#feebdf] transition"
                  >
                    Internship Opportunities
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="hover:text-[#ed721d]">
                Contact
              </Link>
            </nav>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="hidden sm:flex items-center border border-[#094ca0] rounded-md overflow-hidden">
            <Link
              to="/contact"
              onMouseEnter={() => setHovered("left")}
              onMouseLeave={() => setHovered(null)}
              className={`px-4 py-2 flex items-center justify-center font-medium transition-all duration-200 ${hovered === "right" || hovered === "left" ? "bg-white text-[#094ca0]" : "bg-[#094ca0] text-white"}`}
            >
              Book a visit
            </Link>
            <Link
              to="/quick-contact"
              onMouseEnter={() => setHovered("right")}
              onMouseLeave={() => setHovered(null)}
              className={`px-4 py-2 flex items-center justify-center font-medium border-l border-[#094ca0] transition-all duration-200 ${hovered === "right" || hovered === "left" ? "bg-[#094ca0] text-white" : "text-[#094ca0]"}`}
            >
              Quick contact
            </Link>
          </div>
        </header>
      </div>

      {/* Mobile Header */}
      <MobileHeader open={open} setOpen={setOpen} />
    </>
  );
}
