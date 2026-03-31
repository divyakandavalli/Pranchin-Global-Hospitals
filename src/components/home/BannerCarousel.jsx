import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import EastIcon from "@mui/icons-material/East";
import "swiper/css";
import "swiper/css/effect-fade";

import Carousel1 from '../../assets/images/team-surgeons-doing-operation-sterile-operating-room.jpg'
import Carousel2 from '../../assets/images/three-surgeons-hospital-room-one-which-is-being-prepared-perform-surgery.jpg'
import Carousel3 from '../../assets/images/medical-team-operation-room.jpg'

export default function BannerCarousel() {
  const slides = [Carousel1, Carousel2, Carousel3];

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] xl:h-[780px] 3xl:h-[880px] overflow-hidden mt-5">

      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        loop={true}
        effect="fade"
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat animate-zoomIn"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,_rgba(1,8,19,0.85)_0%,_rgba(1,8,19,0.6)_35%,_rgba(1,8,19,0)_70%)]"></div>

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center px-5 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-white">
        <div className="max-w-[100%] md:max-w-[70%] lg:max-w-[60%]">

          {/* Badge */}
          <div className="mb-3 sm:mb-4">
            <span className="bg-white/20 tracking-wider font-manrope uppercase text-[12px] sm:text-[14px] md:text-[16px] px-3 sm:px-4 py-1 rounded-full backdrop-blur-md">
              TRUSTED HEALTHCARE
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-manrope font-semibold mb-4 sm:mb-6 
            text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
            leading-tight md:leading-[1.1] tracking-[1px] sm:tracking-[2px] md:tracking-[3px]">

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
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-5 sm:mb-6 w-full md:w-[90%] lg:w-[80%] xl:w-[60%] font-manrope">
            Get expert medical care with trusted professionals, advanced
            technology, and to ensure your well-being and a future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">

            <button className="group flex items-center justify-between bg-[#f37721] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 hover:bg-[#094ca0] transition">

              <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize">
                Book Appointment
              </span>

              <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition 
                group-hover:bg-[#E5F4FF] group-hover:text-[#094ca0]">

                <EastIcon fontSize="small" />
              </span>

            </button>

            <button className="flex items-center gap-2 text-sm sm:text-base text-white/90 hover:text-white">
              ▶ Watch Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}