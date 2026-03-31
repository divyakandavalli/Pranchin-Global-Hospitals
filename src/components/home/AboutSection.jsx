import React from "react";
import doctoricon from "../../assets/icons/surgeon.png";
import AdvancedTech from "../../assets/icons/ecg-machine.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StatsSection from "./StatsSection";
import homeBanner from "../../assets/images/image-22-768x768.jpg";
import feedback_Card from "../../assets/images/feedback_Card.jpg";
export default function AboutSection() {
  return (
    <section className=" 3xl:max-w-[82%] w-[95%] mx-auto xl:py-36 md:py-24 py-14">
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
          <div className="w-[306px] absolute md:flex hidden rounded-tl-3xl pt-[10px] font-manrope bg-white bottom-0 right-0   justify-end items-end">
            <div className="w-[296px] bg-[#DDEADB] rounded-2xl p-6">
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
        <div className="flex flex-col gap-2 xl:items-start items-center xl:order-2 order-1">
          <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
            ABOUT US
          </span>

          <h2 className="text-[44px] font-manrope md:text-[64px] xl:block hidden font-semibold mt-4 leading-tight">
            Compassionate Care <br />
            for{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Your Health
            </span>
          </h2>
          <h2 className="text-4xl font-manrope md:text-[64px] xl:hidden text-center block font-semibold mt-4 leading-tight">
            Compassionate Care 
            for{" "}<br />
            <span className="italic font-light font-instrumental text-[#5187af]">
              Your Health
            </span>
          </h2>

          <p className="text-[#788793] text-[18px] xl:text-left text-center xl:w-auto max-w-2xl font-manrope mt-4">
            Dedicated to providing expert healthcare, advanced technology,
            experienced professionals, and personalized treatments to ensure
            your well-being and a healthier future.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-7">
            <div className="flex md:flex-row flex-col  gap-6">
              <div className=" flex items-center justify-center rounded-lg">
                <img src={doctoricon} alt="" />
              </div>
              <div className="md:text-left text-center">
                <h4 className="font-semibold font-manrope text-[21px]">
                  Expert Doctor
                </h4>
                <p className="text-[16px] font-manrope text-[#788793] xl:w-auto lg:w-2/3 w-full">
                  Our team of highly skilled and experienced medical professiona
                  to providing top-quality healthcare with compassion and
                  precision.
                </p>
              </div>
            </div>
            <hr className="border-[#d1e1ed] border-t-[1px]" />
           <div className="flex md:flex-row flex-col  gap-6">
              <div className=" flex items-center justify-center rounded-lg">
                <img src={AdvancedTech} alt="" />
              </div>
             <div className="md:text-left text-center">
                <h4 className="font-semibold font-manrope text-[21px]">
                  Advanced Technology
                </h4>
                <p className="text-[16px] font-manrope text-[#788793] xl:w-auto lg:w-2/3 w-full">
                  We utilize cutting-edge medical technology and modern treatmen
                  to ensure accurate diagnoses and effective care for all
                  patients.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 hover:bg-[#3f5955] transition">
            <span className="font-medium font-manrope text-[16px] capitalize">
              More About Us
            </span>

            {/* Arrow Circle */}
            <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg">
              <ArrowForwardIcon fontSize="small" />
            </span>
          </button>
        </div>
      </div>

      <div>
        <StatsSection />
      </div>
    </section>
  );
}
