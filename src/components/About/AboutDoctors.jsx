import React from "react";
import about_dr_1 from "../../assets/images/portrait-handsome-young-indian-doctor-standing-with-arms-crossed-medical-clinic-smiling-camera.jpg";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const AboutDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 2,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 3,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 4,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 5,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 6,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      degree: "MBBS, MD (Cardiology)",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
  ];
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

        <div className="grid xl:grid-cols-6 md:grid-cols-2  grid-cols-1 lg:gap-12 gap-6 mx-auto mt-5">
          {doctors.map((value, index) => (
            <div
              key={index * 1}
              className=" bg-white flex min-h-[300px] items-start justify-center flex-col rounded-3xl relative"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Link
                to="/doctors-profile"
                className="w-[260px] flex flex-row h-full justify-center  items-end self-center z-10 relative"
              >
                <div className="max-w-full bg-[#FEFEFF] pt-3 px-3 rounded-t-3xl">
                  <div className="text-center">
                    <h3 className="font-semibold font-manrope  text-[16px] md:text-[21px] text-[#5187af]">
                      {value.name}
                    </h3>
                    <p className=" text-[#4D6E76] font-normal text-base font-manrope">
                      {value.dignity}
                    </p>
                    <p className=" text-[#4D6E76] font-normal text-sm font-manrope">
                      {value.degree}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[4px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
                  <div className=" w-[32px] h-full self-start shrink-0">
                    <div className="h-[32px]"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-[4px] w-[32px] h-[32px] flex flex-col rounded-bl-[16px] shadow-[-8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
                  <div className=" w-[32px] h-full self-start shrink-0">
                    <div className="h-[32px]"></div>
                  </div>
                </div>
              </Link>
            </div>
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
