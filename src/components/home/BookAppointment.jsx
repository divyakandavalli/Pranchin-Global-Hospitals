import React from "react";
import EastIcon from "@mui/icons-material/East";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BackgroundDoctor from '../../assets/images/portrait-happy-successful-hindu-doctor-young-medical-practitioner-smiling-looking.jpg'
export default function BookAppointment() {
  return (
    <div className="max-w-[95%] mx-auto">
      {/* MAIN CONTAINER */}
      <div className="relative rounded-[24px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
  backgroundImage: `url(${BackgroundDoctor})`,
}}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#61ce7000_0%,#010813_100%)] opacity-80" />

        {/* CONTENT */}
        <div className="relative flex flex-col xl:flex-row gap-x-[150px] gap-y-[150px] py-[150px] px-[56px] pr-0 rounded-[24px]">
          {/* LEFT CONTENT */}
          <div className="text-white w-full xl:w-[45%] flex flex-col justify-between items-start">
            <span className="bg-white/20 tracking-wider font-manrope uppercase text-[16px] px-4 py-1 rounded-full backdrop-blur-md">
              EASY ACCESS
            </span>

            <h2 className="text-4xl font-manrope md:text-[64px] font-semibold leading-tight">
              Book Your Medical <br />
              Appointment <br />
              <span className="italic font-light font-instrumental text-[#f5d1b9]">
                Quickly and Easily
              </span>
            </h2>

            <p className="text-white leading-[26px] text-[18px] font-manrope  mb-20 w-[75%]">
              Schedule your healthcare visit in just a few steps. Fill out the
              form below and our team will confirm your appointment immediately.
            </p>

            {/* BUTTON */}
         <button className="group flex items-center justify-between bg-[#f37721] text-white px-6 py-3 rounded-full w-fit gap-4 hover:bg-[#094ca0] transition-colors duration-300">

  <span className="font-medium font-manrope text-[16px] capitalize">
    Get Free Consultation
  </span>

  {/* Arrow Circle */}
  <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300
    group-hover:bg-[#E5F4FF] group-hover:text-[#094ca0]">
    
    <EastIcon fontSize="small" />
  </span>

</button>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full xl:w-[55%] bg-white border-white border-t-[12px] border-l-[12px] flex flex-col rounded-tl-[24px] -mb-[150px] relative">
            <div className=" ">
              <div className="flex flex-col bg-[#094ca0] p-[48px] rounded-[16px]  ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-full">
                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Peter Johnson"
                      className="w-full p-3 rounded-lg bg-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. hello@healix.com"
                      className="w-full p-3 rounded-lg bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white block">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 0812 3456 7890"
                      className="w-full p-3 rounded-lg bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white block">
                      Select
                    </label>
                    <select className="w-full p-3 rounded-lg bg-white outline-none">
                      <option>Select</option>
                      <option>General</option>
                      <option>Dental</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white  block">
                      Date
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        format="MM/DD/YYYY"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            placeholder: "MM/DD/YYYY",
                            sx: {
                              backgroundColor: "#fff",
                              borderRadius: "8px",

                              "& .MuiOutlinedInput-root": {
                                height: "48px",
                                borderRadius: "8px",
                                backgroundColor: "#fff",
                                fontFamily: "Manrope",

                                // 🚫 remove border always
                                "& fieldset": {
                                  border: "none",
                                },

                                // 🚫 remove border on hover
                                "&:hover fieldset": {
                                  border: "none",
                                },

                                // 🚫 remove border on focus
                                "&.Mui-focused fieldset": {
                                  border: "none",
                                },
                              },

                              "& input": {
                                padding: "12px",
                                fontSize: "16px",
                                fontFamily: "Manrope",
                              },
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>

                  <div>
                    <label className="text-[16px] font-manrope mb-[12px] text-white block">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full p-3 rounded-lg bg-white outline-none"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-[32px] font-manrope">
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="write your message here..."
                    className="w-full p-3 rounded-lg bg-white outline-none"
                  />
                </div>

                {/* BUTTON */}
                    <button className=" flex items-center justify-between bg-[#f37721] text-white px-6 py-3 rounded-full w-fit gap-4  transition mt-8">

              <span className="font-medium font-manrope text-[16px] capitalize">Submit Details</span>

              {/* Arrow Circle */}
              <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                <EastIcon fontSize="small" />
              </span>

            </button>
              </div>
            </div>
            <div className="absolute right-0 -top-[45px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
              <div className=" w-[32px] h-full self-start shrink-0">
                <div className="h-[32px]"></div>
              </div>
            </div>
            <div className="absolute bottom-0 -left-[44px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF] p-0 max-w-full">
              <div className=" w-[32px] h-full self-start shrink-0">
                <div className="h-[32px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
