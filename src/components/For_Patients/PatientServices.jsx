import React from "react";
import bannerimg from "../../assets/images/patient_service.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FacilitiesSwiper from "./FacilitiesSwiper";
import emergency_24_7 from "../../assets/images/facilities/emergencey_27_7-01.png";
import HealthCheckup from '../../assets/icons/2-08.png'
import Emergency from '../../assets/icons/2-07.png'
import Endoscopy from '../../assets/icons/2-05.png'
import Laminar from '../../assets/icons/2-04.png'
import Cathlab from '../../assets/icons/2-09.png'
import Gyneac from '../../assets/icons/1-11.png'
import bedded from '../../assets/icons/2-02.png'
import Dialysis from '../../assets/icons/2-06.png'
import Pharmacy from '../../assets/icons/2-10.png'
import Central from '../../assets/icons/2-10.png'
import Radiology from '../../assets/icons/2-03.png'
import Marquee from "react-fast-marquee";
const PatientServices = () => {
  const vip = [
    "Separate Living and Dining area",
    "	Private Bathrooms with Shower",
    "Refrigerator with Drinking Water",
    "Flat-Screen LCD TV",
    "In-Room Personal Safe",
    "Coffee and Tea",
  ];
  const privateRoom = [
    "Electric Bed",
    "	Private Bathrooms with Shower",
    "Refrigerator with Drinking Water",
    "Flat-Screen LCD TV",
  ];
  const sharedprivateRoom = [
    "Bedside Sofa",
    "Shared Bathroom with Hot and Cold Water Shower",
    "Drinking Water",
    "Sink",
    "Telephone",
  ];
  const facilities = [
    {
      title: "Corporate Health Check up - Preventive Health Check Up Unit",
      icon: HealthCheckup,
    }, // [1]
    {
      title: "24/7 Emergency Ambulance with Ventilator Support",
      icon: Emergency,
    }, // [2]
    {
      title: "Endoscopy, ERCP, Advanced Scopes and Dedicated Sleep Unit",
      icon: Endoscopy,
    }, // [3]
    {
      title:
        "World Class OTs featuring Laminar Airflow, HEPA Filters, High end Microscopes",
      icon: Laminar,
    }, // [4]
    {
      title: "Advanced Cathlab-DSA Unit - CCU",
     icon: Cathlab,
    }, // [5]
    {
      title:
        "24/7 OBG and Gyneac Care with Level III Child Care Units (PICU and NICU)",
      icon: Gyneac,
    }, // [6]
    {
      title:
        "24/7 Emergency and Trauma Care Services with dedicated ER Physicians",
      icon: emergency_24_7,
    }, // [7]
    {
      title: "24/7 Dedicated 70 bedded Intensive Care and Critical Care",
      icon: bedded,
    }, // [8]
    {
      title: "Dialysis Unit with Advanced Equipment and Nephrology Monitoring",
      icon: Dialysis,
    }, // [9]
    {
      title: "24/7 Pharmacy",
      icon: Pharmacy,
    }, // [10]
    {
      title: "24/7 Advanced Central Lab",
      icon: Central,
    }, // [11]
    {
      title: "24/7 Radiology Diagnostics services MRI, CT, X RAY, USG ",
      icon: Radiology,
    }, // [12]
  ];
  return (
    <>
      <div
        className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[top_left] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#010813]/70" />

        {/* Content */}
        <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
          <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
            Patient Services
          </h1>

          <div className="flex items-center justify-center text-base font-manrope">
            <a href="/">Home</a>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <Link className="text-[#f37721]" to="/patient-services">
              Patient Services
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%] font-manrope  mx-auto md:pt-16 pt-12  md:pb-10 pb-0">
        {/* Hero Section */}
        <div className=" ">
          <h2 className=" sm:text-5xl  text-2xl text-center xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
            Comfort Meets Care:{" "}
            <span className="text-[#f37721] font-normal italic font-instrumental">
              Accommodation and Services
            </span>
          </h2>
          <p className="text-lg text-[#5187af] text-center font-medium">
            Accommodation – Rooms and Beds, Food, Pharmacy
          </p>
          <p className="text-base mt-8 md:mt-12 text-[#66686c] leading-6">
            Prachin Global Hospital provides comfortable, hygienic, and
            well-maintained in-patient accommodation designed to meet modern
            healthcare standards. We offer a wide range of room options to suit
            different needs, including elegantly designed A/C deluxe rooms,
            private single rooms, shared rooms, cubicles, general wards, and
            exclusive VIP suites.
          </p>
          <p className="text-base mt-4 text-[#66686c] leading-6">
            Our private rooms are thoughtfully equipped with essential amenities
            such as attached bathrooms, telephone access, and television for a
            comfortable stay. All rooms are well-ventilated and designed to
            ensure a pleasant and healing environment, featuring modern
            conveniences like secure storage spaces, cable TV, and 24/7 hot and
            cold water supply.
          </p>
          <p className="text-base mt-4 text-[#66686c] leading-6">
            At Prachin Global Hospital, we focus on providing a patient-friendly
            atmosphere that promotes comfort, safety, and overall well-being
            during your stay.
          </p>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              VIP Suite
            </h3>{" "}
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {vip.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-[#66686c] flex-row gap-2"
                >
                  <CheckCircleIcon
                    fontSize="small"
                    className="text-[#f37721]"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              {" "}
              Standard Private Room
            </h3>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {privateRoom.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-[#66686c] flex-row gap-2"
                >
                  <CheckCircleIcon
                    fontSize="small"
                    className="text-[#f37721]"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              {" "}
              Shared Room (2 beds)
            </h3>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {sharedprivateRoom.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-[#66686c] flex-row gap-2"
                >
                  <CheckCircleIcon
                    fontSize="small"
                    className="text-[#f37721]"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              {" "}
              Intensive Care Unit (ICU)
            </h3>
            <ul className="my-4">
              <li className="flex items-center text-[#66686c] flex-row gap-2">
                <CheckCircleIcon fontSize="small" className="text-[#f37721]" />{" "}
                Special Critical Care Beds
              </li>
            </ul>
          </div>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              General Wards
            </h3>
            <p className="text-base mt-4 text-[#66686c] leading-6">
              General Wards are economical options and have the provision to
              accommodate many patients. These are spacious rooms, chair for
              each patient’s relatives, an attached bathroom and telephone
              lines.
            </p>
            <p className="text-base mt-4 text-[#66686c] leading-6">
              Apart from comprehensive healthcare services, the hospital offers
              patients and visitors world-class amenities and services amid
              unparalleled comfort.
            </p>
          </div>
          <div className="my-4 pt-4">
            <h3 className="relative text-xl text-[#5187af] font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-[#f37721]">
              {" "}
              Dining Facility
            </h3>
            <p className="text-base mt-4 text-[#66686c] leading-6">
              Prachin Global Hospital ensures a comfortable and hygienic
              environment for all patients, with well-maintained facilities
              designed to support recovery and overall well-being. Every aspect
              of patient care is thoughtfully planned to create a safe, clean,
              and patient-friendly atmosphere, complemented by modern amenities
              and attentive service.
            </p>
            <p className="text-base mt-4 text-[#66686c] leading-6 ">
              In addition, the hospital offers well-equipped in-house dining
              facilities for patients, attendants, and visitors. Our dining
              services include dedicated restaurants serving freshly prepared,
              nutritious meals with a mix of local and regional cuisines, along
              with a cafeteria that provides quick and convenient refreshment
              options. All meals are prepared following strict hygiene
              standards, ensuring quality, taste, and nourishment for everyone.
            </p>
          </div>
        </div>
        <FacilitiesSwiper />

        <div className="relative lg:py-16 py-8">
          <h2 className=" sm:text-5xl  text-2xl text-center xl:leading-[74px] xl:pb-16 md:pb-12 pb-8 md:leading-[54px] leading-10 font-semibold ">
            Round{" "}
            <span className="text-[#f37721] font-normal italic font-instrumental">
              The Clock Facilities
            </span>
          </h2>
          <Marquee>
            {facilities.slice(0, 6).map((item) => (
              <div className=" flex-col gap-4 w-80 h-52 mx-4 z-10 pb-2 px-4 py-2 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <img src={item.icon} className="w-28" alt="" />
                <h4 className="text-center text-lg text-[#5187af] font-medium">{item.title}</h4>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default PatientServices;
