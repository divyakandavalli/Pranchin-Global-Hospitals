import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import bg_image from "../../assets/images/bg_banner.png";
const AboutBanner = () => {
  return (
    <div className=" w-full xl:bg-fixed relative mx-auto mt-5  py-20 xl:py-24 overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div
        className="top-0 absolute left-0 w-full
      h-auto"
      >
        <img
          src={bg_image}
          alt=""
          className="w-full  object-cover h-[350px] md:h-auto"
        />
      </div>
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
        <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
          About Us
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
export default AboutBanner;
