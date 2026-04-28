import React from "react";
import homeBanner from "../../assets/images/chairman_b-01.jpg";
export default function OurChairman() {
  return (
    <section
      id="our-chairman"
      className=" 3xl:max-w-[80%] w-[95%] bg-[#c8dded] mx-auto md:px-10 px-5 rounded-3xl py-10 "
    >
      <div className=" grid xl:grid-cols-2 grid-cols-1 xl:gap-10  gap-4 items-center ">
        {/* LEFT IMAGE */}
        <div className="relative ">
          <div className=" object-cover overflow-hidden ">
            <img src={homeBanner} alt="" className=" rounded-3xl " />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-1 xl:items-start items-center ">
          <div className="flex justify-center flex-col items-center ">
            <span className="border w-[235px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
              Greatness Inspired
            </span>
            <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  text-center font-semibold mt-4 leading-tight">
              Our{" "}
              <span className="italic font-light font-instrumental text-[#435b6d]">
                Chairman
              </span>
            </h2>
          </div>
          <p className=" mt-4 font-manrope text-[#66686c] text-sm 3xl:text-[15px] text-justify">
            <span className="font-bold italic ">
              Shri Alapati Venkateswara Rao,{" "}
            </span>{" "}
            Founder, Chairman & Managing Director of Prachin Global Hospitals is
            a visionary leader known for his commitment towards excellence in
            healthcare and education with strong belief in creating a meaningful
            impact. He has played a pivotal role in shaping institutions that
            contribute to the growth and well-being of society.
          </p>
          <p className=" mt-2 font-manrope text-[#66686c] 3xl:text-[15px] text-sm text-justify">
            Rising from humble beginnings, he has built a legacy rooted in
            dedication, integrity and forward-thinking leadership. Through his
            initiatives in education, he has nurtured and empowered countless
            young minds, helping them achieve their aspirations and become
            responsible contributors to the society.
          </p>
          <p className=" mt-2 font-manrope text-[#66686c] text-sm 3xl:text-[15px] text-justify">
            Driven by a passion to make quality healthcare accessible, he
            established Prachin Global Hospitals as a state of the art 250 bed
            super speciality facility. His vision extends beyond
            infrastructure-he aims to create a healing environment where
            advancement of medical technology is seamlessly combined with
            compassionate, patient centric care.
          </p>
          <p className=" mt-2 font-manrope text-[#66686c] text-sm  3xl:text-[15px] text-justify ">
            Under his leadership, the organisation continues to grow with the
            focus on innovation, clinical excellence and ethical practices. His
            unwavering commitment to service and his people-first approach have
            made Prachin Global Hospitals a trusted land mark in healthcare.
          </p>
        </div>
      </div>
    </section>
  );
}
