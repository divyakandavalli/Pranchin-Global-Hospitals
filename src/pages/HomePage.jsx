import React, { useEffect } from "react";
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
import BannerfinalCarousel from "../components/home/BannerfinalCarousel";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Reveal>
        <section>
          <BannerfinalCarousel />
        </section>
      </Reveal>

      <Reveal>
        <div>
          <AboutSection />
        </div>
      </Reveal>

      <Reveal>
        <div className="">
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
