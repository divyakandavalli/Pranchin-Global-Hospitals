// src/components/home/StatsSection.jsx

import CountUp from "./CountUp";

export default function StatsSection() {
  const stats = [
    { value: 25, label: "Happy Patients" },
    { value: 100, label: "Patients Treated" },
    { value: 40, label: "Expert Doctors" },
    { value: 30, label: "Successful Surgeries" },
  ];

  return (
    <div className="bg-[#094ca0] mx-4  rounded-2xl">
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                px-4 py-6
                relative
                border-b border-white/30
                sm:border-b-0
                sm:border-r
                lg:border-r
                ${index === stats.length - 1 ? "sm:border-r-0" : ""}
              `}
            >
              {/* Number */}
              <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-semibold font-manrope text-white flex justify-center items-center gap-1">
                <CountUp to={item.value} duration={2} />
                <span>+</span>
              </h2>

              {/* Label */}
              <p className="mt-2 md:mt-3 text-[#f5d1b9] text-[14px] 3xl:text-[15px] font-manrope">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}