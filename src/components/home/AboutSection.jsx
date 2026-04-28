import React from "react";
import doctoricon from "../../assets/icons/surgeon.png";
import AdvancedTech from "../../assets/icons/ecg-machine.png";
import EastIcon from "@mui/icons-material/East";
import homeBanner from "../../assets/images/Image Collage-01.jpg";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <div className="">
      <section className=" 3xl:max-w-[82%] w-[95%] mx-auto  h-full py-10 flex justify-center items-center">
        <div className=" grid xl:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="relative xl:order-1 order-2">
            <img src={homeBanner} alt="" className="rounded-2xl" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-2 items-start  xl:order-2 order-1">
            <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[14px] text-center uppercase">
              ABOUT US
            </span>

            <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px]  font-manrope font-semibold leading-tight text-black">
              Compassionate Care <br />
              for{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Your Health
              </span>
            </h2>
            <p className="text-[#022038] text-[14px] 3xl:text-[15px]  text-justify xl:w-auto max-w-2xl font-manrope ">
              Prachin Global Hospital is committed to delivering high-quality,
              ethical, and compassionate healthcare through advanced technology,
              integrated services, and evidence-based practices. We focus on
              patient safety, clinical excellence, and innovation to provide
              affordable, accessible, and holistic care, building a healthier
              society for all.
            </p>

            {/* FEATURES */}
            <div className=" space-y-2 w-full xl:w-[80%]">
              <div className="flex md:flex-row flex-col  gap-6">
                <div className=" flex items-center justify-center rounded-lg">
                  <img src={doctoricon} alt="" />
                </div>
                <div className="md:text-left text-center">
                  <h4 className="font-semibold font-manrope  text-[16px] md:text-[18px] text-[#5187af]">
                    Expert Doctor
                  </h4>
                  <p className="text-[14px] 3xl:text-[15px] font-manrope text-[#022038] xl:w-auto lg:w-2/3 w-full">
                  Our team of highly skilled and experienced medical professionals is committed to providing top-quality healthcare with compassion and precision.
                  </p>
                </div>
              </div>
              <hr className="border-[#d1e1ed] border-t-[1px]" />
              <div className="flex md:flex-row flex-col  gap-6">
                <div className=" flex items-center justify-center rounded-lg">
                  <img src={AdvancedTech} alt="" />
                </div>
                <div className="md:text-left text-center">
                  <h4 className="font-semibold font-manrope text-[16px] md:text-[18px] text-[#5187af]">
                    Advanced Technology
                  </h4>
                  <p className="text-[14px] 3xl:text-[15px] font-manrope text-[#022038] xl:w-auto lg:w-2/3 w-full">
                   We utilize cutting-edge medical technology and modern treatments to ensure accurate diagnoses and effective care for all patients.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="group  flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition"
            >
              <span className="font-medium font-manrope text-[14px] 3xl:text-[15px] capitalize">
                More About Us
              </span>

              {/* Arrow Circle */}
              <span
                className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition 
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
              >
                <EastIcon fontSize="small" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
