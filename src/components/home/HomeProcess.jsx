import React from "react";
import DocVideo from "../../assets/videos/Prachin global Hospital video 0.2.mp4";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
export default function HomeProcess() {
  const steps = [
    {
      id: "01",
      title: "Book Appointment",
      desc: "Easily book your appointment online or by phone at your convenience, with quick confirmation for your visit.",
    },
    {
      id: "02",
      title: "Medical Consultation",
      desc: "Consult for expert solutions, Detailed evaluation, and Individual counselling for your concerns.",
    },
    {
      id: "03",
      title: "Treatment & Care",
      desc: "Receive personalized treatment with continuous care and monitoring to support your recovery.",
    },
  ];
const videos = [
    1, 2, 3, 4, 5, 6
  ];
  return (
    <div className="w-full xl:max-w-[95%] 3xl:max-w-[85%] mx-auto px-6 md:px-10 xl:px-20 py-10 ">
      {/* Heading */}
      <div className="">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px]  font-manrope font-semibold  leading-tight mb-5">
            Seamless Care in{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Three Steps
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col h-full gap-[12px] relative pb-6 cursor-pointer"
            >
              {/* Step Number */}
              <p className="text-[#66686C] text-[14px] 3xl:text-[15px] font-normal font-manrope">
                ({step.id})
              </p>

              {/* Title */}
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#00040B] font-manrope">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#66686C] leading-[26px] font-normal font-manrope text-[14px] 3xl:text-[15px]">
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div className="h-[4px] mt-auto bg-gray-200 relative overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full bg-[#094ca0] transition-all duration-300 ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full flex min-h-[300px] md:min-h-[400px] xl:min-h-[80vh] justify-end rounded-[24px] flex-col relative overflow-hidden">
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
              <Link
                to="/contact"
                className="group bg-[#094ca0] pl-4 pr-2 py-2 font-manrope text-[16px] font-medium leading-[26px] text-white rounded-full inline-flex items-center gap-3 whitespace-nowrap border border-[#094ca0] transition-all duration-300 hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721]"
              >
                Contact Us
                <span
                  className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                >
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
      </div> */}
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">
      {videos.map((_, index) => (
        <div
          key={index}
          className="w-full aspect-video rounded-xl overflow-hidden shadow-md"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XHOmBV4js_E?rel=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  );
}