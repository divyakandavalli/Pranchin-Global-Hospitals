import React, { useState } from "react";
import bannerimg from "../../assets/images/patient_resource.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EastIcon from "@mui/icons-material/East";
import Insurances from "../common/Insurances";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete, TextField } from "@mui/material"; 
import SPECIALITIES from "../../specialities/specialities";
const PatientResources = () => {
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
  const resources = [
    {
      id: 1,
      title: "Health Checkup Guidelines",

      desc: "Learn how to prepare for your health checkups and screenings.",
    },
    {
      id: 2,
      title: "Medical Reports Guide",

      desc: "Understand your lab reports and medical test results easily.",
    },
    {
      id: 3,
      title: "Insurance & Billing",

      desc: "Information about insurance claims and billing process.",
    },
    {
      id: 4,
      title: "Emergency Support",

      desc: "Quick access to emergency numbers and hospital contacts.",
    },
  ];

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
      <div
        className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[bottom_center] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#010813]/70" />

        {/* Content */}
        <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
          <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
            Patient Resources
          </h1>

          <div className="flex items-center justify-center text-base font-manrope">
            <a href="/">Home</a>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <a className="text-[#f37721]" href="/about">
              Patient Resources
            </a>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%] font-manrope  mx-auto md:pt-16 pt-12  md:pb-10 pb-0">
        {/* Hero Section */}
        <div className=" text-center pb-8 ">
          <h2 className=" md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
            Helpful{" "}
            <span className="text-[#f37721] font-normal italic font-instrumental">
              Resources
            </span>
          </h2>
          <p className="">
            Access important health information, guides, and support resources
            to help you manage your healthcare journey.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <div
                key={item.id}
                className="flex relative justify-between group items-center bg-[#c8dded] px-5 py-6 rounded-[14px]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#5187af] font-manrope">
                    {item.title}
                  </h3>
                  <p className="text-sm  mt-2 pe-10 font-manrope">
                    {item.desc}
                  </p>
                </div>

                <div className="w-16 absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-1 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
                  <div className=" flex-col gap-2 z-10  w-12 h-12 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                    <EastIcon
                      fontSize="32px"
                      className="text-xl  text-[#5187af]"
                    />
                  </div>{" "}
                  <div className="absolute -left-8 top-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                    <div className="w-8">
                      <div className="w-8">
                        <div className="h-8"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 right-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                    <div className="w-8">
                      <div className="w-8">
                        <div className="h-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="">
              <h2 className="text-2xl font-medium text-left mb-8">
                Downloadable Guides
              </h2>

              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  "Pre-Checkup Instructions PDF",
                  "Diet & Nutrition Guide",
                  "Post-Treatment Care Guide",
                ].map((doc, index) => (
                  <button
                    key={index}
                    className="flex  w-full justify-between items-center border group hover:border-[#f37721]  p-4 rounded-2xl hover:text-[#f37721] border-[#094ca0] text-[#094ca0]"
                  >
                    <span>{doc}</span>
                    <p className="text-blue-600 group-hover:text-[#f37721] transition-all group-hover:duration-200 font-medium">
                      Download
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Insurances />
      </div>

      <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%]  mx-auto  md:pb-20 pb-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
          <div className="flex flex-col  gap-8">
            <div className=" flex flex-col items-start  gap-6">
              <div>
                <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
                  Contact Now
                </span>
              </div>
              <h2 className=" md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
                Need Immediate{" "}
                <span className="text-[#f37721] font-normal italic font-instrumental">
                  Assistance?
                </span>
              </h2>
              <p className="text-lg font-normal xl:pe-20  text-[#66686C]">
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
                    <h4 className="font-semibold text-[14px] sm:text-[16px] md:text-[21px] text-[#094ca0]">
                      {item.q}
                    </h4>

                    <span className="text-lg sm:text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <p className="text-[#2f373e] mt-2 sm:mt-3 p-3 sm:p-4 md:p-5 text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-[48px] bg-[#094ca0] rounded-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
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
        </div>
      </div>
    </>
  );
};

export default PatientResources;
