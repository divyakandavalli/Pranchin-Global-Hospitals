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

export default function HomePage() {
  const containerRef = useRef(null);
  const [is2xl, setIs2xl] = useState(false);

  // Detect 2xl screen
  useEffect(() => {
    const checkScreen = () => {
      setIs2xl(window.innerWidth >= 1536);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Reset scroll position when component mounts (important for navigation back to home)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  // Keyboard Scroll - Only for 2xl
  useEffect(() => {
    if (!is2xl) return;

    const handleKey = (e) => {
      const container = containerRef.current;
      if (!container) return;

      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA" ||
        document.activeElement.tagName === "SELECT" ||
        document.querySelector(".MuiDialog-root")
      ) {
        return;
      }

      const height = window.innerHeight;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        container.scrollBy({ top: height, behavior: "smooth" });
      }

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        container.scrollBy({ top: -height, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [is2xl]);

  return (
    <div
      ref={containerRef}
      data-scroll-container="home"   
      tabIndex={is2xl ? 0 : -1}
      className={`h-screen overflow-y-auto ${
        is2xl ? "snap-y snap-mandatory scroll-smooth" : ""
      }`}
    >
      {/* Header */}
      <div className={is2xl ? "snap-start" : ""}>
        <Header />
      </div>

      <Reveal>
        <section className={`h-full 2xl:h-screen ${is2xl ? "snap-start pt-5" : ""}`}>
          <BannerCarousel />
        </section>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen ${is2xl ? "snap-start" : ""}`}>
          <AboutSection />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <CountingValues />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <HomeProcess />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex flex-col justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <HomeServicesTwo />
        </div>
      </Reveal>

      <Reveal>
        <div className="block xl:hidden">
          <BookAppointmentMobile />
        </div>
        <div className={`hidden xl:flex flex-col 2xl:h-screen justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <BookAppointment />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <AboutDoctors />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <Testimonials />
        </div>
      </Reveal>

      <Reveal>
        <div className={`2xl:h-screen flex justify-center items-center ${is2xl ? "snap-start" : ""}`}>
          <FAQSection />
        </div>
      </Reveal>

      <div className={is2xl ? "snap-start" : ""}>
        <Footer />
      </div>
    </div>
  );
}