import React, { useState, useRef } from "react";
import EastIcon from "@mui/icons-material/East";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    qualification: "",
    position: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleanedValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData({
        ...formData,
        [name]: cleanedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear errors while typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle File Change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setFile(selectedFile);

    if (selectedFile) {
      setErrors({
        ...errors,
        file: "",
      });
    }
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
      isValid = false;
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
      isValid = false;
    }

    if (!file) {
      newErrors.file = "CV is required";
      isValid = false;
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.file = "File size must be less than 5MB";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    const submitData = new FormData();

    submitData.append("name", formData.name.trim());
    submitData.append("surname", formData.surname.trim());
    submitData.append("phone", formData.phone.trim());
    submitData.append("email", formData.email.trim());
    submitData.append("qualification", formData.qualification.trim());
    submitData.append("position", formData.position.trim());
    submitData.append("resume", file);

    try {
      const response = await fetch("/apply.php", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.type === "success") {
        setStatus({
          type: "success",
          message: result.message || "Application submitted successfully!",
        });

        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          qualification: "",
          position: "",
        });

        setFile(null);
        setErrors({});

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setStatus({
          type: "error",
          message: result.message || "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Network Error:", error);

      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#094ca0] xl:p-12 md:p-8 p-6 rounded-3xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 max-w-full">
          {/* Name */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.name ? "border border-red-500" : ""
              }`}
            />

            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Surname */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Surname
            </label>

            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.surname ? "border border-red-500" : ""
              }`}
            />

            {errors.surname && (
              <p className="text-red-400 text-xs mt-1">{errors.surname}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Contact Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter contact number"
              maxLength={10}
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.phone ? "border border-red-500" : ""
              }`}
            />

            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
            />

            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Qualification */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Qualification
            </label>

            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Enter qualification"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.qualification ? "border border-red-500" : ""
              }`}
            />
            {errors.qualification && (
              <p className="text-red-400 text-xs mt-1">
                {errors.qualification}
              </p>
            )}
          </div>

          {/* Position Looking For */}
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Position Looking For
            </label>

            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter position"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${
                errors.position ? "border border-red-500" : ""
              }`}
            />

            {errors.position && (
              <p className="text-red-400 text-xs mt-1">{errors.position}</p>
            )}
          </div>
        </div>

        {/* Attach CV */}
        <div className="mt-4 font-manrope">
          <label className="text-sm font-manrope mb-[12px] text-white block">
            Attach Your CV
          </label>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className={`w-full text-sm p-3 rounded-lg bg-white outline-none ${
              errors.file ? "border border-red-500" : ""
            }`}
          />

          {errors.file && (
            <p className="text-red-400 text-xs mt-1">{errors.file}</p>
          )}
        </div>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-4 text-sm font-medium ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-white duration-300 transition-all text-white px-6 py-2 rounded-full w-fit gap-4 mt-8 disabled:opacity-70"
        >
          <span className="font-medium font-manrope text-[14px] capitalize">
            {loading ? "Submitting..." : "Apply"}
          </span>

          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            <EastIcon fontSize="small" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
