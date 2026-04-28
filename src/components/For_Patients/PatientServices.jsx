import React, { useEffect } from "react";
import bannerimg from "../../assets/images/patient_service.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoundTheClock from "./RoundTheClock";
import OurFeatures from "../About/OurFeatures";
import hospital from "../../assets/images/about_us_aside.jpg";
const PatientServices = () => {
  const sharedprivateRoom = [
    "peadiatric icu and nicu (level iii)",
    "advanced endoscopy & ercp suite",
    "specialised gyneac department (2 labour rooms, ot and dedicated gyneac icu)",
    "micu, sicu, ccu with 70 beds each icu with isolation units",
    "ambient special rooms and suite rooms",
    "ent and dental clinics",
  ];
  return (
    <>
      <div
        className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[top_left] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#010813]/70" />

        {/* Content */}
        <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
          <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
            Patient Services
          </h1>

          <div className="flex items-center justify-center text-base font-manrope">
            <a href="/">Home</a>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <Link className="text-[#f37721]" to="/patient-services">
              Patient Services
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%] grid lg:grid-cols-2 gap-10 font-manrope  mx-auto py-10">
        {/* Hero Section */}
        <div>
          <img src={hospital} alt="" className="rounded-3xl" />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope xl:text-left text-center    font-semibold mt-1.5 leading-tight">
            Affordable Care With <br />
            <span className="italic font-light font-instrumental text-[#5187af]">
              Advanced Facilities
            </span>
          </h2>

          <ul className="my-4">
            {sharedprivateRoom.map((item) => (
              <li
                key={item}
                className="flex items-center text-[#66686c] text-[14px] md:text-[15x] capitalize flex-row mt-1 gap-3"
              >
                <CheckCircleIcon fontSize="small" className="text-[#f37721]" />{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OurFeatures />
      <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto ">
        <RoundTheClock />
      </div>
    </>
  );
};

export default PatientServices;
