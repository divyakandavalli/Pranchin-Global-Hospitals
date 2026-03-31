import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutCoreValues from "../components/About/AboutCoreValues";
import AboutDoctors from "../components/About/AboutDoctors";
import AboutUsSection from "../components/About/AboutUsSection";
import AboutVision from "../components/About/AboutVision";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutUsSection />
      <AboutVision />
      <AboutCoreValues />
      <AboutDoctors />
    </>
  );
};

export default AboutPage;
