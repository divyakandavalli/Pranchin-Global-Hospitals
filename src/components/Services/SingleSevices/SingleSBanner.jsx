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
    <div
      className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[top_center] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#010813]/70" />

      {/* Content */}
      <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">

        {/* TITLE */}
        <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
          {data.title}
        </h1>

        {/* BREADCRUMB */}
        <div className="flex items-center justify-center text-base font-manrope">
          <Link to="/specialities">All Specialities</Link>

          <span>
            <KeyboardArrowRightIcon />
          </span>

          <span className="text-[#f37721]">
            {data.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleSBanner;