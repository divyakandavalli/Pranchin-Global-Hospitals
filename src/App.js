import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Autocomplete, TextField } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X"; // ✅ Twitter → X
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // ✅ NEW
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Components
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Lenis from "@studio-freight/lenis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Gallery from "./pages/Gallery";
import DoctorsPage from "./pages/DoctorsPage";
import Servicespage from "./pages/Servicespage";
import SingleService from "./pages/SingleService";
import ContactUs from "./pages/ContactUs";
import CareersPage from "./pages/CareersPage";
import HealthPackagesPage from "./pages/HealthPackagesPage";
import BlogPages from "./pages/BlogPages";
import BlogsSingle from "./components/Blogs/BlogsSingle";
import HappyPatients from "./components/common/HappyPatients";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import SpecialOfferPage from "./pages/SpecialOfferPage";
import PatientServices from "./components/For_Patients/PatientServices";
import PatientResources from "./components/For_Patients/PatientResources";
// Data
import SPECIALITIES from "./specialities/specialities";
// MUI Dialog
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import NotFound from "./components/NotFound";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    date: null,
    time: "",
    message: "",
  });

  // ✅ NEW STATES
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      date: null,
      time: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!form.department) newErrors.department = "Please select department";

    if (!form.date) newErrors.date = "Please select date";
    if (!form.time) newErrors.time = "Please select time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    setSubmitted(true);

    if (!validate()) return;

    const payload = {
      ...form,
      date: form.date ? dayjs(form.date).format("YYYY-MM-DD") : "",
    };
    try {
      const response = await fetch("/contact-form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.type === "success") {
        toast.success(result.message);
        handleClose();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  const services = SPECIALITIES;
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness level
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* Spacer */}
      <div className="h-[180px] lg:h-[150px] xl:h-[120px]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors-profile" element={<DoctorDetails />} />
        <Route path="/specialities" element={<Servicespage />} />
        <Route path="/specialities/:slug" element={<SingleService />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blogs" element={<BlogPages />} />
        <Route path="/health-packages" element={<HealthPackagesPage />} />
        <Route path="/blog-details" element={<BlogsSingle />} />
        <Route path="/happy-patients" element={<HappyPatients />} />
        <Route path="/special-offers" element={<SpecialOfferPage />} />

        <Route path="/patient-services" element={<PatientServices />} />
        <Route path="/patient-resources" element={<PatientResources />} />
        <Route path="/special-offers" element={<SpecialOfferPage />} />
        <Route path="/patient-services" element={<PatientServices />} />
        <Route path="/patient-resources" element={<PatientResources />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Vertical Contact Button */}
      <div
        onClick={handleClickOpen}
        className="fixed right-[-6px] hover:right-0 xl:top-1/3 3xl:top-1/3 -translate-y-1/2 z-40
        bg-[#f37721] text-white w-[50px] h-[120px]
        rounded-l-2xl shadow-xl flex items-center justify-center
        cursor-pointer transition-all duration-300"
      >
        <span className="-rotate-90 whitespace-nowrap font-medium">
          Contact Us
        </span>
      </div>
      {/* Social Media Floating Bar */}
      <div className="fixed right-[-120px] bottom-5 flex flex-col gap-3 z-40">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Prachin-Global-Hospitals/61572763597942/"
          title="Facebook"
          className="group flex items-center bg-[#1877F2] text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <FacebookOutlinedIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            Facebook
          </span>
        </a>
        <a
          href="https://www.linkedin.com/company/prachin-global-hospitals"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#0A66C2] text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <LinkedInIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            LinkedIn
          </span>
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/Prachinhospital"
          title="X"
          className="group flex items-center bg-black text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <XIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            X
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/prachinglobalhospitals/"
          title="Instagram"
          className="group flex items-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <InstagramIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            Instagram
          </span>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@PrachinglobalHospitals"
          title="YouTube"
          className="group flex items-center bg-red-600 text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <YouTubeIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            YouTube
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917036999111"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="group flex items-center bg-[#25D366] text-white w-[160px] h-[45px] rounded-l-full shadow-lg transition-all duration-300 hover:translate-x-[-120px]"
        >
          <div className="w-[45px] flex items-center justify-center">
            <WhatsAppIcon />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            WhatsApp
          </span>
        </a>
      </div>
      {/* Contact Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
        fullScreen={window.innerWidth <= 640}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: "20px" },
            margin: { xs: 0, sm: "auto" },
            height: { xs: "100vh", sm: "auto" },
            maxHeight: { xs: "100vh", sm: "90vh" },
          },
        }}
      >
        <DialogContent sx={{ p: 0, height: "100%", overflow: "hidden" }}>
          <div className="bg-[#1e4f95] h-full w-full px-6 py-12 sm:py-16 sm:px-10 text-white relative font-manrope flex flex-col">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 z-10"
            >
              ✕
            </button>

            {/* Scrollable Form Container */}
            <div className="flex-1 overflow-y-auto pr-2 -mr-2 custom-scroll">
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm">Full Name</label>
                    <input
                      className={`input w-full border ${
                        submitted && errors.fullName
                          ? "border-red-500"
                          : "border-transparent"
                      }`}
                      value={form.fullName}
                      onChange={(e) => {
                        setForm({ ...form, fullName: e.target.value });
                        setErrors((p) => ({ ...p, fullName: "" }));
                      }}
                      placeholder="e.g. Peter Johnson"
                    />
                    {submitted && errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm">Email</label>
                    <input
                      className={`input w-full border ${
                        submitted && errors.email
                          ? "border-red-500"
                          : "border-transparent"
                      }`}
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setErrors((p) => ({ ...p, email: "" }));
                      }}
                      placeholder="e.g. hello@mail.com"
                    />
                    {submitted && errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm">Phone</label>
                    <input
                      className={`input w-full border ${
                        submitted && errors.phone
                          ? "border-red-500"
                          : "border-transparent"
                      }`}
                      value={form.phone}
                      maxLength={10}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setForm({ ...form, phone: value });
                        setErrors((p) => ({ ...p, phone: "" }));
                      }}
                      placeholder="Phone"
                    />
                    {submitted && errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm">Department</label>
                    <Autocomplete
                      options={services}
                      getOptionLabel={(option) => option.title}
                      value={
                        services.find((s) => s.title === form.department) ||
                        null
                      }
                      onChange={(e, value) => {
                        setForm({
                          ...form,
                          department: value?.title || "",
                        });
                        setErrors((p) => ({ ...p, department: "" }));
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Department"
                          error={submitted && !!errors.department}
                          variant="outlined"
                          sx={{ background: "white", borderRadius: "8px" }}
                        />
                      )}
                      ListboxProps={{ style: { maxHeight: "160px" } }}
                    />
                    {errors.department && (
                      <p className="text-red-400 text-[15px] font-manrope mt-1">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm">Date</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={form.date}
                        onChange={(newValue) => {
                          setForm({ ...form, date: newValue });
                          setErrors((p) => ({ ...p, date: "" }));
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
                              background: "white",
                              borderRadius: "8px",
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
                    <label className="block mb-1 text-sm">Time</label>
                    <input
                      type="time"
                      className={`input w-full border ${
                        submitted && errors.time
                          ? "border-red-500"
                          : "border-transparent"
                      }`}
                      value={form.time}
                      onChange={(e) => {
                        setForm({ ...form, time: e.target.value });
                        setErrors((p) => ({ ...p, time: "" }));
                      }}
                    />
                    {submitted && errors.time && (
                      <p className="text-red-500 text-sm">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label className="block mb-1 text-sm">Message</label>
                  <textarea
                    rows="4"
                    className="input w-full"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Write your message..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8 max-w-2xl mx-auto w-full">
              <button
                onClick={handleSubmit}
                className="flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-[#f37721] duration-300 transition-all text-white px-6 py-2 rounded-full w-full sm:w-fit gap-4 mx-auto"
              >
                <span className="font-medium text-[16px] capitalize">
                  Submit Details
                </span>
                <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                  <EastIcon fontSize="small" />
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}

export default App;
