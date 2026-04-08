import React from "react";
import about_dr_1 from "../../assets/images/portrait-handsome-young-indian-doctor-standing-with-arms-crossed-medical-clinic-smiling-camera.jpg";
import { Link } from "react-router-dom";
const AboutDoctors = () => {
 

  const doctors = [
    {
      id: 1,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 1,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 1,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
    {
      id: 1,
      name: "Dr Alina Carter",
      dignity: "Cardiologist Specialist",
      twitter: "",
      linkedin: "",
      instagram: "",
      image: about_dr_1,
    },
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto">
      <div className=" 2xl:pt-0  2xl:pb-0 py-10 md:px-10 px-5 relative  overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <span className="border  border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[12px] sm:text-[14px] md:text-[16px] text-center uppercase">
            Expert Doctor
          </span>
          <h2 className="text-4xl md:text-[44px] font-manrope 3xl:text-[64px]  font-semibold mt-4 leading-tight text-black">
            Meet Professional{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Doctors & Specialists
            </span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 lg:gap-12 gap-6 mx-auto mt-12 lg:mx-8">
          {doctors.map((value, index) => (
            <div key={index*1}
              className=" bg-white flex min-h-[400px] items-start justify-center flex-col rounded-3xl relative"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Link to='/doctors-profile' className="w-[260px] flex flex-row h-full justify-center  items-end self-center z-10 relative">
                <div className="max-w-full bg-[#FEFEFF] pt-3 px-3 rounded-t-3xl">
                  <div className="text-center">
                    <h3 className="font-semibold font-manrope  text-[16px] md:text-[21px] text-[#5187af]">
                      {value.name}
                    </h3>
                    <p className=" text-[#4D6E76] font-normal text-base font-manrope">
                      {value.dignity}
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
      </div>
    </div>
  );
};

export default AboutDoctors;
