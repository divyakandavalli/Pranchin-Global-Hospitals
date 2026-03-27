import React from "react";
import doctoricon from '../../assets/icons/surgeon.png'
import AdvancedTech from '../../assets/icons/ecg-machine.png'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StatsSection  from './StatsSection'
export default function AboutSection() {
  return (
    <section className="max-w-[72%] mx-auto py-36">
      <div className=" grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/About-CU9S3T4.jpg"
            alt="doctor"
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
            ABOUT US
          </span>

          <h2 className="text-4xl font-manrope md:text-[64px] font-semibold mt-4 leading-tight">
            Compassionate Care <br />
            for <span className="italic font-light font-instrumental text-[#5187af]">Your Health</span>
          </h2>

          <p className="text-[#788793] text-[18px] font-manrope mt-4">
            Dedicated to providing expert healthcare, advanced technology,
            experienced professionals, and personalized treatments to ensure
            your well-being and a healthier future.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-7">
            <div className="flex gap-6">
              <div className=" flex items-center justify-center rounded-lg">
                <img src={doctoricon} alt="" />
              </div>
              <div>
                <h4 className="font-semibold font-manrope text-[21px]">Expert Doctor</h4>
                <p className="text-[16px] font-manrope text-[#788793]">
                  Our team of highly skilled and experienced medical professiona to providing top-quality healthcare with compassion and precision.
                </p>
              </div>
            </div>
            <hr className="border-[#d1e1ed] border-t-[1px]" />
            <div className="flex gap-6">
              <div className=" flex items-center justify-center rounded-lg">
                <img src={AdvancedTech} alt="" />
              </div>
              <div>
                <h4 className="font-semibold font-manrope text-[21px]">Advanced Technology</h4>
                <p className="text-[16px] font-manrope text-[#788793]">
                  We utilize cutting-edge medical technology and modern treatmen to ensure accurate diagnoses and effective care for all patients.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 hover:bg-[#3f5955] transition">

            <span className="font-medium font-manrope text-[16px] capitalize">More About Us</span>

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