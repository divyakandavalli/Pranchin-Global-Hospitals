import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import entry_jobs from "../../assets/images/entry_jobs.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import NorthIcon from "@mui/icons-material/North";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CategoryIcon from "@mui/icons-material/Category";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import profimg from "../../assets/images/professional_jobs.jpg";
import SouthIcon from "@mui/icons-material/South";
import WestIcon from '@mui/icons-material/West';
const CareerForms = () => {
  const [active, setActive] = useState(1);
  const [activeJob, setActiveJobs] = useState(1);
  const [applyJob, setApplyJob] = useState(false);

  const healthcareJobs = [
    {
      id: 1,
      title: "General Physician",
      department: "Medical",
      location: "Hyderabad",
      employmentType: "Full-time",
      experience: "2-5 years",
      salaryRange: "₹6-12 LPA",

      description:
        "Diagnose and treat common illnesses, provide preventive care, and guide patients on overall health management.",

      responsibilities: [
        "Examine patients and diagnose medical conditions",
        "Prescribe medications and treatments",
        "Maintain accurate patient records",
        "Refer patients to specialists when required",
        "Provide health education and preventive care advice",
      ],

      requirements: [
        "MBBS degree from a recognized institution",
        "Valid medical license",
        "Strong diagnostic and clinical skills",
        "Good communication and interpersonal skills",
      ],

      skills: [
        "Clinical diagnosis",
        "Patient management",
        "Communication",
        "Decision-making",
      ],

      benefits: [
        "Health insurance",
        "Paid leaves",
        "Flexible working hours",
        "Professional development support",
      ],

      shift: "Day Shift",
      openings: 3,
      postedDate: "2026-04-01",
    },

    {
      id: 2,
      title: "Staff Nurse",
      department: "Nursing",
      location: "Bangalore",
      employmentType: "Full-time",
      experience: "1-3 years",
      salaryRange: "₹2-5 LPA",

      description:
        "Provide patient care, assist doctors, and ensure smooth functioning of healthcare services.",

      responsibilities: [
        "Monitor patient health and record vitals",
        "Administer medications and injections",
        "Assist in surgeries and procedures",
        "Maintain hygiene and safety standards",
        "Support patient recovery and comfort",
      ],

      requirements: [
        "BSc Nursing or GNM",
        "Registered Nurse certification",
        "Basic life support (BLS) knowledge",
      ],

      skills: [
        "Patient care",
        "Attention to detail",
        "Empathy",
        "Time management",
      ],

      benefits: [
        "Free accommodation",
        "Meal allowance",
        "Health insurance",
        "Night shift allowance",
      ],

      shift: "Rotational Shift",
      openings: 5,
      postedDate: "2026-04-02",
    },

    {
      id: 3,
      title: "Radiologist",
      department: "Radiology",
      location: "Chennai",
      employmentType: "Full-time",
      experience: "3-7 years",
      salaryRange: "₹15-30 LPA",

      description:
        "Analyze medical images such as X-rays, CT scans, and MRIs to diagnose diseases and guide treatment.",

      responsibilities: [
        "Interpret diagnostic imaging results",
        "Collaborate with physicians for accurate diagnosis",
        "Ensure imaging equipment is used correctly",
        "Prepare detailed reports",
      ],

      requirements: [
        "MD/DNB in Radiology",
        "Valid medical license",
        "Experience with imaging technologies",
      ],

      skills: [
        "Image analysis",
        "Attention to detail",
        "Medical knowledge",
        "Analytical thinking",
      ],

      benefits: [
        "High salary package",
        "Health insurance",
        "Research opportunities",
        "Conference sponsorship",
      ],

      shift: "Flexible",
      openings: 2,
      postedDate: "2026-04-01",
    },

    {
      id: 4,
      title: "Lab Technician",
      department: "Diagnostics",
      location: "Mumbai",
      employmentType: "Full-time",
      experience: "1-4 years",
      salaryRange: "₹2-4 LPA",

      description:
        "Perform laboratory tests to assist in diagnosis and treatment of diseases.",

      responsibilities: [
        "Collect and analyze samples",
        "Maintain lab equipment",
        "Prepare reports for doctors",
        "Follow safety protocols",
      ],

      requirements: [
        "Diploma or Degree in Medical Lab Technology",
        "Knowledge of lab equipment",
        "Attention to detail",
      ],

      skills: [
        "Lab testing",
        "Data recording",
        "Equipment handling",
        "Accuracy",
      ],

      benefits: ["Health insurance", "Overtime pay", "Training programs"],

      shift: "Day Shift",
      openings: 4,
      postedDate: "2026-04-03",
    },

    {
      id: 5,
      title: "Hospital Administrator",
      department: "Administration",
      location: "Delhi",
      employmentType: "Full-time",
      experience: "5+ years",
      salaryRange: "₹8-18 LPA",

      description:
        "Oversee hospital operations, manage staff, and ensure efficient healthcare service delivery.",

      responsibilities: [
        "Manage daily hospital operations",
        "Supervise staff and departments",
        "Ensure compliance with healthcare regulations",
        "Handle budgeting and resource allocation",
      ],

      requirements: [
        "MBA in Healthcare Management",
        "Leadership experience",
        "Knowledge of hospital operations",
      ],

      skills: ["Leadership", "Management", "Communication", "Problem-solving"],

      benefits: ["Performance bonuses", "Health insurance", "Paid vacations"],

      shift: "General",
      openings: 1,
      postedDate: "2026-04-02",
    },
  ];
  return (
    <div className="xl:max-w-[90%] font-manrope 3xl:max-w-[72%] w-[95%] mx-auto md:py-24 py-8">
      {applyJob && (
        <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
          <button
            onClick={() => {
              setActive(1);
              setApplyJob(false);
            }}
            className={`${
              active === 1
                ? "bg-[#094CA0] text-white"
                : "bg-transparent text-[#F37721] flex items-center justify-center gap-2 border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
            } md:text-lg text-base rounded-3xl md:px-6 py-0.5 px-2  border border-[#094CA0] transition-all duration-300`}
          >
          <WestIcon />  Back to Open Roles
          </button>
        </div>
      )}

      {applyJob ? (
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 lg:mt-16 md:mt-10 mt-5 mx-auto">
          <div className="">
            <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
              <img src={profimg} alt="" className="rounded-[16px] " />
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
      ) : (
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
      )}

      {active === 1 && (
        <>
          <div className=" lg:mt-12 md:mt-10 mt-5  hidden md:grid gap-5 grid-cols-12 mx-auto">
            <div className="xl:col-span-4 col-span-5">
              {healthcareJobs.map((item, index) => (
                <div
                  onClick={() => {
                    setActiveJobs(item.id);
                    window.scrollTo({
                      top: 350,
                      behavior: "smooth",
                    });
                  }}
                  key={index}
                  className={`${activeJob === item.id ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer my-4 rounded-2xl transition-all duration-300`}
                >
                  <span className="font-bold">{item.title}</span>{" "}
                  <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                    {activeJob === item.id ? (
                      <EastIcon fontSize="small" />
                    ) : (
                      <NorthIcon fontSize="small" />
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="xl:col-span-8 col-span-7 font-manrope xl:ms-10">
              {healthcareJobs
                .filter((job) => job.id === activeJob)
                .map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#e5f4ff] rounded-2xl my-4 py-6 xl:px-10 px-4"
                  >
                    {/* Title */}
                    <h2 className="lg:text-2xl text-xl text-center font-bold capitalize pb-12">
                      {job.title}
                    </h2>

                    {/* Basic Info */}
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4  mb-6 text-lg">
                      <div>
                        {" "}
                        <p>
                          <LocationPinIcon
                            className="text-[#f37721]"
                            fontSize="small"
                          />{" "}
                          <strong> Location:</strong> {job.location}
                        </p>
                        <p className="xl:mt-0 mt-3">
                          <CategoryIcon
                            className="text-[#f37721]"
                            fontSize="small"
                          />{" "}
                          <strong> Type:</strong> {job.employmentType}
                        </p>
                      </div>
                      <div>
                        <p>
                          <AccessTimeFilledIcon
                            className="text-[#f37721]"
                            fontSize="small"
                          />{" "}
                          <strong> Experience:</strong> {job.experience}
                        </p>
                        <p className="xl:mt-0 mt-3">
                          <CurrencyRupeeIcon
                            className="text-[#f37721]"
                            fontSize="small"
                          />{" "}
                          <strong> Salary:</strong> {job.salaryRange}
                        </p>
                      </div>
                      <div className="xl:flex justify-center items-center">
                        {/* BUTTON */}
                        <button
                          onClick={() => {
                            setApplyJob(true);
                            setActive(3);
                          }}
                          className=" flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-[#f37721] duration-300 transition-all text-white hover:text-[#f37721] px-4 py-2 rounded-full w-fit gap-4 "
                        >
                          <span className="font-medium font-manrope text-[16px] capitalize">
                            Apply
                          </span>
                          {/* Arrow Circle */}
                          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-7 h-7 flex items-center justify-center text-lg">
                            <EastIcon fontSize="small" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#f37721] mb-2">
                        Job Description
                      </h3>
                      <p className="text-gray-700 text-lg">{job.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#f37721] mb-2">
                        Responsibilities
                      </h3>
                      <ul className="p-4">
                        {job.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-lg items-start"
                          >
                            <VerifiedIcon className="text-[#5187af]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#f37721] mb-2">
                        Requirements
                      </h3>
                      <ul className="p-4">
                        {job.requirements.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-lg items-start"
                          >
                            <VerifiedIcon className="text-[#5187af]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="">
                      <h3 className="text-xl font-bold text-[#f37721]">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2 p-4">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-[#5187af] text-white px-3 py-1.5 rounded-full text-base"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-bold text-[#f37721] mb-2">
                        Benefits
                      </h3>
                      <ul className="p-4">
                        {job.benefits.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-lg items-start"
                          >
                            <VerifiedIcon className="text-[#5187af]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" overflow-hidden md:hidden block mt-5">
            {healthcareJobs.map((item, index) => (
              <>
                <div
                  onClick={() => {
                    setActiveJobs(item.id);
                    window.scrollTo({
                      top: 350,
                      behavior: "smooth",
                    });
                  }}
                  key={index}
                  className={`${activeJob === item.id ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer my-2 rounded-2xl transition-all duration-300`}
                >
                  <span className="font-bold">{item.title}</span>{" "}
                  <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                    {activeJob === item.id ? (
                      <SouthIcon fontSize="small" />
                    ) : (
                      <NorthIcon fontSize="small" />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    item.id === activeJob
                      ? "h-auto opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="xl:col-span-8 col-span-7 font-manrope xl:ms-10">
                    {healthcareJobs
                      .filter((job) => job.id === activeJob)
                      .map((job) => (
                        <div
                          key={job.id}
                          className="bg-[#e5f4ff] rounded-2xl my-4 py-6 xl:px-10 px-4"
                        >
                          {/* Title */}
                          <h2 className="lg:text-2xl text-xl text-center font-bold capitalize pb-12">
                            {job.title}
                          </h2>

                          {/* Basic Info */}
                          <div className="grid sm:grid-cols-3 mb-6 text-lg">
                            <div>
                              {" "}
                              <p>
                                <LocationPinIcon
                                  className="text-[#f37721]"
                                  fontSize="small"
                                />{" "}
                                <strong> Location:</strong> {job.location}
                              </p>
                              <p className="mt-2">
                                <CategoryIcon
                                  className="text-[#f37721]"
                                  fontSize="small"
                                />{" "}
                                <strong> Type:</strong> {job.employmentType}
                              </p>
                            </div>
                            <div>
                            <p className="mt-2">
                                <AccessTimeFilledIcon
                                  className="text-[#f37721]"
                                  fontSize="small"
                                />{" "}
                                <strong> Experience:</strong> {job.experience}
                              </p>
                          <p className="mt-2">
                                <CurrencyRupeeIcon
                                  className="text-[#f37721]"
                                  fontSize="small"
                                />{" "}
                                <strong> Salary:</strong> {job.salaryRange}
                              </p>
                            </div>
                            <div className="mt-4">
                              {/* BUTTON */}
                              <button
                                onClick={() => {
                                  setApplyJob(true);
                                  setActive(3);
                                }}
                                className=" flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-[#f37721] duration-300 transition-all text-white hover:text-[#f37721] px-6 py-2 rounded-full w-fit gap-4 "
                              >
                                <span className="font-medium font-manrope text-[16px] capitalize">
                                  Apply
                                </span>
                                {/* Arrow Circle */}
                                <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-7 h-7 flex items-center justify-center text-lg">
                                  <EastIcon fontSize="small" />
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-[#f37721] mb-2">
                              Job Description
                            </h3>
                            <p className="text-gray-700 text-lg">
                              {job.description}
                            </p>
                          </div>

                          {/* Responsibilities */}
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-[#f37721] mb-2">
                              Responsibilities
                            </h3>
                            <ul className="p-2">
                              {job.responsibilities.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-lg items-start"
                                >
                                  <VerifiedIcon className="text-[#5187af]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-[#f37721] mb-2">
                              Requirements
                            </h3>
                            <ul className="p-2">
                              {job.requirements.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-lg items-start"
                                >
                                  <VerifiedIcon className="text-[#5187af]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div className="">
                            <h3 className="text-xl font-bold text-[#f37721]">
                              Skills
                            </h3>
                            <div className="flex flex-wrap gap-2 p-4">
                              {job.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-[#5187af] text-white px-3 py-1.5 rounded-full text-base"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h3 className="text-lg font-bold text-[#f37721] mb-2">
                              Benefits
                            </h3>
                            <ul className="p-2">
                              {job.benefits.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-lg items-start"
                                >
                                  <VerifiedIcon className="text-[#5187af]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
      {active === 2 && (
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 lg:mt-16 md:mt-10 mt-5 mx-auto">
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
      )}
    </div>
  );
};

export default CareerForms;

<div className="grid lg:grid-cols-2 xl:gap-16 gap-8 grid-cols-1 lg:mt-16 md:mt-10 mt-5 mx-auto">
  <div className="">
    <div className="bg-white rounded-[20px] p-3 sm:p-4 shadow">
      <img src={entry_jobs} alt="" className="rounded-[16px] " />
    </div>

    <div className="bg-[#c8dded] rounded-[20px] p-4 sm:p-6 mt-8 font-manrope">
      <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
        Internship Opportunities at Prachin Global Hospital
      </h3>

      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2f373e] mt-2">
        We at Prachin Global Hospital are inviting enthusiastic and motivated
        candidates to apply for internship opportunities across various
        departments. This internship is designed to provide hands-on experience
        in a professional healthcare environment and enhance practical skills.
      </p>
    </div>
  </div>
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
</div>;
