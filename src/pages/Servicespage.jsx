import React from "react";
import ServiceBanner from "../components/Services/ServiceBanner";
import OurSevicesList from "../components/Services/OurSevicesList";
import Testimonials from "../components/home/Testimonials";
import OurProcess from "../components/Services/OurProcess";



const Servicespage = () => {
  return (
    <>
<ServiceBanner/>
<OurSevicesList/>
<Testimonials/>
<OurProcess/>
    </>
  );
};

export default Servicespage;
