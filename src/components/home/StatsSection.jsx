// src/components/home/StatsSection.jsx

import CountUp from "./CountUp";

export default function StatsSection() {
  const stats = [
    { value: 25, label: "Years Experience" },
    { value: 100, label: "Patients Treated" },
    { value: 50, label: "Expert Doctors" },
    { value: 200, label: "Successful Surgeries" },
  ];

  return (
    <section className=" xl:py-20 md:pt-10 pt-5">
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`px-6 relative xl:border-l border-gray-300 
      ${index === stats.length - 1 ? "xl:border-r border-gray-300" : ""}
    `}
          >
            {/* Number */}
            <h2 className="text-[64px] font-semibold font-manrope text-[#094ca0] flex justify-center items-center gap-1">
              <CountUp to={item.value} duration={2} />
              <span className="text-[#afd7f5]">+</span>
            </h2>

            {/* Label */}
            <p className="mt-3 text-gray-500 text-[18px] font-manrope">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
