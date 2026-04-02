import React from "react";
import DoctorsBanner from "../Doctors/DoctorsBanner";
import doctorImg from "../../assets/images/female-doctor-stands-corridor-with-her-arms-crossed.jpg";
import BookAppointment from "../home/BookAppointment";
import BookAppointmentMobile from "../home/BookAppointmentMobile";
import AboutDoctors from "../About/AboutDoctors";
import EastIcon from "@mui/icons-material/East";
export default function DoctorDetails() {
  return (
    <div className="font-manrope">
      <DoctorsBanner />

      {/* MAIN SECTION */}
      <div className="w-[95%] max-w-[1400px] mx-auto py-16 flex flex-col md:flex-row md:justify-between">
        {/* LEFT (NO STICKY) */}
        <div className="w-full md:w-[35%] h-fit">
          <div className="bg-[#dbe7f3] rounded-[20px] p-6 shadow-sm">
            <img
              src={doctorImg}
              alt="doctor"
              className="rounded-[16px] w-full h-auto object-cover"
            />

            {/* NAME */}
            <h2 className="text-[24px] font-semibold mt-4 text-[#000]">
              Dr. Katikareddy V
            </h2>

            {/* ROLE */}
            <p className="text-[16px] font-medium text-[#000] mt-1">
              Senior Surgical Oncologist
            </p>

            {/* QUALIFICATION */}
            <p className="text-sm text-[#4D6E76] mt-3 leading-6">
              MBBS, MS (Gen), DNB – Surgical Oncology, NIMS PDCC – Surgical
              Gastroenterology, SVIMS, FIAGES, EFIAGES, FMAS, FAIS
            </p>

            {/* DETAILS */}
            <div className="mt-5 space-y-3 text-[14px] text-[#000] font-manropoe">
              <p className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  Director & Chief Surgical Oncologist, Surgical
                  Gastroenterology
                </span>
              </p>

              <p className="flex items-center gap-2">
                <span>✅</span>
                <span>22+ Years of Clinical Experience</span>
              </p>

              <p className="flex items-center gap-2">
                <span>✅</span>
                <span>Gender: Female</span>
              </p>

              <p className="flex items-center gap-2">
                <span>✅</span>
                <span>Languages: Hindi, English, Telugu</span>
              </p>

              <p className="flex items-center gap-2">
                <span>🗓️</span>
                <span>Consultation: 11:00 AM – 1:00 PM</span>
              </p>

              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Prachin Global Hospitals</span>
              </p>
            </div>

            {/* BUTTON */}
            <button className="mt-5 flex items-center gap-3 bg-[#094ca0] text-white px-5 py-2.5 rounded-full">
              <span className="text-[14px] font-manrope">
                Get Free Consultation
              </span>
              <span className="bg-white text-[#094ca0] rounded-full w-8 h-8 flex items-center justify-center">
                <EastIcon fontSize="small" />
              </span>
            </button>
          </div>
        </div>

        {/* GAP */}
        <div className="hidden md:block w-[5%]" />

        {/* RIGHT */}
        <div className="w-full md:w-[55%] mt-10 md:mt-0 space-y-12">
          {/* ABOUT */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-[#000]">
              About Doctor
            </h2>

            <p className="text-gray-600 leading-7 text-[15px]">
              Dr. Katikareddy V is a highly experienced Senior Surgical
              Oncologist with over two decades of expertise in cancer treatment
              and surgical care. She specializes in complex oncological
              procedures and is known for her patient-centric approach,
              precision, and commitment to excellence.
            </p>

            <p className="text-gray-600 leading-7 text-[15px] mt-4">
              Her clinical interests include gastrointestinal oncology,
              minimally invasive cancer surgeries, and advanced tumor management
              techniques. She has been associated with reputed institutions and
              has contributed significantly to improving patient outcomes.
            </p>
          </div>

          {/* PROFESSIONAL DETAILS */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-[#0b2c4d]">
              Professional Details
            </h2>

            <div className="space-y-4 text-[15px]">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Specialization</span>
                <span className="font-medium">Surgical Oncology</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Experience</span>
                <span className="font-medium">22+ Years</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Current Role</span>
                <span className="font-medium">
                  Director & Chief Surgical Oncologist
                </span>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-[#0b2c4d]">
              Education & Training
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-[15px]">
              <li>MBBS – Recognized Medical Institution</li>
              <li>MS (General Surgery)</li>
              <li>DNB – Surgical Oncology</li>
              <li>Advanced Fellowship in Gastroenterology</li>
            </ul>
          </div>
        </div>
      </div>
      <AboutDoctors />
      <div className="block xl:hidden">
        <BookAppointmentMobile />
      </div>
      {/* Desktop */}
      <div className="hidden xl:block my-20">
        <BookAppointment />
      </div>
    </div>
  );
}
