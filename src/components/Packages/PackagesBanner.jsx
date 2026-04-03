import React from "react";
import bannerimg from "../../assets/images/health_packages.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
const PackagesBanner = () => {
  return (
    <div
      className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[center] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#010813]/70" />

      {/* Content */}
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
        <h1 className="lg:text-8xl md:text-6xl text-[52px] leading-[60px] font-manrope font-semibold">
          Health Packages
        </h1>

        <div className="flex items-center justify-center text-base font-manrope">
          <Link to="/">Home</Link>
          <span>
            <KeyboardArrowRightIcon />
          </span>
          <Link className="text-[#f37721]" to="/health-packages">
            Health Packages
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PackagesBanner;


