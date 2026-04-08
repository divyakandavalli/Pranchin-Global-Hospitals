import React from "react";
import SingleSBanner from "../components/Services/SingleSevices/SingleSBanner";
import ServiceContent from "../components/Services/SingleSevices/ServiceContent";
import ServiceTestimonials from "../components/Services/SingleSevices/ServiceTestimonials";
import OtherServices from "../components/Services/SingleSevices/OtherServices";
import HomeProcess from "../components/home/HomeProcess";
import OurProcess from "../components/Services/OurProcess";
import AboutDoctors from "../components/About/AboutDoctors";

const SingleService = () => {
  return (
    <>
      <SingleSBanner />
      <ServiceContent />
      <AboutDoctors/>
      <ServiceTestimonials />
      <OtherServices/>
      <OurProcess/>
    </>
  );
};

export default SingleService;
