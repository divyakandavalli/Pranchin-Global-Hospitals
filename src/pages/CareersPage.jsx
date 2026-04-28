import React, { useEffect } from "react";
import CarrersBanner from "../components/Careers/CarrersBanner";
import CareerForms from "../components/Careers/CareerForms";

const CareersPage = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <CarrersBanner />
      <CareerForms />
    </>
  );
};

export default CareersPage;

