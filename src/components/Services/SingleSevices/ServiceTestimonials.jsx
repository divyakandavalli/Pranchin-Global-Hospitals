import React from "react";
import EastIcon from "@mui/icons-material/East";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
const testimonials = [
  {
    name: "David Smith",
    role: "Patient",
    rating: 5,
    text: "I was impressed with the modern facilities and friendly staff. They made me feel safe and confident throughout my treatment process.",
  },
  {
    name: "Laura Chen",
    role: "Patient",
    rating: 5,
    text: "The consultation was very detailed, and the doctor patiently answered all my questions. I felt truly cared for and respected as a patient.",
  },
  {
    name: "Robert Williams",
    role: "Patient",
    rating: 5,
    text: "From booking to treatment, everything was smooth and professional. The team genuinely prioritizes patient comfort and quality healthcare services.",
  },
  {
    name: "Laura Chen",
    role: "Patient",
    rating: 5,
    text: "The consultation was very detailed, and the doctor patiently answered all my questions. I felt truly cared for and respected as a patient.",
  },
  {
    name: "Robert Williams",
    role: "Patient",
    rating: 5,
    text: "From booking to treatment, everything was smooth and professional. The team genuinely prioritizes patient comfort and quality healthcare services.",
  },
  {
    name: "Laura Chen",
    role: "Patient",
    rating: 5,
    text: "The consultation was very detailed, and the doctor patiently answered all my questions. I felt truly cared for and respected as a patient.",
  },
  {
    name: "Robert Williams",
    role: "Patient",
    rating: 5,
    text: "From booking to treatment, everything was smooth and professional. The team genuinely prioritizes patient comfort and quality healthcare services.",
  },
];

export default function ServiceTestimonials() {
  return (
    <div className="max-w-[80%]  mx-auto pt-20">
      <div className="">
        {/* Top Section */}
        <div className="flex  justify-center items-center text-center">
          <div className="w-full ">
            <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px] text-[16px] uppercase">
              Happy Patients
            </span>

            <h2 className="text-[44px] font-manrope md:text-[64px] font-semibold mt-4 leading-tight">
              What Our Patients{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Say About Us
              </span>
            </h2>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 font-manrope">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#c8dded] rounded-[16px] p-6 shadow-sm h-full">
                  {/* Rating */}
                  <div className="mb-4">
                    <Rating
                      initialRating={item.rating}
                      readonly
                      emptySymbol={<FaStar className="text-gray-300 text-xl" />}
                      fullSymbol={<FaStar className="text-[#094ca0] text-xl" />}
                    />
                  </div>

                  <p className="text-gray-600 text-[16px] leading-relaxed min-h-[100px]">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 32}`}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[21px]">{item.name}</h4>
                      <p className="text-[16px] text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
