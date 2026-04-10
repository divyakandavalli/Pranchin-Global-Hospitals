import React from "react";
import SPECIALITIES from "../../specialities/specialities";
import { useNavigate } from "react-router-dom";

export default function OurSevicesList() {
  const navigate = useNavigate();

  // ✅ Show ALL services
  const services = SPECIALITIES;

  return (
    <section className="py-10 px-4 md:px-10">
      <div className="max-w-[95%] mx-auto">
        <div className="py-10 px-4 sm:px-6 md:px-10 relative overflow-hidden">
          
          {/* Decoration */}
          <div className="hidden md:block absolute -right-[310px] -top-[653px] pointer-events-none">
            <img
              src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Decorations.png"
              alt=""
            />
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 sm:px-4 py-1 rounded-full tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[14px] md:text-[16px] uppercase">
                our services
              </span>

              <h2 className="text-4xl md:text-[44px] font-manrope 3xl:text-[64px] font-semibold mt-4 leading-tight">
                Comprehensive Care <br />
                for{" "}
                <span className="italic font-light font-instrumental text-[#5187af]">
                  Every Need
                </span>
              </h2>
            </div>
          </div>

          {/* NEW SERVICES GRID - Updated Card Design */}
          <div className="grid xl:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 mx-auto mt-12 lg:mx-8">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/specialities/${item.slug}`)}
                className="p-8 bg-[#C8DDED] flex items-start justify-center flex-col rounded-3xl relative cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <h2 className="text-[21px] font-manrope font-semibold mb-1 text-[#094ca0]">
                  {item.title}
                </h2>
                
                <p className="w-10/12 text-[#66686C] font-normal text-base font-manrope leading-relaxed">
                  {item.desc || item.shortdesc || 
                    "Expert care with advanced medical facilities and experienced doctors."}
                </p>

                {/* Decorative Image Container */}
                <div className="w-20 absolute flex rounded-tl-3xl pt-[10px] font-manrope bg-[#ffffff] bottom-0 right-0 justify-end items-end">
                  <img 
                    src={item.img || item.icon} 
                    className="w-16 h-16 object-contain" 
                    alt={item.title} 
                  />
                  
                  {/* Decorative shadow elements */}
                  <div className="absolute -left-8 bottom-0 w-8 flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-[33px] right-0 w-[33px] flex rounded-[0px_0px_16px_0] shadow-[8px_8px_0px_0px_#FFFFFF]">
                    <div className="w-8">
                      <div className="h-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}