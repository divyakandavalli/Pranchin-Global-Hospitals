import React from "react";
import bannerimg from "../../assets/images/bg_banner.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ServiceBanner = () => {
  return (
    <div className=" w-full xl:bg-fixed relative mx-auto py-20 xl:py-24 overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div
        className="top-0 absolute left-0 w-full
      h-auto"
      >
        <img
          src={bannerimg}
          alt=""
          className="w-full  object-cover h-[350px] md:h-auto"
        />
      </div>
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
        <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
          All Specialities
        </h1>

        <div className="flex items-center justify-center text-base font-manrope">
          <a href="/">Home</a>
          <span>
            <KeyboardArrowRightIcon />
          </span>
          <a className="text-[#f37721]" href="/specialities">
            All Specialities
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServiceBanner;
