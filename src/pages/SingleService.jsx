import React, { useEffect } from "react";
import SingleSBanner from "../components/Services/SingleSevices/SingleSBanner";
import ServiceContent from "../components/Services/SingleSevices/ServiceContent";
import OtherServices from "../components/Services/SingleSevices/OtherServices";


const SingleService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SingleSBanner />
      <ServiceContent />
      <OtherServices/>
    </>
  );
};

export default SingleService;
