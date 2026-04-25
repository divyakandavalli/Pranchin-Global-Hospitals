import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete, TextField } from "@mui/material"; 
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/images/gallery_photos/image (1).jpg";
import img2 from "../../assets/images/gallery_photos/image (2).jpg";
import img3 from "../../assets/images/gallery_photos/image (3).jpg";
import img4 from "../../assets/images/gallery_photos/image (4).jpg";
import img5 from "../../assets/images/gallery_photos/image (5).jpg";
import img6 from "../../assets/images/gallery_photos/image (6).jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import SPECIALITIES from "../../specialities/specialities";
const ContactUsFrom = () => {
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
    <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%]  mx-auto md:pt-24 pt-12 xl:pt-32 md:pb-16 pb-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
        <div className="flex flex-col justify-center  gap-8">
          <div className=" flex flex-col items-start  gap-6">
            <div>
              <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
                Get Support
              </span>
            </div>
            <h2 className="xl:text-[64px]  md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
              We’re Here To Help
              <br />
              <span className="text-[#f37721] font-normal italic font-instrumental">
                You Anytime Support
              </span>
            </h2>
            <p className="text-lg font-normal xl:pe-20  text-[#66686C]">
              Reach out to our friendly team for appointments, inquiries, or
              support. We are committed to responding quickly and guiding you to
              care.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Marquee pauseOnHover={true}>
              <img
                src={img1}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img2}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img3}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img4}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img5}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img6}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img1}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img2}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img3}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img4}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
            </Marquee>
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
      <div className="flex lg:flex-row flex-col gap-6 mt-16 font-manrope">
        <div className=" xl:w-[415px] lg:w-1/3  flex flex-col gap-6 ">
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Let's talk</h4>
            <p className="text-lg text-[#66686C]">
              <span>Phone : +91 7337332943 </span>
              <br />
              <span>24/7 Emergency : +91 7337332943</span>
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <EmailIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
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
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Email support</h4>
            <p className="text-lg text-[#66686C]">
              <span>support@prachinhospital.com</span>
              <br />
              <span>hello@prachinhospital.com</span>
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <LocalPhoneIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
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
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Hospital address</h4>
            <p className="text-lg text-[#66686C]">
             Indresham Rd, Patancheruvu, Hyderabad, Telangana 502319
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <LocationPinIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
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
        </div>
        <div className="  rounded-xl xl:w-[950px] lg:w-2/3 w-full lg:h-auto md:h-[400px] h-[300px]">
            <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.664880662235!2d78.25844797516845!3d17.540409983373156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf37bb130cd95%3A0x6ba76988c49cf127!2sPrachin%20Global%20Hospitals!5e1!3m2!1sen!2sin!4v1774965355262!5m2!1sen!2sin" width="100%" height="100%" title="map-prachin-hospital" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFrom;
