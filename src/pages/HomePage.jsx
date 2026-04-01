import React from "react";
import BannerCarousel from "../components/home/BannerCarousel";
import AboutSection from "../components/home/AboutSection";
import HomeServices from "../components/home/HomeServices";
import HomeProcess from "../components/home/HomeProcess";
import BookAppointment from "../components/home/BookAppointment";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import AboutDoctors from "../components/About/AboutDoctors";
import Reveal from "../components/common/Reveal";
import BookAppointmentMobile from "../components/home/BookAppointmentMobile";

export default function HomePage() {
  return (
    <div>
      <Reveal>
        <BannerCarousel />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <HomeServices />
      </Reveal>
      <Reveal>
        <HomeProcess />
      </Reveal>
      <Reveal>
        {" "}
        <div className="block xl:hidden">
          <BookAppointmentMobile/>
        </div>
        {/* Desktop */}
        <div className="hidden xl:block">
          <BookAppointment />
        </div>
      </Reveal>
      <Reveal>
        <AboutDoctors />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
    </div>
  );
}
