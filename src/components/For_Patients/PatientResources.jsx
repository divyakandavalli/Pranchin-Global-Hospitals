import React, { useState } from "react";
import bannerimg from "../../assets/images/patient_resource.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EastIcon from "@mui/icons-material/East";
import Insurances from "../common/Insurances";
const PatientResources = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const resources = [
    {
      id: 1,
      title: "Health Checkup Guidelines",

      desc: "Learn how to prepare for your health checkups and screenings.",
    },
    {
      id: 2,
      title: "Medical Reports Guide",

      desc: "Understand your lab reports and medical test results easily.",
    },
    {
      id: 3,
      title: "Insurance & Billing",

      desc: "Information about insurance claims and billing process.",
    },
    {
      id: 4,
      title: "Emergency Support",

      desc: "Quick access to emergency numbers and hospital contacts.",
    },
  ];

  const faqs = [
    {
      q: "How to book an appointment?",
      a: "You can book an appointment online through our Contact Us page or call our support number.",
    },
    {
      q: "Do I need fasting before tests?",
      a: "Yes, for certain tests like blood sugar, fasting for 8–10 hours is recommended.",
    },
    {
      q: "How can I access my reports?",
      a: "Reports can be accessed online via the patient portal or collected from the hospital.",
    },
  ];
  return (
    <>
      <div
        className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[bottom_center] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#010813]/70" />

        {/* Content */}
        <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
          <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
            Patient Resources
          </h1>

          <div className="flex items-center justify-center text-base font-manrope">
            <a href="/">Home</a>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <a className="text-[#f37721]" href="/about">
              Patient Resources
            </a>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%] font-manrope  mx-auto md:pt-16 pt-12  md:pb-10 pb-0">
        {/* Hero Section */}
        <div className=" text-center pb-8 ">
          <h2 className=" md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
            Helpful{" "}
            <span className="text-[#f37721] font-normal italic font-instrumental">
              Resources
            </span>
          </h2>
          <p className="">
            Access important health information, guides, and support resources
            to help you manage your healthcare journey.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <div
                key={item.id}
                className="flex relative justify-between group items-center bg-[#c8dded] px-5 py-6 rounded-[14px]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#5187af] font-manrope">
                    {item.title}
                  </h3>
                  <p className="text-sm  mt-2 pe-10 font-manrope">
                    {item.desc}
                  </p>
                </div>

                <div className="w-16 absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-1 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
                  <div className=" flex-col gap-2 z-10  w-12 h-12 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                    <EastIcon
                      fontSize="32px"
                      className="text-xl  text-[#5187af]"
                    />
                  </div>{" "}
                  <div className="absolute -left-8 top-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                    <div className="w-8">
                      <div className="w-8">
                        <div className="h-8"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 right-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                    <div className="w-8">
                      <div className="w-8">
                        <div className="h-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="">
              <h2 className="text-2xl font-medium text-left mb-8">
                Downloadable Guides
              </h2>

              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  "Pre-Checkup Instructions PDF",
                  "Diet & Nutrition Guide",
                  "Post-Treatment Care Guide",
                ].map((doc, index) => (
                  <button
                    key={index}
                    className="flex  w-full justify-between items-center border group hover:border-[#f37721]  p-4 rounded-2xl hover:text-[#f37721] border-[#094ca0] text-[#094ca0]"
                  >
                    <span>{doc}</span>
                    <p className="text-blue-600 group-hover:text-[#f37721] transition-all group-hover:duration-200 font-medium">
                      Download
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Insurances />
      </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%]  mx-auto  md:pb-20 pb-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
          <div className="flex flex-col  gap-8">
            <div className=" flex flex-col items-start  gap-6">
              <div>
                <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
                  Contact Now
                </span>
              </div>
              <h2 className=" md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
                Need Immediate{" "}
                <span className="text-[#f37721] font-normal italic font-instrumental">
                  Assistance?
                </span>
              </h2>
              <p className="text-lg font-normal xl:pe-20  text-[#66686C]">
                Reach out to our friendly team for appointments, inquiries, or
                support. We are committed to responding quickly and guiding you
                to care.
              </p>
            </div>

            <div className=" space-y-3 sm:space-y-4 font-manrope">
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
          <div className="flex flex-col bg-[#094ca0] xl:p-12 md:p-8 p-6 rounded-3xl  ">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 md:gap-4 gap-2 max-w-full">
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
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. 0812 3456 7890"
                  className="w-full p-3 rounded-lg bg-white outline-none"
                />
              </div>
            </div>
            {/* MESSAGE */}
            <div className="mt-[32px] font-manrope">
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Message
              </label>
              <textarea
                rows="5"
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
    </>
  );
};

export default PatientResources;
