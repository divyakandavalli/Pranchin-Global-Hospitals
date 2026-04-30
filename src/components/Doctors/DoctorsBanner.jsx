import React from "react";
import bannerimg from "../../assets/images/DoctorBanner.jpg";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const DoctorsBanner = () => {
  return (
 <div className=" w-full xl:bg-fixed relative mx-auto  overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bannerimg} alt="" className="w-full  h-auto " />
      </div>
    </div>
  );
};
export default DoctorsBanner;


