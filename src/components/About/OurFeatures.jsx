import React from "react";
import icon_1 from "../../assets/icons/icon (1).png";
import icon_2 from "../../assets/icons/icon (2).png";
import icon_3 from "../../assets/icons/icon (3).png";
import icon_4 from "../../assets/icons/icon (4).png";
import icon_5 from "../../assets/icons/icon (5).png";
import icon_6 from "../../assets/icons/icon (6).png";
import icon_7 from "../../assets/icons/icon (7).png";
import icon_8 from "../../assets/icons/icon (8).png";
import icon_9 from "../../assets/icons/icon (9).png";
import icon_10 from "../../assets/icons/icon (10).png";
import icon_11 from "../../assets/icons/icon (11).png";
import icon_12 from "../../assets/icons/icon (12).png";

const OurFeatures = () => {
  const feature = [
    {
      id: 1,
      title: `MRI - 1.5 TESLA - AI INTEGRATED`,
      image: icon_1,
    },
    {
      id: 2,
      title: `CT SCAN`,
      image: icon_2,
    },
    {
      id: 1,
      title: `DIGITAL MAMOGAPHY`,
      image: icon_3,
    },
    {
      id: 1,
      title: `BONE MINERAL DENSITY`,
      image: icon_4,
    },
    {
      id: 1,
      title: `4K LAPAROSCOPY`,
      image: icon_5,
    },
    {
      id: 1,
      title: `CALPOSCOPY -HISTOSCOPY`,
      image: icon_6,
    },
    {
      id: 1,
      title: `EEG 64 BIT`,
      image: icon_7,
    },
    {
      id: 1,
      title: `ENMG 6 CHANNEL`,
      image: icon_8,
    },
    {
      id: 1,
      title: `NEURO 3D MICROSCOPE`,
      image: icon_9,
    },
    {
      id: 1,
      title: `ENT MICROSCOPE -KARTZEISS`,
      image: icon_10,
    },
    {
      id: 1,
      title: `ARTHROSCOPY UNIT
`,
      image: icon_11,
    },
    {
      id: 1,
      title: `EEG WITH SLEEP LAB -32
CHANNEL`,
      image: icon_12,
    },
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto pt-10">
      <div className=" rounded-[24px] pb-10 md:px-10 relative  overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
            Our Unique Features
          </span>
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope] text-center font-semibold mt-4 leading-tight">
            High End Advanced{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Equipment
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 gap-4 mt-10">
          {feature.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#e8f1f8] p-5 rounded-xl"
            >
              <img src={item.image} alt="" className="w-12 h-12" />

              <p className="text-[14px] 3xl:text-[15px] font-manrope text-[#5187af] font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
