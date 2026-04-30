import React from "react";
import bg_image from "../../assets/images/Packages page Header-01.jpg";

const PackagesBanner = () => {
  return (
   <div className=" w-full xl:bg-fixed relative mx-auto   overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bg_image} alt="" className="w-full  h-auto " />
      </div>
    </div>
  );
};
export default PackagesBanner;


