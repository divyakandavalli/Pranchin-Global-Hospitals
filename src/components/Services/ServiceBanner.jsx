import React from "react";
import bannerimg from "../../assets/images/Services/Service-desktop-Banners/All Specialities Page  headers-27.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ServiceBanner = () => {
  return (
    <div className=" w-full xl:bg-fixed relative mx-auto  overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bannerimg} alt="" className="w-full  h-auto " />
      </div>
      {/* <div className="text-center top-0 absolute text-white z-10 flex flex-col justify-center items-center w-full h-full xl:gap-6 gap-2">
        <h1 className="xl:text-8xl lg:text-6xl md:text-4xl font-manrope font-semibold">
          All Specialities
        </h1>
      </div> */}
    </div>
  );
};
export default ServiceBanner;
