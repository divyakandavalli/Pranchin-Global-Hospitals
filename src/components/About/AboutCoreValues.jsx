import React from "react";
import about_icon_1 from "../../assets/icons/about_icon_1.png";
import about_icon_2 from "../../assets/icons/about_icon_2.png";
import about_icon_3 from "../../assets/icons/about_icon_3.png";
import about_icon_4 from "../../assets/icons/about_icon_4.png";
import about_icon_5 from "../../assets/icons/about_icon_5.png";

const AboutCoreValues = () => {
  const services = [
    {
      title: " Patient-First",
      desc: "Committed to providing Patient Centric care with Safety, Dignity and Well-being at the Centre of every Clinical and Administrative Decision.",
      img: about_icon_1,
    },
    {
      title: "Professionalism",
      desc: "Committed toward Ethical practice, Accountability, Transparency and mutual respect across all levels.",
      img: about_icon_2,
    },
    {
      title: " Precision",
      desc: "Committed to precision and accuracy in diagnosis, treatment, clinical outcomes, and documentation through rigorous evidence-based practices.",
      img: about_icon_3,
    },
    {
      title: "Privacy",
      desc: "Committed to protecting patient confidentiality and personal health information in accordance with legal and ethical standards.",
      img: about_icon_4,
    },
    {
      title: "Preparedness",
      desc: "Committed to maintaining readiness for round the clock readiness for Emergencies and Trauma, Disasters and Critical Care situations through skilled professionals, advanced equipment following standard clinical protocols.",
      img: about_icon_5,
    },
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto">
      <div className=" rounded-[24px]  pt-5  md:px-10 relative  overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
            Core Values
          </span>
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  text-center font-semibold mt-4 leading-tight">
            The Principles Guiding{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Medical Services
            </span>
          </h2>
        </div>
        <div className="grid xl:grid-cols-3  lg:gap-12  gap-6 mx-auto mt-10 lg:mx-8">
          {services.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="md:p-8 py-4 ps-4 pe-8 bg-[#C8DDED] flex items-start justify-center flex-col rounded-3xl relative"
            >
              <h2 className="text-[16px] md:text-[18px] font-manrope font-semibold mb-1">
                {item.title}
              </h2>
              <p className=" w-10/12 text-[#66686C] font-normal text-sm 3xl:text-[15px] font-manrope">
                {item.desc}
              </p>
              <div className="w-20 absolute flex  rounded-tl-3xl pt-[10px] font-manrope bg-[#ffffff] bottom-0 right-0   justify-end items-end">
                <img src={item.img} className="w-16 h-16" alt="" />
                <div className="absolute -left-8 bottom-0 w-8 flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                  <div className="w-8">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-[33px] right-0 w-[33px] flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                  <div className="w-8">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex xl:flex-row flex-col justify-center   lg:gap-12  gap-6 mx-auto  lg:mt-12 mt-6 lg:mx-8">
          {services.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="md:p-8 py-4 ps-4 pe-8 bg-[#C8DDED] xl:w-[460px] w-full flex items-start justify-center flex-col rounded-3xl relative"
            >
              <h2 className="text-[16px] md:text-[18px] font-manrope font-semibold mb-1">
                {item.title}
              </h2>
              <p className=" w-10/12 text-[#66686C] font-normal text-sm 3xl:text-[15px] font-manrope">
                {item.desc}
              </p>
              <div className="w-20 absolute flex  rounded-tl-3xl pt-[10px] font-manrope bg-[#ffffff] bottom-0 right-0   justify-end items-end">
                <img src={item.img} className="w-16 h-16" alt="" />
                <div className="absolute -left-8 bottom-0 w-8 flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                  <div className="w-8">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-[33px] right-0 w-[33px] flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                  <div className="w-8">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;
