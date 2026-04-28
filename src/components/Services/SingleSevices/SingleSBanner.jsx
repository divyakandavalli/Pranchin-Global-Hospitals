import React from "react";
import { useParams, Link } from "react-router-dom";
import SPECIALITIES from "../../../specialities/specialities";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// fallback image
import defaultBanner from "../../../assets/images/Services/doctor-who-advise-treating-patient-with-heart-disease-2.jpg";

const SingleSBanner = () => {
  const { slug } = useParams();

  const data = SPECIALITIES.find((item) => item.slug === slug);

  if (!data) return null;

  // dynamic banner (if added in data)
  const bannerImage = data.banner || defaultBanner;

  return (
     <div className=" w-full xl:bg-fixed relative mx-auto  overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bannerImage} alt="" className="w-full  h-auto " />
      </div>
      <div className="text-center top-0 absolute text-white z-10 flex flex-col justify-center items-center w-full h-full xl:gap-6 gap-2">
        <h1 className="text-[22px] md:text-[42px] 3xl:text-[52px] font-manrope font-semibold">
           {data.title}
        </h1>
        <div className="flex items-center justify-center text-base font-manrope">
          <Link to="/specialities">All Specialities</Link>

          <span>
            <KeyboardArrowRightIcon />
          </span>

          <span className="text-[#f37721]">{data.title}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleSBanner;
