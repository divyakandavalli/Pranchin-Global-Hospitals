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
    <div className=" w-full xl:bg-fixed relative mx-auto py-20 xl:py-24 overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div
        className="top-0 absolute left-0 w-full
      h-auto"
      >
        <img
          src={bannerImage}
          alt=""
          className="w-full  object-cover h-[350px] md:h-auto"
        />
      </div>
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
        <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
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
