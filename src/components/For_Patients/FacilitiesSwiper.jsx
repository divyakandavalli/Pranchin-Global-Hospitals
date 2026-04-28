import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./FacilitySwiper.css";
import { Pagination, Autoplay } from "swiper/modules";
import img_1 from "../../assets/images/facilities/facility (1).jpg";
import img_2 from "../../assets/images/facilities/facility (2).jpg";
import img_3 from "../../assets/images/facilities/facility (3).jpg";
import img_4 from "../../assets/images/facilities/facility (4).jpg";
import img_5 from "../../assets/images/facilities/facility (5).jpg";
import img_6 from "../../assets/images/facilities/facility (6).jpg";
import img_7 from "../../assets/images/facilities/facility (7).jpg";
import img_8 from "../../assets/images/facilities/facility (8).jpg";
import img_9 from "../../assets/images/facilities/facility (9).jpg";
export default function FacilitiesSwiper() {
  const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
  ];
  return (
    <>
      <div className="relative">
        {/* <h2 className=" sm:text-5xl  text-2xl text-center xl:leading-[74px] xl:pb-16 md:pb-12 pb-8 md:leading-[54px] leading-10 font-semibold ">
          State Of Art{" "}
          <span className="text-[#f37721] font-normal italic font-instrumental">
            Diagnostics
          </span>
        </h2> */}
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            800: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2500, // time between slides (2.5s)
            disableOnInteraction: false, // keeps autoplay after user swipe
            pauseOnMouseEnter: true, // pause on hover (🔥 important UX)
          }}
          grabCursor
        >
          {images.map((item) => (
            <SwiperSlide className="" key={item}>
              <img src={item} alt="" className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 👇 OUTSIDE pagination */}

        <div className="custom-pagination mt-8  flex justify-center"></div>
      </div>
    </>
  );
}
