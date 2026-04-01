import React, { useState } from "react";
import ContactPerson from "../../assets/images/smiling-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-looking-doing-call-gesture-pistol-gesture-isolated.jpg";
import EastIcon from "@mui/icons-material/East";

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pb-10 md:pt-20 md:pb-20">
      <div className="max-w-[95%] md:max-w-[90%] 3xl:max-w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* LEFT */}
        <div className="w-full lg:w-[35%]">
          <div className="lg:sticky lg:top-20 space-y-4 sm:space-y-6">
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img
                src={ContactPerson}
                alt=""
                className="rounded-[16px] w-full object-cover"
              />
            </div>

            <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                Have More Any Questions?
              </h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2f373e] mt-2">
                One morning, when Gregor Samsa woke will from grow yo troubled
                dreams...
              </p>

              <button className="group mt-5 sm:mt-8 flex items-center justify-between bg-[#094ca0] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 hover:bg-[#f37721] transition">
                <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize">
                  Get Free Consultation
                </span>

                <span
                  className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition
                  group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                >
                  <EastIcon fontSize="small" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[65%]">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 sm:px-4 py-1 rounded-full tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[14px] md:text-[16px] uppercase inline-block">
            Common Questions
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-manrope font-semibold mt-4 leading-tight">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4 font-manrope">
            {faqs.map((item, index) => (
              <div key={index} className="cursor-pointer">
                {/* Question */}
                <div
                  className="bg-[#c8dded] rounded-[10px] sm:rounded-[12px] p-3 sm:p-4 md:p-5 flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h4 className="font-semibold text-[14px] sm:text-[16px] md:text-[21px] text-[#094ca0]">
                    {item.q}
                  </h4>

                  <span className="text-lg sm:text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <p className="text-[#2f373e] mt-2 sm:mt-3 p-3 sm:p-4 md:p-5 text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
