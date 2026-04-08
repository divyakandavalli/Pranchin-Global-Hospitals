import React from "react";
import EastIcon from "@mui/icons-material/East";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
export default function BookAppointmentMobile() {
  return (
    <div className="w-[92%] mx-auto py-10">

      {/* CONTENT */}
      <div className="mb-8">
        <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 sm:px-4 py-1 rounded-full tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[14px] md:text-[16px] uppercase">
          Easy Access
        </span>

        <h2 className="text-4xl md:text-[44px] font-manrope 3xl:text-[64px]  font-semibold mt-4 leading-tight text-black">
          Book Your Medical Appointment
          <span className="italic font-light font-instrumental text-[#f37721] block">
            Quickly & Easily
          </span>
        </h2>

        <p className="text-[14px] md:text-[16px] 3xl:text-[18px] mt-3 leading-6 text-gray-600 font-manrope">
          Fill the form and our team will confirm your appointment.
        </p>

        <Link to='/contact' className="group mt-8 flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition">
          <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize">
            Get Free Consultation
          </span>
          <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-lg transition 
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]">
            <EastIcon fontSize="small" />
          </span>
        </Link>
      </div>

      {/* FORM */}
      <div className="bg-[#094ca0] p-5 rounded-[16px]">

        <div className="grid grid-cols-1 gap-4">

          <input placeholder="Full Name" className="p-3 rounded-lg" />
          <input placeholder="Email" className="p-3 rounded-lg" />
          <input placeholder="Phone" className="p-3 rounded-lg" />

          <select className="p-3 rounded-lg">
            <option>Select</option>
            <option>General</option>
            <option>Dental</option>
          </select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="MM/DD/YYYY"
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: {
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    "& fieldset": { border: "none" },
                  },
                },
              }}
            />
          </LocalizationProvider>

          <input type="time" className="p-3 rounded-lg" />

          <textarea
            rows="3"
            placeholder="Message"
            className="p-3 rounded-lg"
          />
        </div>

        <button className="group mt-8 flex items-center justify-between px-6 py-3 rounded-full w-fit gap-4 border text-[#f37721] border-[#f37721] transition">
          <span className="text-[14px] font-manrope">
            Submit Details
          </span>
          <span className="bg-[#f5d1b9] rounded-full w-8 h-8 flex items-center justify-center">
            <EastIcon fontSize="small" />
          </span>
        </button>
      </div>
    </div>
  );
}