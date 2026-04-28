import React from "react";
import emergency_24_7 from "../../assets/images/facilities/emergencey_27_7-01.png";
import HealthCheckup from "../../assets/icons/2-08.png";
import Emergency from "../../assets/icons/2-07.png";
import Endoscopy from "../../assets/icons/2-05.png";
import Laminar from "../../assets/icons/2-04.png";
import Cathlab from "../../assets/icons/2-09.png";
import Gyneac from "../../assets/icons/1-11.png";
import bedded from "../../assets/icons/2-02.png";
import Dialysis from "../../assets/icons/2-06.png";
import Pharmacy from "../../assets/icons/2-10.png";
import Central from "../../assets/icons/2-10.png";
import Radiology from "../../assets/icons/2-03.png";
import Marquee from "react-fast-marquee";
export default function RoundTheClock() {
  const facilities = [
    {
      title: "24/7 Emergency Services",
      icon: HealthCheckup,
    }, // [1]
    {
      title: "24/7 Specialised Critical Care",
      icon: Emergency,
    }, // [2]
    {
      title: "24/7 Rodiology",
      icon: Endoscopy,
    }, // [3]
    {
      title: "24/7 Advanced Laboratory",
      icon: Laminar,
    }, // [4]
    {
      title: "24/7 Pharmacy",
      icon: Cathlab,
    }, // [5]
    {
      title: "24/7 Mother and Child Care Unit - Level III",
      icon: Gyneac,
    }, // [6]
    {
      title: "Cath Lab with DSA ",
      icon: emergency_24_7,
    }, // [7]
    {
      title: "Preventive Health Check-up Packages",
      icon: bedded,
    }, // [8]
    {
      title:
        "World Class OTs featuring Laminar Airflow, HEPA Filters, High end Microscopes",
      icon: Dialysis,
    }, // [9]
    {
      title: "Dialysis Unit ",
      icon: Pharmacy,
    }, // [10]
    {
      title: "24/7 Ambulance with ventilator",
      icon: Central,
    }, // [11]
  ];
  return (
    <div className="relative pb-10">
      <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] text-center pb-10  font-manrope font-semibold leading-tight text-black">
        Round{" "}
        <span className="italic font-light font-instrumental text-[#5187af]">
          The Clock Facilities
        </span>
      </h2>
      <Marquee>
        {facilities.slice(0, 6).map((item) => (
          <div className=" flex-col gap-4 w-80 h-52 mx-4 z-10 pb-2 px-4 py-2 bg-[#C8DDED] rounded-xl flex justify-center items-center">
            <img src={item.icon} className="w-28" alt="" />
            <h4 className="text-[#022038] text-[14px] 3xl:text-[15px]  text-center  font-manrope">
              {item.title}
            </h4>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
