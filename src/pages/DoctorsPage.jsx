import React from "react";
import DoctorsBanner from "../components/Doctors/DoctorsBanner";
import AllDoctors from "../components/Doctors/AllDoctors";
import BookAppointment from "../components/home/BookAppointment";
import DoctorsCoreValues from "../components/Doctors/DoctorsCoreValues";


const DoctorsPage = () => {
  return (
    <>
      <DoctorsBanner/>
      <AllDoctors/>
      <BookAppointment className='xl:my-20'/>
      <DoctorsCoreValues/>
    </>
  );
};

export default DoctorsPage;
