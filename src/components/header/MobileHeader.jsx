// components/Header/MobileHeader.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Prachin Final Logo Website Size-02.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SPECIALITIES from "../../specialities/specialities";
import AmbulanceIcon from "../../assets/icons/Ambulance Icon.png";
import CallIcon from "../../assets/icons/Contact Page Icons-02.png";
import LandlineIcon from "../../assets/icons/Landline Icon.png";
import EmergencyIcon from "../../assets/icons/Emergancy Services Icon.png";
import { AppContext } from "../AppContext";
import { HashLink } from "react-router-hash-link";
export default function MobileHeader({ open, setOpen }) {
  const { setActiveTab } = useContext(AppContext);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
    setAboutOpen(false);
    setDoctorOpen(false);
    setMegaOpen(false);
    setGalleryOpen(false);
    setShowPackages(false);
    setCareerOpen(false);
  };

  return (
    <>
      {/* 🔹 MOBILE HEADER */}
      <div className="xl:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        {/* ✅ NAV 1: ICON BAR */}
        <div className="text-[14px] bg-[#d7dff7] text-gray-700 font-medium px-5">
          {/* ✅ MOBILE (unchanged) */}
          <div className="space-y-2 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 pr-3">
                <img src={AmbulanceIcon} alt="" />
                <Link to="">+91 92475 75108</Link>
              </div>
              <div className="h-5 w-px bg-[#365e8f]" />
              <div className="flex items-center gap-2 pl-3">
                <img src={CallIcon} alt="" />
                <Link to="">+91 70369 99111</Link>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 pr-3">
                <img src={LandlineIcon} alt="" />
                <Link to="">08455 - 671111/99</Link>
              </div>
              <div className="h-5 w-px bg-[#365e8f]" />
              <div className="flex items-center gap-2 pl-3">
                <img src={EmergencyIcon} alt="" />
                <Link to="">24/7 Emergency</Link>
              </div>
            </div>
          </div>

          {/* ✅ TABLET (md and above) */}
          <div className="hidden md:flex items-center justify-center gap-4 py-2">
            <div className="flex items-center gap-2">
              <img src={AmbulanceIcon} alt="" />
              <Link to="">+91 92475 75108</Link>
            </div>

            <div className="h-5 w-px bg-[#365e8f]" />

            <div className="flex items-center gap-2">
              <img src={CallIcon} alt="" />
              <Link to="">+91 70369 99111</Link>
            </div>

            <div className="h-5 w-px bg-[#365e8f]" />

            <div className="flex items-center gap-2">
              <img src={LandlineIcon} alt="" />
              <Link to="">08455 - 671111/99</Link>
            </div>

            <div className="h-5 w-px bg-[#365e8f]" />

            <div className="flex items-center gap-2">
              <img src={EmergencyIcon} alt="" />
              <Link to="">24/7 Emergency</Link>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-px bg-[#c5daf3]"></div> */}
        {/* ✅ NAV 2: LOGO + TOGGLER */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>

          <button onClick={() => setOpen(true)} className="text-[#ed721d]">
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* 🔹 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* 🔹 DRAWER */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-[380px] bg-white p-6 
        z-50 transition-transform duration-300 overflow-y-auto shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <p className="font-semibold">Menu</p>
          <button onClick={closeMenu} className="text-[#ed721d]">
            <CloseIcon />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col  text-[15px] font-medium border-b pb-8 mb-8">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          {/* ABOUT */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full flex justify-between py-2"
            >
              About <span>{aboutOpen ? "−" : "+"}</span>
            </button>
            {aboutOpen && (
              <div className="ml-4 flex flex-col gap-2 text-gray-600">
                <Link smooth to="/about" onClick={closeMenu}>
                  About
                </Link>
                <HashLink smooth to="/about#our-chairman" onClick={closeMenu}>
                  Leadership Team
                </HashLink>
              </div>
            )}
          </div>

          {/* DOCTORS */}
          <div>
            <button
              onClick={() => setDoctorOpen(!doctorOpen)}
              className="w-full flex justify-between py-2"
            >
              Doctors <span>{doctorOpen ? "−" : "+"}</span>
            </button>
            {doctorOpen && (
              <div className="ml-4 flex flex-col gap-2 text-gray-600">
                <Link to="/doctors/emergency" onClick={closeMenu}>
                  Emergency Team
                </Link>
                <Link to="/doctors/critical-care" onClick={closeMenu}>
                  Critical Care
                </Link>
              </div>
            )}
          </div>

          {/* SPECIALITIES */}
          <div>
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              className="w-full flex justify-between py-2"
            >
              Specialities <span>{megaOpen ? "−" : "+"}</span>
            </button>
            {megaOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-600">
                {SPECIALITIES.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/specialities/${item.slug}`}
                    onClick={closeMenu}
                    className="py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* GALLERY */}
          <div>
            <button
              onClick={() => {
                setGalleryOpen(!galleryOpen);
              }}
              className="w-full flex justify-between py-2"
            >
              Gallery <span>{galleryOpen ? "−" : "+"}</span>
            </button>
            {galleryOpen && (
              <div className="ml-4 flex flex-col gap-2 text-gray-600">
                <Link
                  to="/gallery"
                  onClick={() => {
                    closeMenu();
                    setActiveTab(1);
                  }}
                >
                  Photos
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => {
                    closeMenu();
                    setActiveTab(2);
                  }}
                >
                  Videos
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => {
                    closeMenu();
                    setActiveTab(3);
                  }}
                >
                  News Articles
                </Link>
                <Link to="/happy-patients">Happy Patients</Link>
              </div>
            )}
          </div>

          {/* PACKAGES */}
          <div>
            <button
              onClick={() => setShowPackages(!showPackages)}
              className="w-full flex justify-between py-2"
            >
              Packages <span>{showPackages ? "−" : "+"}</span>
            </button>
            {showPackages && (
              <div className="ml-4 flex flex-col gap-2 text-gray-600">
                <Link to="/health-packages" onClick={closeMenu}>
                  Health Packages
                </Link>
                <Link to="/special-offers">Special Offers</Link>
              </div>
            )}
          </div>

          {/* CAREERS */}
          <div>
            <button
              onClick={() => setCareerOpen(!careerOpen)}
              className="w-full flex justify-between py-2"
            >
              Careers <span>{careerOpen ? "−" : "+"}</span>
            </button>
            {careerOpen && (
              <div className="ml-4 flex flex-col gap-2 text-gray-600">
                <Link
                  to="/careers"
                  onClick={() => {
                    setActiveTab(1);
                    closeMenu();
                  }}
                >
                  Vacancy Positions
                </Link>
                <Link to="/careers/internships">Internship Opportunities</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full text-center py-3 rounded-xl bg-[#094ca0] text-white"
          >
            Book a Visit
          </Link>

          <Link
            to="/quick-contact"
            onClick={closeMenu}
            className="w-full text-center py-3 rounded-xl border border-[#ed721d] text-[#ed721d]"
          >
            Quick Contact
          </Link>
        </div>
      </div>
    </>
  );
}
