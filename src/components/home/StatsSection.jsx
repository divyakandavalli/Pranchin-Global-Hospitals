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
    <div className="bg-[#094ca0] mx-4 md:mx-8 lg:mx-10 mt-10 md:mt-16 rounded-2xl">
      <section className="py-8 md:py-12 xl:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                px-4 py-6
                relative
                border-b border-white/30
                sm:border-b-0
                sm:border-r border-white/30
                lg:border-r
                ${index === stats.length - 1 ? "sm:border-r-0" : ""}
              `}
            >
              {/* Number */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-semibold font-manrope text-white flex justify-center items-center gap-1">
                <CountUp to={item.value} duration={2} />
                <span>+</span>
              </h2>

              {/* Label */}
              <p className="mt-2 md:mt-3 text-[#f5d1b9] text-sm sm:text-base md:text-lg font-manrope">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}