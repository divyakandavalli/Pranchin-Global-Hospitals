import React from "react";
import bannerimg from "../../../assets/images/Services/doctor-who-advise-treating-patient-with-heart-disease-2.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const SingleSBanner = () => {
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
         Cardiology
        </h1>

        <div className="flex items-center justify-center text-base font-manrope">
          <a href="/all-specialities">All Specialities</a>
          <span>
            <KeyboardArrowRightIcon />
          </span>
          <a className="text-[#f37721]" href="/all-specialities">
            Cardiology
          </a>
        </div>
      </div>
    </div>
  );
};
export default SingleSBanner;


