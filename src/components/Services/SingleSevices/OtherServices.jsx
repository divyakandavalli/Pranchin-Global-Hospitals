import React from "react";
import SPECIALITIES from "../../../specialities/specialities";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export default function OtherServices() {
  const navigate = useNavigate();

  // ✅ Show ALL services
  const services = SPECIALITIES.slice(0, 8);

  return (
    <section className="py-10 px-4 md:px-10 bg-gray-50 ">
      <div className="max-w-[95%] mx-auto ">
        <div className="bg-[#c8dded] rounded-[24px] py-10 px-4 sm:px-6 md:px-10 relative overflow-hidden">
          {/* Decoration */}
          <div className="hidden md:block absolute -right-[310px] -top-[653px] pointer-events-none">
            <img
              src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Decorations.png"
              alt=""
            />
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ">
            <div>
              <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 sm:px-4 py-1 rounded-full tracking-[2px] sm:tracking-[3px] text-[12px] md:text-[14px]  uppercase">
                our services
              </span>

              <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  font-semibold mt-4 leading-tight">
                Comprehensive Care <br />
                for{" "}
                <span className="italic font-light font-instrumental text-[#5187af]">
                  Every Need
                </span>
              </h2>
            </div>

            <div>
              <Link
                to="/specialities"
                className="group mt-2 lg:mt-8 flex items-center justify-between bg-[#094ca0] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition"
              >
                <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize">
                  View all services
                </span>

                <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]">
                  <EastIcon fontSize="small" />
                </span>
              </Link>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 ">
            {services.map((service) => (
              <div
                key={service.slug}
                onClick={() => navigate(`/specialities/${service.slug}`)}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-1 w-full h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl text-[#094ca0] mb-4">
                  {typeof service.icon === "string" ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    service.icon
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 font-manrope text-[#094ca0]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] 3xl:text-[15px] text-gray-600 font-manrope leading-relaxed">
                  {service.shortdesc ||
                    "Expert care with advanced medical facilities and experienced doctors."}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center items-center text-center mt-5">
            <Link
              to="/specialities"
              className="group flex items-center justify-between bg-[#094ca0] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition"
            >
              <span className="font-medium font-manrope text-[14px] 3xl:text-[15px] capitalize">
                View all services
              </span>

              <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]">
                <EastIcon fontSize="small" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}