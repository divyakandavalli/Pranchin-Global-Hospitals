import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "David Smith",
    role: "Patient",
    text: "I was impressed with the modern facilities and friendly staff. They made me feel safe and confident throughout my treatment process.",
  },
  {
    name: "Laura Chen",
    role: "Patient",
    text: "The consultation was very detailed, and the doctor patiently answered all my questions. I felt truly cared for and respected as a patient.",
  },
  {
    name: "Robert Williams",
    role: "Patient",
    text: "From booking to treatment, everything was smooth and professional. The team genuinely prioritizes patient comfort and quality healthcare services.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft += 1;

      // Infinite loop
      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#E6EFE7] rounded-[24px] p-10 overflow-hidden">
      {/* TOP SECTION */}
      <div className="flex gap-10">
        {/* LEFT */}
        <div className="w-[45%]">
          <span className="border px-4 py-1 rounded-full text-sm">
            HAPPY PATIENTS
          </span>

          <h2 className="text-5xl font-semibold mt-4">
            What Our Patients
          </h2>

          <h3 className="text-5xl italic text-gray-500">
            Say About Us
          </h3>

          <p className="text-gray-600 mt-4">
            Dedicated to providing expert healthcare advanced technology,
            experienced professionals, and personalized treatments to ensure
            your well-being and a healthier future.
          </p>

          <button className="mt-6 bg-[#2F4F4F] text-white px-6 py-3 rounded-full flex items-center gap-2">
            View All Testimonials →
          </button>
        </div>

        {/* RIGHT FEATURE CARD */}
        <div className="w-[55%] bg-white rounded-[20px] p-6 flex justify-between items-center">
          <div className="w-[65%]">
            ⭐⭐⭐⭐⭐
            <p className="text-gray-600 mt-3">
              The doctors were caring and professional. The staff made me feel
              comfortable, and the doctors explained everything in detail.
            </p>

            <h4 className="mt-6 font-semibold">Heller Keano</h4>
            <span className="text-sm text-gray-500">Patient Parent</span>
          </div>

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-[140px] h-[140px] rounded-[16px] object-cover"
          />
        </div>
      </div>

      {/* AUTO SCROLL CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-6 mt-10 overflow-x-hidden"
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] bg-white rounded-[16px] p-5"
          >
            ⭐⭐⭐⭐⭐
            <p className="text-gray-600 mt-3 text-sm">{item.text}</p>

            <div className="flex items-center gap-3 mt-5">
              <img
                src={`https://i.pravatar.cc/40?img=${index}`}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}