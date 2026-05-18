import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import RoundTheClock from "../For_Patients/RoundTheClock";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { doctors } from "../../doctorsData/Doctors";
const AllDoctors = () => {
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] w-[95%] mx-auto my-10">
      <div className="md:px-10 px-5 relative overflow-hidden">
        {/* Heading */}
        <div className="flex xl:justify-center flex-col xl:items-center justify-start items-start">
          <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px] text-[14px] uppercase">
            Our Clinical Experts
          </span>

          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope mt-5 font-semibold leading-tight text-black">
            Consult Professional{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              Doctors & Specialists
            </span>
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-10">
          {doctors.map((value, index) => (
            <Link
              to={`/doctors-profile/${value.id}`}
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e5e7eb] flex items-center h-[200px] hover:shadow-md transition-all duration-300 relative"
            >
              {/* Arrow Icon */}
              <div className="absolute top-3 right-3 text-[#9ca3af] text-[14px]">
                <ArrowOutwardIcon className="text-[#094ca0]" />
              </div>

              {/* Doctor Image */}
              <div
                className="w-[38%] h-full"
                style={{
                  backgroundImage: `url(${value.image})`,
                  backgroundPosition: "center top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Content */}
              <div className="w-[62%] px-3 py-3 font-manrope flex flex-col justify-center">
                <h3 className="font-semibold text-[15px] leading-[1.3] text-[#094ca0] capitalize line-clamp-2">
                  {value.name.toLowerCase()}
                </h3>

                <p className="text-[#5187af] font-medium text-[14px] leading-[1.4] mt-1 capitalize line-clamp-3">
                  {value.dignity.toLowerCase()}
                </p>

                <p className="text-[#7b8794] font-normal text-[13px] leading-[1.5] mt-1 line-clamp-2">
                  {value.degree}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <RoundTheClock />
    </div>
  );
};

export default AllDoctors;
