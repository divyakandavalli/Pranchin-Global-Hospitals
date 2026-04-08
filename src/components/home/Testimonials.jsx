import React from "react";
import EastIcon from "@mui/icons-material/East";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HappyFace from "../../assets/images/happy.jpg";
import "swiper/css";
import { Link } from "react-router-dom";
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

export default function Testimonials() {
  return (
    <div className="max-w-[97%] 3xl:max-w-[95%] mx-auto ">
      <div className="bg-[#c8dded] rounded-[24px] py-20 px-8 md:px-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side */}
          <div className="w-full lg:w-[45%]">
            <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[12px] sm:text-[14px] md:text-[16px] text-center uppercase">
              Happy Patients
            </span>

            <h2 className="text-4xl md:text-[44px] font-manrope 3xl:text-[64px]  font-semibold mt-4 leading-tight text-black">
              What Our Patients{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Say About Us
              </span>
            </h2>

            <p className="text-[#2f373e] text-[14px] md:text-[16px] 3xl:text-[18px] text-left  xl:w-auto max-w-2xl font-manrope mt-4">
              Dedicated to providing expert healthcare advanced technology,
              experienced professionals, and personalized treatments to ensure
              your well-being and a healthier future.
            </p>
            <Link to='/contact' className="group mt-8 flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition">
              <span className="font-medium font-manrope text-[16px] capitalize">
                Book Appointment
              </span>

              {/* Arrow Circle */}
              <span
                className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
              >
                <EastIcon fontSize="small" />
              </span>
            </Link>
          </div>

          {/* Featured Card */}
          <div className="w-full lg:w-[55%] bg-white rounded-[20px] overflow-hidden flex flex-col sm:flex-row font-manrope">
            {/* Left Content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              {/* Rating */}
              <div className="mb-4">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<FaStar className="text-gray-300 text-xl" />}
                  fullSymbol={<FaStar className="text-[#094ca0] text-xl" />}
                />
              </div>

              <p className="text-gray-600 leading-relaxed text-[14px] md:text-[16px]">
                The doctors were caring and professional. The staff made me feel
                comfortable, and the doctors explained everything in detail
                treatment plan was clear, and I felt supported every step of
                highly recommended!
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-[16px] md:text-[21px] text-[#5187af]">
                  Heller Keano
                </h4>
                <span className="text-[14px] md:text-[16px] text-[#64748b]">
                  Patient Parent
                </span>
              </div>
            </div>

            {/* Right Image FULL */}
            <div className="sm:w-[45%] h-[320px] sm:h-auto">
              <img
                src={HappyFace}
                alt="Heller Keano"
                className="w-full h-full object-cover"
              />
            </div>
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
             className="[&_.swiper-wrapper]:items-stretch"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="bg-white rounded-[16px] p-6 shadow-sm flex flex-col justify-between w-full h-full min-h-[280px] sm:min-h-0">
                  {/* Rating */}
                  <div className="mb-4">
                    <Rating
                      initialRating={item.rating}
                      readonly
                      emptySymbol={<FaStar className="text-gray-300 text-xl" />}
                      fullSymbol={<FaStar className="text-[#094ca0] text-xl" />}
                    />
                  </div>

                  <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed min-h-[100px] font-manrope">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-8 font-manrope">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 32}`}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[16px] md:text-[21px]">{item.name}</h4>
                      <p className="text-[14px] md:text-[16px] text-gray-500">{item.role}</p>
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
