// ApplicationForm.jsx
import React, { useState, useRef } from "react";
import EastIcon from "@mui/icons-material/East";

const ApplicationForm = ({ defaultPosition = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: defaultPosition,
    message: "",
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
      // Allow only numbers and limit to 10 digits
      const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: cleanedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle File Change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setErrors({ ...errors, file: "" });
    }
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Strict 10-digit phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
      isValid = false;
    }

    if (!file) {
      newErrors.file = "Resume/CV is required";
      isValid = false;
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.file = "File size must be less than 5MB";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    const submitData = new FormData();
    submitData.append("fullName", formData.fullName.trim());
    submitData.append("email", formData.email.trim());
    submitData.append("phone", formData.phone.trim());
    submitData.append("position", formData.position.trim());
    submitData.append("message", formData.message.trim());
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
          fullName: "",
          email: "",
          phone: "",
          position: defaultPosition,
          message: "",
        });

        setFile(null);
        setErrors({});

        // ✅ Reset file input UI
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 max-w-full">
          <div>
            <label className="text-sm font-manrope mb-[12px] text-white block">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Peter Johnson"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${errors.fullName ? "border border-red-500" : ""}`}
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="text-[14px] font-manrope mb-[12px] text-white block">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. hello@healix.com"
              className={`w-full p-3 text-sm rounded-lg bg-white outline-none ${errors.email ? "border border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-[14px] font-manrope mb-[12px] text-white block">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              maxLength={10}
              className={`w-full text-sm p-3 rounded-lg bg-white outline-none ${errors.phone ? "border border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-[14px] font-manrope mb-[12px] text-white block">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Doctor/Nurse/Compounder"
              className={`w-full text-sm p-3 rounded-lg bg-white outline-none ${errors.position ? "border border-red-500" : ""}`}
            />
            {errors.position && (
              <p className="text-red-400 text-xs mt-1">{errors.position}</p>
            )}
          </div>
        </div>

        <div className="mt-3 font-manrope">
          <label className="text-[14px] font-manrope mb-[12px] text-white block">
            Resume/CV
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            className={`w-full text-sm p-3 rounded-lg bg-white outline-none ${errors.file ? "border border-red-500" : ""}`}
          />
          {errors.file && (
            <p className="text-red-400 text-xs mt-1">{errors.file}</p>
          )}
        </div>

        <div className="mt-3 font-manrope">
          <label className="text-[14px] font-manrope mb-[12px] text-white block">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="write your message here..."
            className="w-full text-sm p-3 rounded-lg bg-white outline-none"
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-4 text-sm font-medium ${status.type === "success" ? "text-green-400" : "text-red-400"}`}
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
            {loading ? "Submitting..." : "Submit Details"}
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
