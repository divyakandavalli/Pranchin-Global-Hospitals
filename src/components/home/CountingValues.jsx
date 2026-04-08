import React from "react";
import StatsSection from "./StatsSection";
export default function CountingValues() {
  const steps = [
    {
      id: "01",
      title: "Book Appointment",
      desc: "Easily book your appointment online or by phone at your convenience, with quick confirmation for your visit.",
    },
    {
      id: "02",
      title: "Medical Consultation",
      desc: "Consult our qualified doctors for a detailed evaluation, clear guidance, and answers to your concerns.",
    },
    {
      id: "03",
      title: "Treatment & Care",
      desc: "Receive personalized treatment with continuous care and monitoring to support your recovery.",
    },
  ];
  return (
    <div className="3xl:max-w-[82%] w-[95%] mx-auto  xl:py-0">
      <StatsSection />
      <div className="my-10 xl:my-20">
        <div className="text-center max-w-4xl mx-auto ">
          <h2 className="text-4xl md:text-[44px] font-manrope 3xl:text-[64px] font-semibold  leading-tight">
            Seamless Care in{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Three Steps
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 xl:mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col h-full gap-[12px] relative pb-6 cursor-pointer"
            >
              {/* Step Number */}
              <p className="text-[#66686C] text-[16px] font-normal font-manrope">
                ({step.id})
              </p>

              {/* Title */}
              <h3 className="text-[16px] md:text-[21px] font-semibold text-[#00040B] font-manrope">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#66686C] leading-[26px] font-normal font-manrope text-[14px] md:text-[16px]">
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
    </div>
  );
}
