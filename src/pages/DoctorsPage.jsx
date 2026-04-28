import React, { useEffect } from "react";
import DoctorsBanner from "../components/Doctors/DoctorsBanner";
import AllDoctors from "../components/Doctors/AllDoctors";
// import BookAppointment from "../components/home/BookAppointment";
// import DoctorsCoreValues from "../components/Doctors/DoctorsCoreValues";

const DoctorsPage = () => {
  
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <DoctorsBanner/>
      <AllDoctors/>
    </>
  );
};

export default DoctorsPage;
