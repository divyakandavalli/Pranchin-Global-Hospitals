import React, { useEffect, useRef, useState } from "react";
import BannerCarousel from "../components/home/BannerCarousel";
import AboutSection from "../components/home/AboutSection";
import HomeProcess from "../components/home/HomeProcess";
import BookAppointment from "../components/home/BookAppointment";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import AboutDoctors from "../components/About/AboutDoctors";
import Reveal from "../components/common/Reveal";
import BookAppointmentMobile from "../components/home/BookAppointmentMobile";
import HomeServicesTwo from "../components/home/HomeServicesTwo";
import CountingValues from "../components/home/CountingValues";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import VerticalCarousel from "../components/home/VerticalCarousel";

import slide3 from "../assets/images/17588.jpg";
import slide2 from "../assets/images/3374.jpg";
import slide1 from "../assets/images/midsection-surgeons-operating-patient-hospital.jpg";

export default function HomePage() {
  const slidesData = [slide1, slide2, slide3];

  const containerRef = useRef(null);
  const [is3xl, setIs2xl] = useState(false);

  // Detect 3xl screen
  useEffect(() => {
    const checkScreen = () => {
      setIs2xl(window.innerWidth >= 1536);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div

    >
      <Reveal>
        <section className="h-auto">
          {/* <BannerCarousel /> */}
          <VerticalCarousel slides={slidesData}/>
        </section>
      </Reveal>

      <Reveal>
        <div>
          <AboutSection />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center">
          <CountingValues />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center">
          <HomeProcess />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col justify-center items-center">
          <HomeServicesTwo />
        </div>
      </Reveal>

      <Reveal>
        <div className="block xl:hidden">
          <BookAppointmentMobile />
        </div>

        <div className="hidden xl:flex flex-col justify-center items-center">
          <BookAppointment />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center">
          <AboutDoctors />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center">
          <Testimonials />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex justify-center items-center">
          <FAQSection />
        </div>
      </Reveal>
    </div>
  );
}