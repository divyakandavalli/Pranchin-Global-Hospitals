import React from "react";
import EastIcon from '@mui/icons-material/East';
const services = [
  {
    title: "General Consultation",
    desc: "Get expert medical advice, your health needs by experienced.",
    img: "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Services-RGE28LF.jpg",
  },
  {
    title: "Specialized Treatment",
    desc: "Get expert medical advice, your health needs by experienced.",
    img: "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Services-RGE28LF.jpg",
  },
  {
    title: "Emergency Care",
    desc: "Get expert medical advice, your health needs by experienced.",
    img: "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Services-RGE28LF.jpg",
  },
  {
    title: "Diagnostics",
    desc: "Get expert medical advice, your health needs by experienced.",
    img: "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Services-RGE28LF.jpg",
  },
];

export default function HomeServices() {
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] mx-auto">
      <div className="bg-[#F4F5F9] rounded-[24px] py-36 px-10 relative  overflow-hidden">
        <div className="absolute -right-[310px] -top-[653px] max-w-full">
          <img src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Decorations.png" alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
              our services
            </span>
            <h2 className="text-4xl font-manrope md:text-[64px] font-semibold mt-4 leading-tight">
              Comprehensive Care <br />
              for{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Every Need
              </span>
            </h2>
          </div>
          <div>
            <button className="mt-8 flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 hover:bg-[#3f5955] transition">
              <span className="font-medium font-manrope text-[16px] capitalize">
                View all services
              </span>

              {/* Arrow Circle */}
              <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                <EastIcon fontSize="small" />
              </span>
            </button>
          </div>
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {services.map((item, index) => (
            <div
  key={index}
  className="flex flex-col min-h-[450px] justify-between rounded-[16px] w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${item.img})` }}
>
              <div className="bg-[#F4F5F9] w-[94px] min-h-[84px] rounded-bl-[48px] flex flex-row justify-end items-start self-end p-0 relative">
                {/* Arrow Button */}
                <div className="max-w-full -rotate-[45deg]">
                  <div className="leading-none">
                    <div className="bg-[#DDEADB] text-[#4D6E76] rounded-full text-[36px] ml-[20px] w-20 h-20 flex items-center justify-center ">
                      <EastIcon className="text-[#4D6E76]" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -left-[32px] w-[32px] h-[32px] flex flex-col rounded-tr-[16px] shadow-[8px_-4px_0_0_#F4F5F9] p-0">
                  <div className="max-w-full w-[32px] self-end shrink-0">
                    <div className="h-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-[32px] right-[0px] w-[32px] h-[32px] flex flex-col rounded-tr-[16px] shadow-[8px_-4px_0_0_#F4F5F9] p-0">
                  <div className="max-w-full w-[32px] self-end shrink-0">
                    <div className="h-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F4F5F9] w-[350px]  flex flex-row justify-end gap-4 border-t-[12px] border-r-[12px] border-t-[#F4F5F9] border-r-[#F4F5F9] rounded-tr-[16px] self-stretch p-0 m-0 relative">
                <div className="bg-[#FFFFFF] w-[340px] flex gap-4 border-0 rounded-[12px] m-0 transition duration-500 p-[16px]">
                  <div className="max-w-full">
                    <div className="text-left">
                      <div className=" rounded-none w-full">
                        <h6 className="mb-[4px] font-manrope text-[21px] font-semibold leading-[36px] text-[#00040B]">
                          {item.title}
                        </h6>
                        <p className="text-[16px] font-manrope font-normal leading-[26px] text-[#66686C]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-[44px] left-0 w-[32px] h-[32px] flex rounded-bl-[16px] shadow-[-8px_4px_0_0_#F4F5F9] p-0">
                  <div className="max-w-full w-[32px] self-end shrink-0">
                    <div className="h-full"></div>
                  </div>
                </div>
                <div className="absolute -right-[44px] bottom-0 w-[32px] h-[32px] flex rounded-bl-[16px] shadow-[-8px_4px_0_0_#F4F5F9] p-0">
                  <div className="max-w-full w-[32px] self-end shrink-0">
                    <div className="h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
