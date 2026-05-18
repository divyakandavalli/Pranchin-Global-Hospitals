import React, { useContext } from "react";
import entry_jobs from "../../assets/images/entry_jobs.jpg";
import profimg from "../../assets/images/professional_jobs.jpg";

import { AppContext } from "../AppContext";
import ApplicationForm from "./ApplicationForm";

const CareerForms = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  return (
    <div className="xl:max-w-[90%] font-manrope 3xl:max-w-[72%] w-[95%] mx-auto py-10">
      {/* Tabs */}
      <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0] transition-all duration-300`}
        >
          Open Positions
        </button>

        <button
          onClick={() => setActiveTab(2)}
          className={`${
            activeTab === 2
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0] transition-all duration-300`}
        >
          Internship Opportunities
        </button>
      </div>

      {/* ==================== OPEN POSITIONS ==================== */}
      {activeTab === 1 && (
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 mt-5 mx-auto">
          {/* Left Content */}
          <div>
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img
                src={profimg}
                alt="Open Positions"
                className="rounded-[14px] w-full"
              />
            </div>

            <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 mt-8 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                Career Opportunities at Prachin Global Hospital
              </h3>

              <p className="3xl:text-[15px] text-sm text-[#2f373e] mt-2">
                Join Prachin Global Hospital and build a rewarding career in a
                professional healthcare environment. We welcome passionate,
                dedicated, and skilled candidates across multiple departments to
                grow with our team and deliver exceptional patient care.
              </p>
            </div>
          </div>

          {/* Form */}
          <ApplicationForm />
        </div>
      )}

      {/* ==================== INTERNSHIP SECTION ==================== */}
      {activeTab === 2 && (
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 mt-5 mx-auto">
          {/* Left Content */}
          <div>
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img
                src={entry_jobs}
                alt="Internship Opportunities"
                className="rounded-[14px] w-full"
              />
            </div>

            <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 mt-8 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                Internship Opportunities at Prachin Global Hospital
              </h3>

              <p className="3xl:text-[15px] text-sm text-[#2f373e] mt-2">
                We at Prachin Global Hospital are inviting enthusiastic and
                motivated candidates to apply for internship opportunities
                across various departments. This internship is designed to
                provide hands-on experience in a professional healthcare
                environment and enhance practical skills.
              </p>
            </div>
          </div>

          {/* Form */}
          <ApplicationForm />
        </div>
      )}
    </div>
  );
};

export default CareerForms;