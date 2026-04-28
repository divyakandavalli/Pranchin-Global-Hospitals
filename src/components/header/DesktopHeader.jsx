// components/Header/DesktopHeader.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Prachin Final Logo Website Size-01.png";
import AmbulanceIcon from "../../assets/icons/ambulance.png";
import CallIcon from "../../assets/icons/phone (1).png";
import LandlineIcon from "../../assets/icons/Landline.png";
import EmergencyIcon from "../../assets/icons/emergency-services.png";

import SPECIALITIES from "../../specialities/specialities";

export default function DesktopHeader() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const core = SPECIALITIES.filter((item) => item.category === "core");
  const Surgical = SPECIALITIES.filter((item) => item.category === "Surgical");
  const Support = SPECIALITIES.filter((item) => item.category === "Support");

  return (
    <>
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

      {/* DESKTOP CONTENT */}
      <div className="hidden xl:flex flex-col items-center justify-center flex-1">
        {/* TOP INFO */}
        <div className="flex items-center justify-between gap-3 text-[15px] text-gray-700 font-medium w-full">
          <div className="flex justify-center items-center text-gray-700 hover:text-[#ed721d]">
            <img src={AmbulanceIcon} alt="" />
            <Link to="tel:+919247575108">+91 92475 75108</Link>
          </div>

          <span className="h-5 w-px bg-[#365e8f]"></span>

          <div className="flex justify-center items-center gap-3 text-gray-700 hover:text-[#ed721d]">
            <img src={CallIcon} alt="" />
            <Link to="tel:+917036999111">+91 70369 99111</Link>
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

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6 lg:gap-1 xl:gap-4 3xl:gap-8 text-gray-700 font-medium relative py-5 w-full">
          <Link to="/" className="hover:text-[#ed721d]">
            Home
          </Link>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link to="/about" className="flex items-center gap-1 hover:text-[#ed721d]">
              About
              <DropdownArrow />
            </Link>
            <Dropdown isOpen={aboutOpen}>
              <Link to="/about/leadership-team" className="dropdown-link">Leadership Team</Link>
            </Dropdown>
          </div>

          {/* Doctors */}
          <div
            className="relative"
            onMouseEnter={() => setDoctorOpen(true)}
            onMouseLeave={() => setDoctorOpen(false)}
          >
            <Link to="/doctors" className="flex items-center gap-1 hover:text-[#ed721d]">
              Doctors
              <DropdownArrow />
            </Link>
            <Dropdown isOpen={doctorOpen}>
              <Link to="/doctors/emergency" className="dropdown-link">Emergency Team</Link>
              <Link to="/doctors/critical-care" className="dropdown-link">Critical Care</Link>
            </Dropdown>
          </div>

          {/* Specialities Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link to="/specialities" className="flex items-center gap-1 hover:text-[#ed721d]">
              Specialities
              <DropdownArrow />
            </Link>
            <MegaMenu isOpen={megaOpen} core={core} Surgical={Surgical} Support={Support} />
          </div>

          {/* Gallery */}
          <div
            className="relative"
            onMouseEnter={() => setGalleryOpen(true)}
            onMouseLeave={() => setGalleryOpen(false)}
          >
            <Link to="/gallery" className="flex items-center gap-1 hover:text-[#ed721d]">
              Gallery
              <DropdownArrow />
            </Link>
            <Dropdown isOpen={galleryOpen} width="w-52">
              <Link to="/gallery/photos" className="dropdown-link">Photos</Link>
              <Link to="/gallery/videos" className="dropdown-link">Videos</Link>
              <Link to="/gallery/news" className="dropdown-link">News Articles</Link>
              <Link to="/gallery/patients" className="dropdown-link">Happy Patients</Link>
            </Dropdown>
          </div>

          {/* Packages */}
          <div
            className="relative"
            onMouseEnter={() => setShowPackages(true)}
            onMouseLeave={() => setShowPackages(false)}
          >
            <p className="hover:text-[#ed721d] cursor-pointer flex items-center gap-1 capitalize">
              packages
              <DropdownArrow />
            </p>
            <Dropdown isOpen={showPackages}>
              <Link to="/health-packages" className="dropdown-link">Health Packages</Link>
              <Link to="/special-offers" className="dropdown-link">Special Offers</Link>
            </Dropdown>
          </div>

          {/* Careers */}
          <div
            className="relative"
            onMouseEnter={() => setCareerOpen(true)}
            onMouseLeave={() => setCareerOpen(false)}
          >
            <Link to="/careers" className="flex items-center gap-1 hover:text-[#ed721d]">
              Careers
              <DropdownArrow />
            </Link>
            <Dropdown isOpen={careerOpen} width="w-60">
              <Link to="/careers/vacancies" className="dropdown-link">Vacancy Positions</Link>
              <Link to="/careers/internships" className="dropdown-link">Internship Opportunities</Link>
            </Dropdown>
          </div>

          <Link to="/contact" className="hover:text-[#ed721d]">
            Contact
          </Link>
        </nav>
      </div>

      {/* RIGHT SIDE BUTTONS - Desktop Only */}
      <div className="hidden sm:flex items-center border border-[#094ca0] rounded-md overflow-hidden">
        <Link
          to="/contact"
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
          className={`px-4 py-2 flex items-center justify-center font-medium transition-all duration-200 ${
            hovered === "right" || hovered === "left"
              ? "bg-white text-[#094ca0]"
              : "bg-[#094ca0] text-white"
          }`}
        >
          Book a visit
        </Link>

        <Link
          to="/quick-contact"
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          className={`px-4 py-2 flex items-center justify-center font-medium border-l border-[#094ca0] transition-all duration-200 ${
            hovered === "right" || hovered === "left"
              ? "bg-[#094ca0] text-white"
              : "text-[#094ca0]"
          }`}
        >
          Quick contact
        </Link>
      </div>
    </>
  );
}

/* Reusable Components */
const DropdownArrow = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <path d="m19 9-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Dropdown = ({ isOpen, children, width = "w-48" }) => (
  <div
    className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl p-3 ${width} flex flex-col gap-2 transition-all duration-300 z-[9999] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
    }`}
  >
    {children}
  </div>
);

const MegaMenu = ({ isOpen, core, Surgical, Support }) => (
  <div
    className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[900px] bg-white shadow-xl rounded-xl py-6 px-8 grid grid-cols-3 gap-8 transition-all duration-300 z-[9999] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
    }`}
  >
    <div>
      <h4 className="font-semibold text-gray-800 mb-3 px-2">Core Specialities</h4>
      <ul className="space-y-1 text-gray-600">
        {core.map((item) => (
          <li key={item.slug}>
            <Link to={`/specialities/${item.slug}`} className="block w-full px-2 py-1 rounded-md hover:text-[#ed721d] transition">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-3 px-2">Surgical Specialities</h4>
      <ul className="space-y-1 text-gray-600">
        {Surgical.map((item) => (
          <li key={item.slug}>
            <Link to={`/specialities/${item.slug}`} className="block w-full px-2 py-1 rounded-md hover:text-[#ed721d] transition">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-3 px-2">Support & Others</h4>
      <ul className="space-y-1 text-gray-600">
        {Support.map((item) => (
          <li key={item.slug}>
            <Link to={`/specialities/${item.slug}`} className="block w-full px-2 py-1 rounded-md hover:text-[#ed721d] transition">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);