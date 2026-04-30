import React, { useEffect } from "react";
import ServiceBanner from "../components/Services/ServiceBanner";
import OurSevicesList from "../components/Services/OurSevicesList";

const Servicespage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <>
<ServiceBanner/>
<OurSevicesList/>
    </>
  );
};

export default Servicespage;
