import React from "react";
import EastIcon from "@mui/icons-material/East";
import banner from "../../assets/images/about_us_aside.jpg"
import feedback_Card from "../../assets/images/chairman_2.jpeg";
import pentagon from "../../assets/images/pentagon.png"
import { HashLink } from "react-router-hash-link";
export default function AboutUsSection() {

  return (
    <section className=" 3xl:max-w-[80%] 2xl:max-w-[85%] w-[95%] xl:w-[92%] mx-auto py-10">
      <div className=" grid xl:grid-cols-2 grid-cols-1 3xl:gap-20 md:gap-10 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative xl:order-1 order-2">
          <div className="md:block hidden object-cover overflow-hidden">
            <img src={banner} alt="" className=" rounded-xl " />
          </div>
          <div className="md:hidden block object-cover overflow-hidden">
            <img src={banner} alt="" className=" rounded-xl " />
          </div>
          <div className="flex md:flex-row md:mt-0 mt-2 flex-col justify-between gap-0.5 items-center">
            <div className="">
            <img alt="" src={pentagon}/>
            </div>
            
            <div className="md:w-[320px]  flex  rounded-tl-3xl pt-2.5 font-manrope justify-end">
              <div className="md:w-[300px]  bg-[#DDEADB] rounded-2xl p-3">
                <div className="flex flex-row  items-center gap-2">
                  <img
                    src={feedback_Card}
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="">
                    <h6 className="text-black text-[15px]">
                      Shri Alapati Venkateswara Rao
                    </h6>
                    <p className="text-[#4D6E76] text-[15px]">
                      CHAIRMAN Prachin Hospital
                    </p>
                  </div>
                </div>
                <p className="text-sm 3xl:text-[15px] mt-2 text-[#66686C] text-justify">
                  “We don't just treat symptoms; we care for people and
                  committed in building a healthier society through compassion
                  with integrity”
                </p>

                <HashLink
                  smooth
                  to="/about#our-chairman"
                  className="group  flex items-center justify-between pt-1.5 hover:text-[#f37721]  rounded-full w-fit gap-2 transition duration-200"
                >
                  <span className="font-medium font-manrope text-[16px] capitalize">
                    Read More
                  </span>
                  <span className=" flex items-center justify-center text-lg transition">
                    <EastIcon fontSize="small" />
                  </span>
                </HashLink>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-1 xl:items-start items-center xl:order-2 order-1">
          <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px] text-sm  3xl:text-[16px]">
            ABOUT US
          </span>

          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope    font-semibold mt-1.5 leading-tight">
            Who{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              We Are?
            </span>
          </h2>

          <p className="text-[#788793] text-sm 3xl:text-[15px] text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Prachin Global Hospitals, 250-bed super-speciality healthcare
            provider committed to delivering world-class healthcare services
            with compassion, precision and excellence. Designed to meet
            international standards, the hospital seamlessly combines advanced
            technology with the highly skilled medical professionals to ensure
            the best possible outcomes for patients.
          </p>
          <p className="text-[#788793] text-sm 3xl:text-[15px] text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Hospital is equipped with advanced Transplant Operation Theatres and
            Robotic Operation Theatre facility, enabling complex and minimally
            invasive procedure with the greater accuracy, faster recovery and
            enhanced patient safety. Our infrastructure supports for Medical,
            Surgical all Super Speciality care with round the clock Emergency
            and Critical Care services. We have equipped with comprehensive
            Diagnostics and Treatment services, including an Advanced Clinical
            Laboratory with high end Radiology Department
          </p>
          <p className="text-[#788793] text-sm 3xl:text-[15px] text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            We have equipped with comprehensive Diagnostics and Treatment services, including an Advanced Clinical Laboratory with high end Radiology Department includes MRI, CT, USG, MAMMOGRAPHY, NEURO LAB, DIALYSIS, BMD (Bone Mineral Density), CATHLAB and dedicated Chemotherpay services. These facilities ensure accurate diagnosis and timely treatment as a one stop healthcare solution for all treatments.  The expert clinical and nursing team ensures to deliver the Safe, Patient Centric care in healthy atmosphere by following the stringent Quality Protocols. 
          </p>
          <p className="text-[#788793] text-sm 3xl:text-[15px] text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            We ensure uninterrupted patient care provides a fully equipped 24/7 Pharmacy facility access to essential and specialised medications.</p>
          <p className="text-[#788793] text-sm 3xl:text-[15px] text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Our strength lies on highly qualified and experienced Doctors,
            Paramedics, Nursing Staff and Patient Care team, who are dedicated
            in providing ethical, patient centric care round the clock. We
            strives with a strong focus safety, innovation, clinical excellence
            and technology and trusted destination for advanced health care
            services where advanced technology meets compassionate care.
          </p>
        </div>
      </div>
    </section>
  );
}