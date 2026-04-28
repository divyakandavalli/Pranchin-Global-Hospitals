import React from "react";
import bg_image from "../../assets/images/about_illu.jpg";
const SpecialOfferBanner = () => {
  return (
<div className=" w-full xl:bg-fixed relative mx-auto   overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bg_image} alt="" className="w-full  h-auto " />
      </div>
      <div className="text-center top-0 absolute text-white z-10 flex flex-col justify-center items-center w-full h-full xl:gap-6 gap-2">
        <h1 className="xl:text-8xl lg:text-6xl md:text-4xl font-manrope font-semibold">
          Special Offers
        </h1>
      </div>
    </div>
  );
};
export default SpecialOfferBanner;


