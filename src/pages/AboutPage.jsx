import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutSection from "../components/home/AboutSection";
import AboutCoreValues from "../components/About/AboutCoreValues";
import AboutDoctors from "../components/About/AboutDoctors";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <AboutCoreValues />
      <AboutDoctors />
    </>
  );
};

export default AboutPage;
