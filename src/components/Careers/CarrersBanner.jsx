import React from "react";
import bannerimg from "../../assets/images/career_page.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
const CarrersBanner = () => {
  return (
    <div
      className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[top_center] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#010813]/70" />

      {/* Content */}
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
        <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
          Career
        </h1>

        <div className="flex items-center justify-center text-base font-manrope">
          <a href="/">Home</a>
          <span>
            <KeyboardArrowRightIcon />
          </span>
          <Link className="text-[#f37721]" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarrersBanner;


