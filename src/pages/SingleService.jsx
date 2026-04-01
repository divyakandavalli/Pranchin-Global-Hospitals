import React from "react";
import SingleSBanner from "../components/Services/SingleSevices/SingleSBanner";
import ServiceContent from "../components/Services/SingleSevices/ServiceContent";
import ServiceTestimonials from "../components/Services/SingleSevices/ServiceTestimonials";
import OtherServices from "../components/Services/SingleSevices/OtherServices";
import HomeProcess from "../components/home/HomeProcess";

const SingleService = () => {
  return (
    <>
      <SingleSBanner />
      <ServiceContent />
      <ServiceTestimonials />
      <OtherServices/>
      <HomeProcess/>
    </>
  );
};

export default SingleService;
