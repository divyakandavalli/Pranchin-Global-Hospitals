import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete, TextField } from "@mui/material"; // ← Added
import BackgroundDoctor from "../../assets/images/aboutpage-02.jpg";
import { Link } from "react-router-dom";

import SPECIALITIES from "../../specialities/specialities";

export default function BookAppointment({ className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: null, // Changed to null for Autocomplete object
    date: null,
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

   if (!formData.email.trim()) {
  newErrors.email = "Email is required";
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  newErrors.email = "Enter a valid email address";
}

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.department) {
      newErrors.department = "Please select department";
    }

    if (!formData.date) {
      newErrors.date = "Please select date";
    }

    if (!formData.time) {
      newErrors.time = "Please select time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // ✅ REMOVE ERROR WHEN USER TYPES
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleDepartmentChange = (event, newValue) => {
    setFormData((prev) => ({ ...prev, department: newValue }));

    // ✅ clear error
    setErrors((prev) => ({
      ...prev,
      department: "",
    }));
  };
  // Updated handleSubmit
  const handleSubmit = async () => {
    setSubmitted(true);
    if (!validate()) return;
    const payload = {
      ...formData,
      department: formData.department?.title || "",
      date: formData.date ? formData.date.format("YYYY-MM-DD") : "",
    };

    console.log("Form Submitted Data:", payload);

    try {
      const response = await fetch("/contact-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.type === "success") {
        console.log("✅ Success Response:", result);
        alert(result.message);

        // ✅ RESET FORM (instead of handleClose)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          department: null,
          date: null,
          time: "",
          message: "",
        });
      } else {
        console.error("❌ Error Response:", result);
        alert(result.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className={`max-w-[95%] mx-auto py-5 ${className}`}>
      <div className="relative rounded-[24px] overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${BackgroundDoctor})`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#61ce7000_0%,#010813_100%)] opacity-80" />

        <div className="relative flex flex-col xl:flex-row gap-x-[50px]  pt-[50px] px-[56px] pr-0 rounded-[24px]">
          {/* Left Content */}
          <div className="text-white w-full xl:w-[45%] flex flex-col items-start">
            <span className="bg-white/20 tracking-wider font-manrope uppercase text-[16px] px-4 py-1 rounded-full backdrop-blur-md">
              EASY ACCESS
            </span>

            <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope  font-semibold leading-tight">
              Book Your Medical <br />
              Appointment <br />
              <span className="italic font-light font-instrumental text-[#f5d1b9]">
                Quickly and Easily
              </span>
            </h2>

            <p className="text-white leading-[26px] text-[12px] md:text-[14px] 3xl:text-[15px] font-manrope w-[75%] my-5">
              Schedule your healthcare visit in just a few steps. Fill out the
              form below and our team will confirm your appointment immediately.
            </p>

            <Link
              to="/contact"
              className="group flex items-center justify-between bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094ca0] hover:bg-transparent hover:text-[#f37721] hover:border-[#f37721] transition-all duration-300 absolute bottom-14"
            >
              <span className="font-medium font-manrope text-[12px] md:text-[14px] 3xl:text-[15px] capitalize">
                Get Free Consultation
              </span>
              <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]">
                <EastIcon fontSize="small" />
              </span>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full xl:w-[55%] bg-white border-white border-t-[12px] border-l-[12px] flex flex-col rounded-tl-[24px]  relative">
            <div className="p-[28px] bg-[#094ca0] rounded-[16px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Peter Johnson"
                    className={`w-full p-3 rounded-lg bg-white outline-none border ${
                      submitted && errors.fullName
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-[15px] mt-1 font-manrope">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. hello@healix.com"
                    className={`w-full p-3 rounded-lg bg-white outline-none border ${
                      submitted && errors.email
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[15px] font-manrope mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      setFormData((prev) => ({ ...prev, phone: value }));

                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full p-3 rounded-lg bg-white outline-none border ${
                      submitted && errors.phone
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-[15px] font-manrope mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* === AUTOCOMPLETE FOR DEPARTMENT === */}
                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Department
                  </label>
                  <Autocomplete
                    options={SPECIALITIES}
                    getOptionLabel={(option) => option.title}
                    value={formData.department}
                    onChange={(event, newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        department: newValue,
                      }));

                      setErrors((prev) => ({
                        ...prev,
                        department: "",
                      }));
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Select Department"
                        // ✅ ERROR STATE
                        error={submitted && !!errors.department}
                  
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: "8px",

                          "& .MuiOutlinedInput-root": {
                            height: "48px",
                            borderRadius: "8px",
                            backgroundColor: "#fff",

                            // ✅ RED BORDER WHEN ERROR
                            "& fieldset": {
                              border:
                                submitted && errors.department
                                  ? "1px solid red"
                                  : "none",
                            },
                          },
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      option.slug === value?.slug
                    }
                  />
                  {errors.department && (
                    <p className="text-red-400 text-[15px] font-manrope mt-1">
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Date
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={formData.date}
                      onChange={(newValue) => {
                        setFormData((prev) => ({ ...prev, date: newValue }));

                        setErrors((prev) => ({
                          ...prev,
                          date: "",
                        }));
                      }}
                      disablePast
                      format="MM/DD/YYYY"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          placeholder: "MM/DD/YYYY",

                          // ✅ ERROR STATE
                          error: submitted && !!errors.date,

                          sx: {
                            backgroundColor: "#fff",
                            borderRadius: "8px",

                            "& .MuiOutlinedInput-root": {
                              height: "48px",
                              borderRadius: "8px",
                              backgroundColor: "#fff",

                              // ✅ RED BORDER WHEN ERROR
                              "& fieldset": {
                                border:
                                  submitted && errors.date
                                    ? "1px solid red"
                                    : "none",
                              },
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {errors.date && (
                    <p className="text-red-400 text-[15px] font-manrope mt-1">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[16px] font-manrope mb-[12px] text-white block">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-white outline-none border ${
                      submitted && errors.time
                        ? "border-red-500"
                        : "border-transparent"
                    }`}
                  />
                  {errors.time && (
                    <p className="text-red-400 text-[15px] font-manrope mt-1">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-[32px]">
                <label className="text-[16px] font-manrope mb-[12px] text-white block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="write your message here..."
                  className="w-full p-3 rounded-lg bg-white outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-between border border-[#f37721] text-[#f37721] px-6 py-3 rounded-full w-fit gap-4 mt-8 hover:bg-[#f37721] hover:text-white transition-all duration-300"
              >
                <span className="font-medium font-manrope text-[16px] capitalize">
                  Send Details
                </span>
                <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                  <EastIcon fontSize="small" />
                </span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-0 -top-[45px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF]">
              <div className="w-[32px] h-full self-start shrink-0">
                <div className="h-[32px]"></div>
              </div>
            </div>
            <div className="absolute bottom-0 -left-[44px] w-[32px] h-[32px] flex flex-col rounded-br-[16px] shadow-[8px_4px_0px_0px_#FEFEFF]">
              <div className="w-[32px] h-full self-start shrink-0">
                <div className="h-[32px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
