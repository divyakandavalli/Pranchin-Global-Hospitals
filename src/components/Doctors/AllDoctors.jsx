import React from "react";
import about_dr_1 from "../../assets/images/portrait-handsome-young-indian-doctor-standing-with-arms-crossed-medical-clinic-smiling-camera.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const AllDoctors = () => {
  const social = [
    {
      id: 1,
      name: "Twitter",
      icon: TwitterIcon,
      link: "",
    },
    {
      id: 2,
      name: "facebook",
      icon: FacebookOutlinedIcon,
      link: "",
    },
    {
      id: 3,
      name: "Linkedin",
      icon: LinkedInIcon,
      link: "",
    },
  ];

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
      <div className=" py-20 md:px-10 px-5 relative  overflow-hidden">
        <div className="flex justify-center flex-col items-center">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
            Expert Doctor
          </span>
          <h2 className="text-4xl font-manrope md:text-[64px] text-center font-semibold mt-4 leading-tight">
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
              <div className="w-[260px] flex flex-row h-full justify-center  items-end self-center z-10 relative">
                <div className="max-w-full bg-[#FEFEFF] pt-3 px-3 rounded-t-3xl">
                  <div className="text-center">
                    <h3 className="text-[21px] font-manrope font-semibold mb-0.5">
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
              </div>

              <div className="w-14  absolute flex pt-[10px] font-manrope bg-[#ffffff] top-0 left-0 rounded-br-xl  justify-center items-center">
                <div className="flex flex-col gap-2 z-10 pb-2">
                  {social.map((item, index) => (
                    <a
                      key={item.id + index}
                      href={item.link}
                      className="p-2 rounded-full bg-[#C8DDED] hover:bg-[#094ca0] flex justify-center items-center hover:text-white transition"
                    >
                      <item.icon fontSize="small" />
                    </a>
                  ))}
                </div>{" "}
                <div className="absolute left-0 -bottom-8 w-8 flex rounded-[12px_0px_0px_0px] shadow-[-8px_-4px_0px_0px_#FEFEFF]">
                  <div className="w-8">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -right-8 w-8 flex rounded-[12px_0px_0px_0px] shadow-[-8px_-4px_0px_0px_#fff]">
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
      </div>
    </div>
  );
};

export default AllDoctors;
