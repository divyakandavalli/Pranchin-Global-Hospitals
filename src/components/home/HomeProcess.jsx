import React from "react";
import DocVideo from "../../assets/videos/Prachin global Hospital video 0.1.mp4";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
export default function HomeProcess() {


  return (
   <div className="w-full xl:max-w-[95%] 3xl:max-w-[85%] mx-auto px-6 md:px-10 xl:px-20">
      {/* Heading */}
   
  <div className="w-full flex min-h-[300px] md:min-h-[400px] xl:min-h-[80vh] justify-end rounded-[24px] flex-col relative overflow-hidden">
        <video
          key={DocVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={DocVideo} type="video/mp4" />
        </video>
        <div className="w-[250px] flex flex-row h-full justify-center  items-center self-center z-10 relative">
          <div className="max-w-full bg-[#FEFEFF] pt-3 px-3 rounded-t-[32px]">
            <div className="text-center">
              <Link
                to="/contact"
                className="group bg-[#094ca0] pl-4 pr-2 py-2 font-manrope text-[16px] font-medium leading-[26px] text-white rounded-full inline-flex items-center gap-3 whitespace-nowrap border border-[#094ca0] transition-all duration-300 hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721]"
              >
                Contact Us
                <span
                  className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                >
                  <EastIcon fontSize="small" />
                </span>
              </Link>
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
      </div>
    </div>
  );
}
