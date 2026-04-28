import React from "react";
import FacilitiesSwiper from "../For_Patients/FacilitiesSwiper";
const StateOfArt = () => {
  const feature = [
    "16 Channel HDX 1.5T MRI - AI Sytem",
    "Dual Source CT",
    "CT Guided Interventional Procedures",
    "Digital Mammography",
    "Digital X Ray",
    "BMD",
    "Ultrasound with Elastography",
    `TMT, 2D Echo, Holter, PFT, Digital EEG`,
    "Color Doppler",
    "Nerve Conduction Study",
    "Digital EEG/EMG",
    "Digital ECG",
    "Endoscopy/Colonoscopy/ ERCP/MRCP",
    "Endography/EBUS",
    "Dedicated Sleep Apnea Study Unit ",
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto">
      <div className=" rounded-[24px]  pb-10 relative  overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  text-center font-semibold leading-tight">
            State Of Art{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Diagnostics
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-4 mt-10">
          {feature.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center  bg-[#e8f1f8]  p-4 rounded-xl"
            >
              <p className="text-[14px] md:text-[15px] uppercase font-manrope text-[#5187af] text-center font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FacilitiesSwiper />
    </div>
  );
};

export default StateOfArt;
