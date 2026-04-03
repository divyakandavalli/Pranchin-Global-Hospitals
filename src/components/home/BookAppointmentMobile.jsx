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
        <span className="bg-black/10 font-manrope text-[13px] px-3 py-1 rounded-full uppercase">
          Easy Access
        </span>

        <h2 className="text-[28px] font-semibold font-manrope leading-tight mt-4">
          Book Your Medical Appointment
          <span className="block italic font-light text-[#f37721] font-instrumental">
            Quickly & Easily
          </span>
        </h2>

        <p className="text-[14px] mt-3 leading-6 text-gray-600 font-manrope">
          Fill the form and our team will confirm your appointment.
        </p>

        <Link to='/contact' className="mt-5 flex items-center justify-center gap-3 bg-[#094ca0] text-white px-5 py-2.5 rounded-full text-center">
          <span className="text-[14px] font-manrope">
            Get Free Consultation
          </span>
          <span className="bg-white text-[#094ca0] rounded-full w-8 h-8 flex items-center justify-center">
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

        <button className="mt-6 flex items-center justify-between border border-[#f37721] text-[#f37721] px-5 py-2.5 rounded-full w-full">
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