import React from "react";
import our_vision from "../../assets/icons/our_vision.png";
import our_mission from "../../assets/icons/our_mission.png";
import our_aim from "../../assets/icons/our_aim.png";
const AboutVision = () => {
  const paragraph = [
    {
      id: 1,
      img: our_vision,
      title: "Our Vision",
      desc: "To operate a top-quality, integrated healthcare provider using the best clinical practices and the advanced technology, while always prioritising patient care for a healthier society.",
    },
    {
      id: 2,
      img: our_mission,
      title: "Our Mission",
      desc: "To deliver high-quality, ethical and compassionate healthcare through integrated clinical services, advanced medical technology along with evidence based best practices.  We are committed to patient safety, clinical excellence, continuous innovation, supported by skilled professionals, to improve health outcomes and contribute to a healthier society. ",
    },
    {
      id: 3,
      img: our_aim,
      title: "Our Aim",
      desc: "Prachin Global Hospitals aims to be a world-class healthcare provider by integrating cutting-edge technology with compassionate care.  We focus on patient delight, integrity and teamwork with a core mission to deliver excellent and empathetic healthcare while upholding values such as patient-first approach, professionalism, precision, privacy, preparedness and continuous improvement across all services.",
    },
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto">
      <div className="bg-[#C8DDED] rounded-[24px]    py-10 md:px-10 px-5 relative  overflow-hidden">
        <div className="absolute -right-[310px] -top-[653px] max-w-full">
          <img
            src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Decorations.png"
            alt=""
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-sm  3xl:text-[16px] uppercase">
            Our Vision
          </span>
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  text-center font-semibold mt-4 leading-tight">
            Our{" "}
            <span className="italic font-light font-instrumental text-[#5187af] pb-20">
              Vision, Mission & Aim
            </span>
          </h2>
        </div>
        <div className="xl:h-4"></div>
        <div className="grid xl:grid-cols-3  grid-cols-1 xl:gap-12 lg:gap-20 gap-20 mx-auto mt-16 lg:mx-8">
          {paragraph.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-[#E5F4FF] rounded-3xl md:pt-20 pt-12 pb-8 px-6"
            >
              {/* Image Circle */}
              <div className="absolute -top-12 sm:-top-14 md:-top-16 w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 bg-[#C8DDED] border-8 border-[#E5F4FF] rounded-full flex items-center justify-center">
                <img src={item.img} alt="" className="w-12 sm:w-14 " />
              </div>

              {/* Content */}
              <h2 className="text-[16px] md:text-[18px] font-manrope font-semibold mb-2 text-center">
                {item.title}
              </h2>

              <p className="text-justify text-[#66686C] text-sm 3xl:text-[15px] font-manrope">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
