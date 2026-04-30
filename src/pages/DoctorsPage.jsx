import React, { useEffect } from "react";
import DoctorsBanner from "../components/Doctors/DoctorsBanner";
import AllDoctors from "../components/Doctors/AllDoctors";

const DoctorsPage = () => {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <DoctorsBanner/>
      <AllDoctors/>
    </>
  );
};

export default DoctorsPage;
