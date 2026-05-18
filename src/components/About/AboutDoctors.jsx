import React from "react";
import about_dr_1 from "../../assets/images/Doctor.jpg";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { doctors } from "../../doctorsData/Doctors";
const AboutDoctors = () => {
  // const doctors = [
  //   {
  //     id: 1,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  //   {
  //     id: 2,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  //   {
  //     id: 3,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  //   {
  //     id: 4,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  //   {
  //     id: 5,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  //   {
  //     id: 6,
  //     name: "Dr Alina Carter",
  //     dignity: "Cardiologist Specialist",
  //     degree: "MBBS, MD (Cardiology)",
  //     twitter: "",
  //     linkedin: "",
  //     instagram: "",
  //     image: about_dr_1,
  //   },
  // ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto mt-10">
      <div className=" md:px-10 px-5 relative  overflow-hidden">
        <div className="flex xl:justify-center flex-col xl:items-center justify-start items-start">
          <span className="border  border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px] text-[14px] text-left xl:text-center uppercase">
            Our Clinical Experts
          </span>
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope mt-5  font-semibold  leading-tight text-black">
            Consult Professional{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Doctors & Specialists
            </span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6 mx-auto mt-5 items-stretch">
          {doctors.slice(0, 6).map((value, index) => (
            <Link
              key={index}
              to={`/doctors-profile/${value.id}`}
              className="flex flex-col h-full group"
            >
              {/* Image */}
              <div className="rounded-t-[32px] overflow-hidden ">
                <img
                  src={value.image}
                  alt={value.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white border border-[#e8e8e8] rounded-b-[32px] px-4 py-4 h-[150px] flex flex-col justify-center items-center text-center">
                <h3 className="font-semibold font-manrope text-[16px] text-[#5187af] line-clamp-2">
                  {value.name}
                </h3>

                <p className="text-[#4D6E76] font-normal text-[12px] font-manrope mt-2 line-clamp-3">
                  {value.dignity}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="my-10 flex justify-center items-center">
          <Link
            to="/doctors"
            className="group  flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition"
          >
            <span className="font-medium font-manrope text-[14px] 3xl:text-[15px] capitalize">
              View More
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
    </div>
  );
};

export default AboutDoctors;
