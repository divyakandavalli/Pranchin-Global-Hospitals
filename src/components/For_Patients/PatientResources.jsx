import React, { useEffect, useState } from "react";
import bg_image from "../../assets/images/about_illu.jpg";

import EastIcon from "@mui/icons-material/East";
import Insurances from "../common/Insurances";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete, TextField } from "@mui/material"; 
import SPECIALITIES from "../../specialities/specialities";
const PatientResources = () => {

   useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },[]);
  const [openIndex, setOpenIndex] = useState(0);
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
      // const handleDepartmentChange = (event, newValue) => {
      //   setFormData((prev) => ({ ...prev, department: newValue }));
    
        
      //   setErrors((prev) => ({
      //     ...prev,
      //     department: "",
      //   }));
      // };
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
  

  const faqs = [
    {
      q: "How to book an appointment?",
      a: "You can book an appointment online through our Contact Us page or call our support number.",
    },
    {
      q: "Do I need fasting before tests?",
      a: "Yes, for certain tests like blood sugar, fasting for 8–10 hours is recommended.",
    },
    {
      q: "How can I access my reports?",
      a: "Reports can be accessed online via the patient portal or collected from the hospital.",
    },
  ];

  return (
    <>
     <div className=" w-full xl:bg-fixed relative mx-auto   overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="w-full">
        <img src={bg_image} alt="" className="w-full  h-auto " />
      </div>
      <div className="text-center top-0 absolute text-white z-10 flex flex-col justify-center items-center w-full h-full xl:gap-6 gap-2">
        <h1 className="xl:text-8xl lg:text-6xl md:text-4xl font-manrope font-semibold">
          Patient Resources
        </h1>
      </div>
    </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%] font-manrope  mx-auto  pb-0">

        <Insurances />
      </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%]  mx-auto pb-10 pt-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
          <div className="flex flex-col  gap-8">
            <div className=" flex flex-col items-start  gap-6">
              <div>
                <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
                  Contact Now
                </span>
              </div>
              <h2 className=" text-[22px] md:text-[34px] 3xl:text-[42px]font-semibold ">
                Need Immediate{" "}
                <span className="text-[#f37721] font-normal italic font-instrumental">
                  Assistance?
                </span>
              </h2>
              <p className="text-[14px] 3xl:text-[15px] font-normal xl:pe-20  text-[#66686C]">
                Reach out to our friendly team for appointments, inquiries, or
                support. We are committed to responding quickly and guiding you
                to care.
              </p>
            </div>

            <div className=" space-y-3 sm:space-y-4 font-manrope">
              {faqs.map((item, index) => (
                <div key={index} className="cursor-pointer">
                  {/* Question */}
                  <div
                    className="bg-[#c8dded] rounded-[10px] sm:rounded-[12px] p-3 sm:p-4 md:p-5 flex justify-between items-center"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h4 className="font-semibold text-[16px] md:text-[18px] text-[#094ca0]">
                      {item.q}
                    </h4>

                    <span className="text-[16px] md:text-[18px]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <p className="text-[#2f373e] mt-2 sm:mt-3 p-3 sm:p-4 md:p-5 text-[14px] 3xl:text-[15px] rounded-xl bg-[#e1f1fd]">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        <div className="p-[48px] bg-[#094ca0] rounded-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <label className="text-sm font-manrope mb-2 text-white block">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Peter Johnson"
                className={`w-full p-3 text-sm  rounded-lg bg-white outline-none border ${
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
              <label className="text-sm font-manrope mb-[12px] text-white block">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. hello@healix.com"
                className={`w-full p-3 rounded-lg text-sm  bg-white outline-none border ${
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
              <label className="text-sm  font-manrope mb-[12px] text-white block">
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
                className={`w-full p-3 rounded-lg text-sm  bg-white outline-none border ${
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
              <label className="text-sm  font-manrope mb-[12px] text-white block">
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
                      fontSize:"14px",

                      "& .MuiOutlinedInput-root": {
                        height: "46px",
                        borderRadius: "8px",
                        backgroundColor: "#fff",fontSize:"14px",

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
              <label className="text-sm  font-manrope mb-[12px] text-white block">
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
                        borderRadius: "8px",fontSize:"14px",

                        "& .MuiOutlinedInput-root": {
                          height: "40px",
                          borderRadius: "8px",
                          backgroundColor: "#fff",fontSize:"14px",

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
              <label className="text-sm  font-manrope mb-[12px] text-white block">
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
          <div className="mt-2">
            <label className="text-sm  font-manrope mb-[12px] text-white block">
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
            <span className="font-medium font-manrope text-sm  capitalize">
              Send Details
            </span>
            <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
              <EastIcon fontSize="small" />
            </span>
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default PatientResources;
