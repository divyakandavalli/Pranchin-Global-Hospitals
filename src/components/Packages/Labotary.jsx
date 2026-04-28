import React from "react";
const Labotary = () => {
  const feature = [
    "Pathology",
    "Microbiology",
    "Blochemistry",
    "Hematology",
    "Hepatalogy",
    "Serology",
  ];
  return (
    <div>
      <div className="xl:max-w-[80%] 3xl:max-w-[75%] w-[95%] mx-auto">
        <div className=" rounded-[24px]   py-10 relative  overflow-hidden">
          <div className="flex justify-center flex-col items-center">
            <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  text-center font-semibold leading-tight">
              Laboratory{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Services
              </span>
            </h2>
          </div>
          <div className=" grid-cols-1 gap-10 mt-14">
            {/* <div className="flex justify-center items-center">
            <img src={lab} alt="" />

            </div> */}
          
          <div className="grid md:grid-cols-3   lg:gap-6 gap-4 ">
            {feature.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center  bg-[#e8f1f8]  p-4 rounded-xl"
              >
                <p className="text-sm 3xl:text-[15px] uppercase font-manrope text-[#5187af] text-center font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labotary;
