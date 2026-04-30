import React, { useEffect } from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutCoreValues from "../components/About/AboutCoreValues";
import AboutUsSection from "../components/About/AboutUsSection";
import AboutVision from "../components/About/AboutVision";
import OurFeatures from "../components/About/OurFeatures";
import OurChairman from "../components/About/OurChairman";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <AboutBanner />
      <AboutUsSection />
      <AboutVision />
      <AboutCoreValues />
      <OurFeatures />
      <OurChairman />
      <div className="pb-10"></div>
    </>
  );
};
export default AboutPage;
