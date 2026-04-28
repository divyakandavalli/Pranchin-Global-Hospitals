import React, { useEffect } from "react";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactUsFrom from "../components/Contact/ContactUsFrom";
import FAQSection from "../components/home/FAQSection";

const ContactUs = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <ContactBanner />
      <ContactUsFrom />
      <FAQSection />
    </>
  );
};

export default ContactUs;
