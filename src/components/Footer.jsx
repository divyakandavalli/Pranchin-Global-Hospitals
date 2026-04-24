import React from "react";
import footer_banner from "../assets/images/footer_banner.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/images/PrachinLogo.png";
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
      <div className="3xl:max-w-[72%] md:p-16 px-6 py-[72px] font-manrope md:w-[95%] text-white mx-auto md:rounded-3xl bg-[#094ca0] relative overflow-hidden">
        <div className="-right-28 -top-36 absolute">
          <img src={footer_banner} className="rotate-[24deg]" alt="" />
        </div>
        <div className="flex xl:flex-row flex-col justify-center xl:items-end items-center md:gap-10 gap-6">
          <div className="xl:w-[68%] flex flex-col xl:items-start items-center gap-6">
            <div>
              <span className="bg-[#ffffff40]  px-4 py-1.5 font-medium tracking-wider  text-base rounded-full">
                GET STARTED
              </span>
            </div>
            <h2 className="lg:text-[64px] md:text-5xl text-4xl xl:text-left leading-[45px] text-center md:leading-[74px] font-semibold 2xl:pe-10">
              Book Your Appointment <span className="xl:hidden block"></span>
              <span className="text-[#f37721] font-normal italic font-instrumental">
                With Medical Experts
              </span>
            </h2>
            <p className="text-lg md:w-[80%] 2xl:pe-10 xl:text-left text-center">
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

      <div className="3xl:max-w-[72%] font-manrope lg:mt-20 md:mt-10 mx-auto px-4 py-[72px] flex xl:flex-row flex-col lg:gap-38 md:gap-20 gap-10  md:w-[95%]">
        <div className="xl:w-[28%] flex flex-col xl:items-start items-center gap-4">
          <img src={logo} className="xl:w-52 w-60 brightness-100" alt="" />
          <p className="text-lg text-white xl:w-auto w-2/3 text-center xl:text-left">
            Dedicated to providing expert healthcare with advanced tech
            treatments to ensure your well-being and a healthier future.
          </p>
          <div className="flex flex-row gap-4">
            {social.map((item, index) => (
              <a
                key={item.id + index}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-full bg-[#DDEADB] hover:bg-[#f37721] flex justify-center items-center hover:text-white transition"
              >
                <item.icon fontSize="small" />
              </a>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-[#C3C6CE]  tracking-widest font-medium text-center xl:text-left">
              OUR GALLERY
            </h2>

            <div className="mt-8">
              <Marquee pauseOnHover={true}>
                <img
                  src={img1}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img2}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img3}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img4}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img5}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img6}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img1}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img2}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img3}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
                <img
                  src={img4}
                  alt=""
                  className="xl:w-[160px] xl:h-[105px] lg:w-[440px] lg:h-[300px] w-[300px] h-[220px] rounded-lg me-3 "
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="xl:w-[70%] ">
          <div className=" flex lg:flex-row flex-col justify-between xl:gap-8 lg:gap-4 gap-8 font-manrope">
            <div className="flex flex-col gap-4 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-4 text-white">
                <li>About US</li>
                <li>Careers US</li>
                <li>Our Doctors</li>
                <li>Our Patients</li>
                <Link to="/happy-patients">Happy Patients</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                SERVICES
              </h3>
              <ul className="flex flex-col gap-4 text-white">
                <li>General Consultation</li>
                <li>Specialized Treatment</li>
                <li>Emergency Care</li>
                <li>Medical Checkup</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-base">
              <h3 className="text-[#C3C6CE]  tracking-widest font-medium">
                For Patients
              </h3>
              <ul className="flex flex-col gap-4 text-white">
                <Link to="/patient-resources">Patients Resources</Link>
                <Link to="/patient-services">Patients Services</Link>
                <Link to="/contact">Book an Appointment </Link>
              </ul>
            </div>
            <div className="flex flex-col  gap-4 text-base">
              <h3 className="text-[#C3C6CE]   tracking-widest font-medium">
                Opening Hours
              </h3>
              <div className="text-white text-base flex pb-1 border-b border-[#2E2E2E] justify-between items-center">
                <span>Monday - Wednesday :</span>
                <span>6AM - 13PM</span>
              </div>
              <div className="text-white text-base flex py-1 border-b border-[#2E2E2E] justify-between items-center">
                <span>Monday - Wednesday :</span>
                <span>6AM - 13PM</span>
              </div>
              <div className="text-white text-base flex py-1 border-b border-[#2E2E2E] justify-between items-center">
                <span>Monday - Wednesday :</span>
                <span>6AM - 13PM</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 justify-start lg:mt-20 mt-10">
            <h3 className=" md:text-5xl text-[38px] font-manrope font-medium text-white">
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

      <div className="3xl:max-w-[72%] lg:mt-10 py-10 text-white font-manrope border-t lg:flex-nowrap lg:gap-0 gap-5 flex-wrap border-[#2E2E2E] mx-auto w-[95%]  flex md:flex-row flex-col justify-between md:items-center">
        <p>© 2026 Prachin Hospital. All rights reserved.</p>
        <div className="flex flex-row flex-wrap  gap-4">
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Sitemap</a>
          <a href="/">Cookies</a>
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
