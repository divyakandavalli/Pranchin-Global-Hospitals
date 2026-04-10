import React from "react";
import StatsSection from "../home/StatsSection";
import homeBanner from "../../assets/images/HospitalImage.jpg";
import feedback_Card from "../../assets/images/feedback_Card.jpg";
export default function AboutUsSection() {
  return (
    <section className=" 3xl:max-w-[82%] w-[95%] mx-auto  md:py-24 py-14">
      <div className=" grid xl:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-16 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative xl:order-1 order-2">
          <div
            className="xl:h-[675px] md:min-h-[500px] h-[350px] rounded-3xl object-cover"
            style={{
              backgroundImage: `url(${homeBanner})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="w-[306px] absolute md:flex hidden rounded-tl-3xl pt-[10px] font-manrope bg-[white] bottom-0 right-0   justify-end items-end">
            <div className="w-[296px] bg-[#DDEADB] rounded-2xl p-6">
              <div className="flex flex-row gap-4">
                <img
                  src={feedback_Card}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="">
                  <h6 className="text-black text-lg">Dr. Michael Reynolds</h6>
                  <p className="text-[#4D6E76] text-base ">Prachin Hospital</p>
                </div>
              </div>
              <p className="text-sm mt-4 text-[#66686C]">
                “Our strength lies in our team of highly qualified and experienced doctors, paramedics, nursing staff and operations team. who are dedicated to providing ethical, patient-centric care round the clock..”
              </p>
            </div>
            <div className="absolute -left-[33px] bottom-0 w-[33px] flex rounded-[0px_0px_16px_0] shadow-[8px_4px_0px_0px_#FEFEFF]">
              <div className="w-8">
                <div className="w-8">
                  <div className="h-8"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-[33px] right-0 w-[33px] flex rounded-[0px_0px_16px_0] shadow-[8px_4px_0px_0px_#FEFEFF]">
              <div className="w-8">
                <div className="w-8">
                  <div className="h-8"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden w-full sm:mt-8 mt-4">
            <div className=" bg-[#DDEADB] rounded-2xl md:p-6 p-4">
              <div className="flex flex-row gap-4">
                <img
                  src={feedback_Card}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className="">
                  <h6 className="text-black text-lg">Dr. Michael Reynolds</h6>
                  <p className="text-[#4D6E76] text-base ">Founder Healix</p>
                </div>
              </div>
              <p className="text-sm mt-4 text-[#66686C]">
                “At Healix, our mission is to provide in you accessible,
                high-quality goods healthcare leti advanced letingo ma
                technology, personalized go your treatment for a healthier
                future.”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-1 xl:items-start items-center xl:order-2 order-1">
          <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
            ABOUT US
          </span>

          <h2 className="text-[44px] font-manrope md:text-[64px]   font-semibold mt-1.5 leading-tight">
            Who{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              We Are?
            </span>
          </h2>

          <p className="text-[#788793] text-[18px] xl:text-justify text-center xl:w-auto max-w-2xl font-manrope mt-1">
            Prachin Global Hospitals is a state-of-the-art, 250-bed
            super-specialty healthcare provider committed to delivering
            world-class medical care with compassion, precision, and excellence.
            Designed to meet international standards, the hospital seamlessly
            combines advanced technology with highly skilled medical
            professionals to ensure the best possible outcomes for patients.
          </p>
          <p className="text-[#788793] text-[18px] xl:text-justify text-center xl:w-auto max-w-2xl font-manrope mt-1">
            The hospital is equipped with advanced Transplant Operation Theatres
            and Robotic OT facilities, enabling complex and minimally invasive
            procedures with greater accuracy, faster recovery, and enhanced
            patient safety. Our infrastructure supports high-end surgical,
            oncology and critical care services across multiple specialties.
          </p>
          <p className="text-[#788793] text-[18px] xl:text-justify text-center xl:w-auto max-w-2xl font-manrope mt-1">
            We offer comprehensive diagnostic and treatment services, including
            a specialised diagnostic laboratory, CT, MRI, USG, Mammography,
            Neuro Lab, Dialysis, Bone Mineral Density (BMD) testing and
            dedicated Chemotherapy services delivered in a safe, monitored, and
            patient-friendly environment. These facilities ensure accurate
            diagnosis and timely treatment under one roof and are supported by
            modern laboratories and stringent quality protocols.
          </p>
          <p className="text-[#788793] text-[18px] xl:text-justify text-center xl:w-auto max-w-2xl font-manrope mt-1">
          To ensure uninterrupted patient care, we also provides a fully equipped 24-hour pharmacy facility, offering round-the-clock access to essential and specialised medications.
          </p>
        </div>
      </div>

      <div>
        <StatsSection />
      </div>
    </section>
  );
}
