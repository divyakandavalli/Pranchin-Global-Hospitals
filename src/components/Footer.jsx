import React from "react";
import footer_banner from "../assets/images/footer_banner.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/images/Prachin Final Logo Website Size-02.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/gallery_photos/image (1).jpg";
import img2 from "../assets/images/gallery_photos/image (2).jpg";
import img3 from "../assets/images/gallery_photos/image (3).jpg";
import img4 from "../assets/images/gallery_photos/image (4).jpg";
import img5 from "../assets/images/gallery_photos/image (5).jpg";
import img6 from "../assets/images/gallery_photos/image (6).jpg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import footer_24 from "../assets/images/footer_24.png";
const Footer = () => {
  const social = [
    {
      id: 1,
      name: "Twitter",
      icon: TwitterIcon,
      link: "https://x.com/Prachinhospital",
    },
    {
      id: 2,
      name: "facebook",
      icon: FacebookOutlinedIcon,
      link: "https://www.facebook.com/people/Prachin-Global-Hospitals/61572763597942/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://www.instagram.com/prachinglobalhospitals/",
    },
    {
      id: 4,
      name: "Youtube",
      icon: YouTubeIcon,
      link: "https://www.youtube.com/@PrachinglobalHospitals",
    },
  ];
  return (
    <div
      className="w-full h-auto"
      style={{
        backgroundImage:
          "  linear-gradient(to bottom,white 0%, white 20%,#010813 20%, #010813 100%)",
      }}
    >
      <div className="3xl:max-w-[72%] md:p-12 px-6 py-12 font-manrope md:w-[95%] text-white mx-auto md:rounded-3xl bg-[#094ca0] relative overflow-hidden">
        <div className="-right-28 -top-36 absolute">
          <img src={footer_banner} className="rotate-[24deg]" alt="" />
        </div>
        <div className="flex xl:flex-row flex-col justify-center xl:items-end items-center md:gap-10 gap-6">
          <div className="xl:w-[68%] flex flex-col xl:items-start items-center gap-2">
            <div>
              <span className="bg-[#ffffff40]  px-4 py-1.5 font-medium tracking-wider  text-base rounded-full">
                GET STARTED
              </span>
            </div>
            <h2 className="text-[22px] md:text-[34px]  xl:text-lef leading-tight  font-semibold ">
              Book Your Appointment <br />
              <span className="text-[#f37721] font-normal italic font-instrumental">
                With Medical Experts
              </span>
            </h2>
            <p className="text-[15px] md:w-[80%] 2xl:pe-10 xl:text-left text-center">
              Take the first step toward better health today. Schedule your
              appointment with our trusted doctors and experience compassionate,
              professional.
            </p>
          </div>
          <div className="flex xl:w-[32%] justify-end items-end z-10">
            <button className=" flex items-center justify-between bg-[#f37721] cursor-pointer text-white py-2 pe-2 ps-4 rounded-full w-fit gap-2  transition">
              <span className="font-medium font-manrope text-[16px] capitalize">
                Book Appointment Now
              </span>

              {/* Arrow Circle */}
              <span className="bg-[#DDEADB] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                <ArrowForwardIcon fontSize="small" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="3xl:max-w-[72%] font-manrope bg-[#010813]  pt-10 mx-auto px-4  flex xl:flex-row flex-col  md:gap-20 gap-10  md:w-[95%]">
        <div className="xl:w-[28%] flex flex-col xl:items-start items-center gap-4">
          <img src={logo} className="xl:w-52 w-60 brightness-100" alt="" />
          <p className="text-[15px]  text-white xl:w-auto md:w-2/3 text-left">
            Dedicated to providing expert healthcare with advanced tech
            treatments to ensure your well-being and a healthier future.
          </p>
          <div className="flex flex-row gap-2">
            {social.map((item, index) => (
              <a
                key={item.id + index}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-full bg-[#DDEADB] hover:bg-[#f37721] flex justify-center items-start hover:text-white transition"
              >
                <item.icon fontSize="small" />
              </a>
            ))}
          </div>
          <div className="mt-2">
            <h2 className="text-[#C3C6CE]  tracking-widest font-medium text-left">
              OUR GALLERY
            </h2>

            <div className="mt-4">
              <Marquee pauseOnHover={true}>
                <img
                  src={img1}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img2}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img3}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img4}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img5}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img6}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img1}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img2}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img3}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
                <img
                  src={img4}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[200] h-[140px] rounded-lg me-3 "
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="xl:w-[70%] ">
          <div className=" flex lg:flex-row flex-col justify-between xl:gap-8 lg:gap-4 gap-8 font-manrope">
            <div className="flex flex-col gap-2 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                COMPANY
              </h3>
              <ul className="flex flex-col  text-white">
                <Link to="/about">About US</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/doctors">Our Doctors</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/happy-patients">Happy Patients</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                SERVICES
              </h3>
              <ul className="flex flex-col  text-white">
                <li>General Consultation</li>
                <li>Specialized Treatment</li>
                <li>Emergency Care</li>
                <li>Medical Checkup</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                For Patients
              </h3>
              <ul className="flex flex-col  text-white">
                <Link to="/patient-resources">Patients Resources</Link>
                <Link to="/patient-services">Patients Services</Link>
                <Link to="/contact">Book an Appointment </Link>
              </ul>
            </div>
            <div className="flex flex-col  gap-4 text-base">
             
              <div className="flex justify-center mt-4 items-center">
                <img src={footer_24} alt="24/7 open" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 justify-start mt-4">
            <h3 className=" text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope font-medium text-white">
              Supporting Your{" "}
              <span className="font-instrumental italic font-light tracking-wide text-[#DDEADB]">
                <span>Wellness Journey</span>
              </span>
            </h3>
            <div className="w-full flex flex-row flex-wrap sm:flex-nowrap gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white text-base w-full outline-none text-black py-3 rounded-full px-6"
              />
              <button className="group  flex items-center justify-between bg-[#094CA0]  text-white px-6 py-2 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300">
                <span className="font-medium font-manrope text-[16px] capitalize">
                  Subscribe
                </span>

                <span
                  className="bg-[#E5F4FF] text-[#094CA0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300
    group-hover:bg-[#F5D1B9] group-hover:text-[#F37721]"
                >
                  <ArrowForwardIcon fontSize="small" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="3xl:max-w-[72%] lg:mt-5 py-3 text-white font-manrope border-t lg:flex-nowrap lg:gap-0 gap-5 flex-wrap border-[#2E2E2E] mx-auto w-[95%]  flex md:flex-row flex-col justify-between md:items-center">
        <p>© 2026 Prachin Hospital. All rights reserved.</p>
        <div className="flex flex-row flex-wrap  gap-4">
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group  flex items-center justify-between bg-[#094CA0]  text-white px-3 py-2 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300"
        >
          <span className="font-medium font-manrope text-[16px] capitalize">
            Back to Top
          </span>

          {/* Arrow Circle */}
          <span
            className="bg-[#E5F4FF] text-[#094CA0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300
    group-hover:bg-[#F5D1B9] group-hover:text-[#F37721]"
          >
            <ArrowUpwardIcon fontSize="small" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
