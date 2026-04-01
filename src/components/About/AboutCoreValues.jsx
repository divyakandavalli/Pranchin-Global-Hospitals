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
      desc: " Committed to providing patient-centric care with safety, dignity, and well-being at the centre of every clinical and administrative decision.",
      img: about_icon_1,
    },
    {
      title: "Professionalism",
      desc: "Committed to ethical practice, accountability, transparency, and mutual respect across all levels of care.",
      img: about_icon_2,
    },
    {
      title: " Precision",
      desc: "Committed to accuracy and excellence in diagnosis, treatment, clinical outcomes, and documentation through evidence-based practices.",
      img: about_icon_3,
    },
    {
      title: "Privacy",
      desc: "Committed to protecting patient confidentiality and personal health information in accordance with legal and ethical standards.",
      img: about_icon_4,
    },
    {
      title: "Preparedness",
      desc: "Committed to maintaining readiness for all emergencies, disasters, trauma, and critical care situations through skilled professionals, advanced equipment, and robust clinical protocols.Top of Form.",
      img: about_icon_5,
    },
 
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto">
      <div className=" rounded-[24px] xl:pt-36 lg:pt-28 md:pt-24 pt-16 md:px-10 px-5 relative  overflow-hidden">
        
        <div className="flex justify-center flex-col items-center">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
            Core Values
          </span>
          <h2 className="text-4xl font-manrope md:text-[64px] text-center font-semibold mt-4 leading-tight">
            The Principles Guiding{' '}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Medical Services
            </span>
          </h2>
        </div>
        <div className="grid xl:grid-cols-3  grid-cols-1 lg:gap-12 gap-6 mx-auto mt-12 lg:mx-8">
          {services.map((item, index) => (
            <div key={index} className="p-8 bg-[#C8DDED] flex items-start justify-center flex-col rounded-3xl relative">
              <h2 className="text-[21px] font-manrope font-semibold mb-1">
                {item.title}
              </h2>
              <p className=" w-10/12 text-[#66686C] font-normal text-base font-manrope">
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
