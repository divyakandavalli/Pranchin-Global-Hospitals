import React from 'react'
import EmergencyIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-01.png'
import SpecialisedIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-02.png'
import RadiologyIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-03.png'
import LaboratoryIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-04.png'
import PharmacyIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-05.png'
import MotherIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-06.png'
import CathlabIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-07.png'
import PackagesIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-08.png'
import LaminarIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-09.png'
import DialysisIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-10.png'
import AmbulanceIcon from '../../assets/icons/Round-the-clock/Round The Clock Services Icons-11.png'
import Marquee from "react-fast-marquee";
export default function RoundTheClock() {
  const facilities = [
    {
      title: "24/7 Emergency Services",
      icon: EmergencyIcon,
    }, // [1]
    {
      title: "24/7 Specialised Critical Care",
      icon: SpecialisedIcon,
    }, // [2]
    {
      title: "24/7 Radiology",
      icon: RadiologyIcon,
    }, // [3]
    {
      title:
        "24/7 Advanced Laboratory",
      icon: LaboratoryIcon,
    }, // [4]
    {
      title: "24/7 Pharmacy",
     icon: PharmacyIcon,
    }, // [5]
    {
      title:
        "24/7 Mother and Child Care Unit - Level III",
      icon: MotherIcon,
    }, // [6]
    {
      title:
        "Cath Lab with DSA ",
      icon: CathlabIcon,
    }, // [7]
    {
      title: "Preventive Health Check-up Packages",
      icon: PackagesIcon,
    }, // [8]
    {
      title: "World Class OTs featuring Laminar Airflow, HEPA Filters, High end Microscopes",
      icon: LaminarIcon,
    }, // [9]
    {
      title: "Dialysis Unit ",
      icon: DialysisIcon,
    }, // [10]
    {
      title: "24/7 Ambulance with ventilator",
      icon: AmbulanceIcon,
    }, // [11]
  ];
  return (
     <div className="relative py-10">
          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] text-center pb-5  font-manrope font-semibold leading-tight text-black">
            Round{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              The Clock Facilities
            </span>
          </h2>
          <Marquee>
            {facilities.slice(0, 6).map((item) => (
              <div className=" flex-col gap-4 w-80 h-52 mx-4 z-10 pb-2 px-4 py-2 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <img src={item.icon} className="w-28" alt="" />
                <h4 className="text-[#022038] text-[14px] 3xl:text-[15px]  text-center  font-manrope">{item.title}</h4>
              </div>
            ))}
          </Marquee>
        </div>
  )
}
