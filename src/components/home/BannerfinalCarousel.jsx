import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Sample banner images (replace with your images)
import Desktopbanner1 from "../../assets/images/Home page headers-01.jpg";
import Mobilebanner1 from "../../assets/images/Home Page Header mobilescreen-02.jpg";
import Desktopbanner2 from "../../assets/images/Home page headers-02.jpg";
import Mobilebanner2 from "../../assets/images/Home Page Header mobilescreen-03.jpg";

export default function BannerfinalCarousel() {
  return (
    <div className="w-full bannercarousel">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full h-auto"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="block xl:hidden">
              <img
                src={Mobilebanner1}
                alt="banner1"
                className=" w-full h-auto object-cover"
              />
            </div>

            <div className="hidden xl:block">
              <img
                src={Desktopbanner1}
                alt="banner1"
                className=" w-full h-auto object-cover"
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-start xl:items-center pt-20 xl:pt-0">
              <div className="w-full xl:max-w-[1200px] 3xl:max-w-[1440px] mx-auto px-6 md:px-5">
                <div className="w-full xl:max-w-[850px] text-center xl:text-left">
                  <h2
                    className="font-manrope font-bold text-white mb-3
        text-[38px] lg:text-[52px] 3xl:text-[62px]
        leading-tight tracking-[2px] capitalize"
                  >
                    2.0 Acre Spacious
                  </h2>

                  <h2
                    className="italic font-light font-instrumental text-[#f5d1b9] mb-3
        text-[38px] lg:text-[52px] 3xl:text-[82px]
        leading-tight tracking-[2px] capitalize"
                  >
                    State of Art
                  </h2>

                  <h2
                    className="font-manrope font-medium text-white
        text-[38px] lg:text-[52px] 3xl:text-[62px]
        leading-tight tracking-[2px] capitalize"
                  >
                    Healthcare Facility
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
           <div className="block xl:hidden">
              <img
                src={Mobilebanner2}
                alt="banner1"
                className=" w-full h-auto object-cover"
              />
            </div>

            <div className="hidden xl:block">
              <img
                src={Desktopbanner2}
                alt="banner1"
                className=" w-full h-auto object-cover"
              />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
