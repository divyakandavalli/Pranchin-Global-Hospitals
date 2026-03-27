import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "swiper/css";
import "swiper/css/effect-fade";

export default function BannerCarousel() {
  const slides = [
    "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Hero-L6ZFCLF.jpg",
    "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Hero-EXLJEDQ.jpg",
    "https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Hero-JBBBGEL.jpg",
  ];

  return (
    <div className="relative max-w-[80%] mx-auto h-[880px] overflow-hidden rounded-2xl mt-5">

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

              {/* Zoom IN Effect */}
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat animate-zoomIn"
                style={{ backgroundImage: `url(${img})` }}
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT DARK GRADIENT (IMPORTANT CHANGE) */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,_rgba(1,8,19,0.77)_0%,_rgba(1,8,19,0.38)_30%,_rgba(1,8,19,0)_55%,_rgba(1,8,19,0)_75%,_rgba(1,8,19,0)_100%)]"></div>

      {/* Soft blur overlay */}
      <div className="absolute inset-0 z-20 "></div>

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center px-10 md:px-12 text-white">
        <div className="">

          {/* Badge */}
          <div className="mb-4">
            <span className="bg-white/20 tracking-wider font-manrope uppercase text-[16px] px-4 py-1 rounded-full backdrop-blur-md">
              TRUSTED HEALTHCARE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-8xl font-manrope font-semibold mb-6 leading-[106px] tracking-[3px] ">
            Your Trusted <br />
            Partner <span className="italic font-light font-instrumental text-[#f5d1b9]">Health</span> <br />
            and <span className="italic font-light font-instrumental text-[#f5d1b9]">Wellness</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 mb-6 w-[60%] font-manrope">
            Get expert medical care with trusted professionals, advanced
            technology, and to ensure your well-being and a future.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* <button className="bg-[#f37721] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition">
              Book Appointment →
            </button> */}
            <button className=" flex items-center justify-between bg-[#f37721] text-white px-6 py-3 rounded-full w-fit gap-4 hover:bg-[#3f5955] transition">

              <span className="font-medium font-manrope text-[16px] capitalize">More About Us</span>

              {/* Arrow Circle */}
              <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                <ArrowForwardIcon fontSize="small" />
              </span>

            </button>
            <button className="flex items-center gap-2 text-white/90 hover:text-white">
              ▶ Watch Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
