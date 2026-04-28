import React, { useState } from "react";
import ContactPerson from "../../assets/images/3.png";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: " Why Choose Prachin Hospital? ",
    a: "Prachin Hospital is committed to compassionate, patient-centered care with a team of highly experienced specialists. We combine advanced medical technology with personalized treatment plans to ensure the best possible outcomes for our patients across all departments.",
  },
  {
    q: " What services does Prachin Global Hospitals offer? ",
    a: "Prachin Global Hospitals is a multispeciality healthcare facility providing a wide range of medical services, including general medicine, surgery, orthopaedics, gynaecology, pediatrics, emergency care, diagnostics, and more.",
  },
  {
    q: " Do you provide 24×7 emergency services? ",
    a: "Yes! Emergency services and support are available around the clock.",
  },
  {
    q: " Is Prachin Hospital a multispeciality hospital?",
    a: "Yes, Prachin Hospital is a multispeciality hospital.",
  },
  {
    q: "Are diagnostic services available at the hospital?",
    a: "Yes, Prachin Hospital offers in-house diagnostic facilities.",
  },
  {
    q: "Do you provide health checkup packages?",
    a: "Yes, we offer preventive health checkup packages.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // 👇 show only 3 or all
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="py-10">
      <div className="max-w-[95%] md:max-w-[90%] 3xl:max-w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* LEFT */}
        <div className="w-full lg:w-[35%]">
          <div className="lg:sticky lg:top-20 space-y-4 sm:space-y-6">
            <img src={ContactPerson} alt="" className="w-full object-cover" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[65%]">
          <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px] text-[14px] text-center uppercase">
            Common Questions
          </span>

          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope font-semibold mt-4 leading-tight text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4 font-manrope">
            {visibleFaqs.map((item, index) => (
              <div key={index} className="cursor-pointer">
                {/* Question */}
                <div
                  className="bg-[#c8dded] rounded-[10px] sm:rounded-[12px] p-3 sm:p-4 md:p-5 flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-[#094ca0]">
                    {item.q}
                  </h4>

                  <span className="text-lg sm:text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <p className="text-[#2f373e] mt-2 sm:mt-3 p-3 sm:p-4 md:p-5 text-[14px] 3xl:text-[15px] leading-relaxed rounded-xl bg-[#e1f1fd]">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 👇 View More Button */}
          {faqs.length > 3 && (
            <div className="mt-6 flex ">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition"
              >
                <span className="font-medium font-manrope text-[14px] 3xl:text-[15px] capitalize">
                  {showAll ? "View Less" : "View More"}
                </span>

                {/* Arrow Circle */}
                <span
                  className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300
      group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                >
                  <EastIcon
                    className={`transition-transform duration-300 ${
                      showAll ? "rotate-90" : ""
                    }`}
                    fontSize="small"
                  />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}