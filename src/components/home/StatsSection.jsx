// src/components/home/StatsSection.jsx

import CountUp from "./CountUp";

export default function StatsSection() {
  const stats = [
    { value: 25, label: "Happy Patients" },
    { value: 100, label: "Patients Treated" },
    { value: 50, label: "Expert Doctors" },
    { value: 200, label: "Successful Surgeries" },
  ];

  return (
    <div className="bg-[#094ca0] px-10 mt-16 rounded-2xl">
      <section className=" xl:py-20 md:pt-10 pt-5 md:pb-0 pb-10">
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`px-6 relative xl:border-l border-white 
      ${index === stats.length - 1 ? "xl:border-r border-white" : ""}
    `}
          >
            {/* Number */}
            <h2 className="text-[64px] font-semibold font-manrope text-white flex justify-center items-center gap-1">
              <CountUp to={item.value} duration={2} />
              <span className="text-white">+</span>
            </h2>

            {/* Label */}
            <p className="mt-3 text-[#f5d1b9] text-[18px] font-manrope">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
