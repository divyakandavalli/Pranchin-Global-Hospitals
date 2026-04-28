import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import SPECIALITIES from "../../specialities/specialities";
export default function BookAppointmentMobile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: null,
    date: null,
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.department) newErrors.department = "Please select department";

    if (!formData.date) newErrors.date = "Please select date";

    if (!formData.time) newErrors.time = "Please select time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    setSubmitted(true);

    if (!validate()) return;

    const payload = {
      ...formData,
      date: formData.date ? dayjs(formData.date).format("YYYY-MM-DD") : "",
    };

    console.log("Form Submitted Data:", payload);

    alert("Form Submitted Successfully ✅");

    // reset
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: null,
      date: null,
      time: "",
      message: "",
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="w-[92%] mx-auto pt-10">
      {/* CONTENT (UNCHANGED) */}
      <div className="mb-8">
        <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 py-1 rounded-full uppercase">
          Easy Access
        </span>

        <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope mt-4 font-semibold leading-tight">
          Book Your Medical <br />
          Appointment <br />
          <span className="italic font-light font-instrumental text-[#f5d1b9]">
            Quickly and Easily
          </span>
        </h2>

        <p className="text-[#2f373e] text-[14px] text-left  xl:w-auto max-w-2xl font-manrope mt-4">
          Schedule your healthcare visit in just a few steps. Fill out the form
          below and our team will confirm your appointment immediately.
        </p>

        <Link
          to="/contact"
          className="group mt-8 flex items-center bg-[#094ca0] text-white px-6 py-3 rounded-full w-fit gap-4 border"
        >
          Get Free Consultation <EastIcon />
        </Link>
      </div>

      {/* FORM */}
      <div className="bg-[#094ca0] p-5 rounded-[16px]">
        <div className="grid grid-cols-1 gap-4">
          {/* FULL NAME */}
          <div>
            <input
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                setErrors((p) => ({ ...p, fullName: "" }));
              }}
              placeholder="Full Name"
              className={`p-3 rounded-lg border w-full ${
                submitted && errors.fullName ? "border-red-500" : ""
              }`}
            />
            {submitted && errors.fullName && (
              <p className="text-red-400 text-sm">{errors.fullName}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors((p) => ({ ...p, email: "" }));
              }}
              placeholder="Email"
              className={`p-3 rounded-lg border w-full ${
                submitted && errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {submitted && errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              value={formData.phone}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phone: value });
                setErrors((p) => ({ ...p, phone: "" }));
              }}
              placeholder="Phone"
              className={`p-3 rounded-lg border w-full ${
                submitted && errors.phone ? "border-red-500" : ""
              }`}
            />
            {submitted && errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* DEPARTMENT */}
          <div>
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

          {/* DATE */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formData.date}
              onChange={(newValue) => {
                setFormData({ ...formData, date: newValue });
                setErrors((p) => ({ ...p, date: "" }));
              }}
              disablePast
              slotProps={{
                textField: {
                  error: submitted && !!errors.date,
                  sx: {
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  },
                },
              }}
            />
          </LocalizationProvider>

          {/* TIME */}
          <div>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => {
                setFormData({ ...formData, time: e.target.value });
                setErrors((p) => ({ ...p, time: "" }));
              }}
              className={`p-3 rounded-lg border w-full ${
                submitted && errors.time ? "border-red-500" : ""
              }`}
            />
            {submitted && errors.time && (
              <p className="text-red-400 text-sm">{errors.time}</p>
            )}
          </div>

          {/* MESSAGE */}
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="3"
            placeholder="Message"
            className="p-3 rounded-lg"
          />
        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="mt-8 flex items-center gap-4 border text-[#f37721] border-[#f37721] px-6 py-3 rounded-full"
        >
          Submit Details <EastIcon />
        </button>
      </div>
    </div>
  );
}
