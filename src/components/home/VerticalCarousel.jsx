import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

const VerticalCarousel = ({ slides = [], setOpenVideo }) => {
  return (
    // ✅ IMPORTANT: Give Swiper a fixed height (prevents white space bug)
    <div className="w-full overflow-hidden h-[75vh] sm:h-[80vh] lg:h-[90vh] 2xl:h-screen">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Mousewheel]}
        className="h-full myVerticalSwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            {/* ✅ FULL HEIGHT SLIDE */}
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={item}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0030af36]"></div>

              {/* 🔥 Glass Content */}
              <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-white">
                <div
                  className="max-w-full xl:max-w-[70%] 2xl:max-w-[60%] 3xl:max-w-[40%] 
                  bg-[#cdd5f726] backdrop-blur-lg border border-white/10 
                  rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl"
                >
                  {/* Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className="bg-white/20 tracking-wider font-manrope uppercase text-[12px] sm:text-[14px] md:text-[16px] px-3 sm:px-4 py-1 rounded-full backdrop-blur-md">
                      TRUSTED HEALTHCARE
                    </span>
                  </div>

                 <h1
            className="font-manrope font-semibold mb-4 sm:mb-6 
           text-4xl md:text-6xl lg:text-7xl
            leading-tight md:leading-[1.1] tracking-[1px] sm:tracking-[2px] md:tracking-[3px]"
          >
            Your Trusted <br />
            Partner{" "}
            <span className="italic font-light font-instrumental text-[#f5d1b9]">
              Health
            </span>{" "}
            <br />
            and{" "}
            <span className="italic font-light font-instrumental text-[#f5d1b9]">
              Wellness
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-5 sm:mb-6  font-manrope">
            Get expert medical care with trusted professionals, advanced
            technology, and to ensure your well-being and a future.
          </p>

          {/* Buttons */}
          <div className="flex flex-row  items-center gap-3 sm:gap-4">
            <Link to='/contact' className="group flex items-center justify-between bg-[#094ca0] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition">
              <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize">
                Book Appointment
              </span>

              <span
                className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition 
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
              >
                <EastIcon fontSize="small" />
              </span>
            </Link>

            <button
              className="flex items-center gap-2 text-sm sm:text-base text-white/90 hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              ▶ Watch Now
            </button>
          </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalCarousel;
