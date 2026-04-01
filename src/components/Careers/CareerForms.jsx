import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import ContactPerson from "../../assets/images/professional_jobs.jpg"
import entry_jobs from "../../assets/images/entry_jobs.jpg"

const CareerForms = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="xl:max-w-[90%] font-manrope 3xl:max-w-[72%] w-[95%] mx-auto md:py-24 py-14">
      {/* Tabs */}
      <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
        <button
          onClick={() => setActive(1)}
          className={`${
            active === 1
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl md:px-6 py-0.5 px-2 md:py-1 border border-[#094CA0] transition-all duration-300`}
        >
          Open Positions
        </button>

        <button
          onClick={() => setActive(2)}
          className={`${
            active === 2
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0]  transition-all duration-300`}
        >
          Internship Opportunities
        </button>
      </div>

      <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 lg:mt-16 md:mt-10 mt-5 mx-auto">
        {active === 1 && (
          <div className="">
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img src={ContactPerson} alt="" className="rounded-[16px] " />
            </div>

            <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 mt-8 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                Join with Prachin Global Hospitals for better career and
                professional growth
              </h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2f373e] mt-2">
                We are seeking a qualified and experienced General Physician to
                provide comprehensive medical care to patients, diagnose and
                treat a wide range of acute and chronic illnesses, and promote
                preventive healthcare. The ideal candidate should possess strong
                clinical judgment, patient communication skills, and a
                compassionate approach to patient care.
              </p>
            </div>
          </div>
        )}

        {active === 2 && (
          <div className="">
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img src={entry_jobs} alt="" className="rounded-[16px] " />
            </div>

            <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 mt-8 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                Internship Opportunities at Prachin Global Hospital
              </h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2f373e] mt-2">
                We at Prachin Global Hospital are inviting enthusiastic and
                motivated candidates to apply for internship opportunities
                across various departments. This internship is designed to
                provide hands-on experience in a professional healthcare
                environment and enhance practical skills.
              </p>
            </div>
          </div>
        )}
        <div className="sticky top-0">
        <div className="flex flex-col bg-[#094ca0] xl:p-12 md:p-8 p-6 rounded-3xl  ">
          <div className="grid grid-cols-1 md:grid-cols-2  md:gap-4 gap-2 max-w-full">
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Peter Johnson"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Your Email
              </label>
              <input
                type="email"
                placeholder="e.g. hello@healix.com"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Phone
              </label>
              <input
                type="text"
                placeholder="e.g. 0812 3456 7890"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Position
              </label>
              <input
                type="text"
                placeholder="Doctor/Nurse/Compounder"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
          </div>
          <div className="mt-[32px] font-manrope">
            <label className="text-[16px] font-manrope mb-[12px] text-white block">
              Resume/CV
            </label>
            <input
              type="file"
              placeholder="e.g. 0812 3456 7890"
              className="w-full p-3 rounded-lg bg-white outline-none"
            />
          </div>
          {/* MESSAGE */}
          <div className="mt-[32px] font-manrope">
            <label className="text-[16px] font-manrope mb-[12px] text-white block">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="write your message here..."
              className="w-full p-3 rounded-lg bg-white outline-none"
            />
          </div>

          {/* BUTTON */}
          <button className=" flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-[#f37721] duration-300 transition-all text-white px-6 py-2 rounded-full w-fit gap-4   mt-8 ">
            <span className="font-medium font-manrope text-[16px] capitalize">
              Submit Details
            </span>

            {/* Arrow Circle */}
            <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
              <EastIcon fontSize="small" />
            </span>
          </button>
        </div>
        </div>
      </div>
      {/* Content */}
      <div className="mt-10"></div>
    </div>
  );
};

export default CareerForms;
