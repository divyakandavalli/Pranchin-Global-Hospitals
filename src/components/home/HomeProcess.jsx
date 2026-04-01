import React from "react";
import DocVideo from "../../assets/videos/5194927_Young_Cute_3840x2160.mp4";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
export default function HomeProcess() {
  const steps = [
    {
      id: "01",
      title: "Book Appointment",
      desc: "Easily schedule your appointment online by phone & form. Choose a convenient time and get quick confirmation for your healthcare visit with us.",
    },
    {
      id: "02",
      title: "Medical Consultation",
      desc: "Meet our qualified doctors for a detailed consultation. We assess your condition, answer your concerns, and provide clear recommendations tailored to your needs.",
    },
    {
      id: "03",
      title: "Treatment & Care",
      desc: "Receive personalized treatment designed for your health goals. Our medical team ensures continuous monitoring and dedicated care to support your recovery being.",
    },
  ];

  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] mx-auto py-24 px-6 md:px-10 xl:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
          Our Process
        </span>

        <h2 className="text-[44px] font-manrope md:text-[64px] xl:block hidden font-semibold mt-4 leading-tight">
          Seamless Care in{" "}
          <span className="italic font-light font-instrumental text-[#5187af]">Three Steps</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col gap-[12px] relative pb-6 cursor-pointer"
          >
            {/* Step Number */}
            <p className="text-[#66686C] text-[16px] font-normal font-manrope">
              ({step.id})
            </p>

            {/* Title */}
            <h3 className="text-[21px] font-semibold text-[#00040B] font-manrope">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[#66686C] leading-[26px] font-normal font-manrope text-[16px]">
              {step.desc}
            </p>

            {/* Bottom Line with animation */}
            <div className="h-[4px] mt-8 bg-gray-200 relative overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full bg-[#094ca0] transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex min-h-[700px] justify-end rounded-[24px] my-10 flex-col relative overflow-hidden">
        <video
          key={DocVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={DocVideo} type="video/mp4" />
        </video>
        <div className="w-[250px] flex flex-row h-full justify-center  items-center self-center z-10 relative">
          <div className="max-w-full bg-[#FEFEFF] pt-3 px-3 rounded-t-[32px]">
            <div className="text-center">
<Link className="group bg-[#094ca0] pl-4 pr-2 py-2 font-manrope text-[16px] font-medium leading-[26px] text-white rounded-full inline-flex items-center gap-3 whitespace-nowrap border border-[#094ca0] transition-all duration-300 hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721]">
  
  Contact Us

  <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]">
    
    <EastIcon fontSize="small" />
  </span>

</Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-[4px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
            <div className=" w-[32px] h-full self-start shrink-0">
              <div className="h-[32px]"></div>
            </div>
          </div>
          <div className="absolute bottom-0 right-[4px] w-[32px] h-[32px] flex flex-col rounded-bl-[16px] shadow-[-8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
            <div className=" w-[32px] h-full self-start shrink-0">
              <div className="h-[32px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
