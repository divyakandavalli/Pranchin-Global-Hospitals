import React from "react";
import EastIcon from "@mui/icons-material/East";
import homeBanner from "../../assets/images/Prachin.jpeg";
import banner from "../../assets/images/about_us_aside.jpg"
import feedback_Card from "../../assets/images/chairman.jpeg";
import pentagon_1 from "../../assets/images/pentagon_1.png"
import pentagon_2 from "../../assets/images/pentagon_2.png"
import { HashLink } from "react-router-hash-link";
// MUI Dialog
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import Slide from "@mui/material/Slide";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
export default function AboutUsSection() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <section className=" 3xl:max-w-[82%] w-[95%] mx-auto py-10">
      <div className=" grid xl:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-16 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative xl:order-1 order-2">
          <div className="md:block hidden object-cover overflow-hidden">
            <img src={homeBanner} alt="" className=" rounded-xl " />
          </div>
          <div className="md:hidden block object-cover overflow-hidden">
            <img src={banner} alt="" className=" rounded-xl " />
          </div>
          <div className="flex md:flex-row md:mt-0 mt-2 flex-col justify-between gap-0.5 items-center">
            <div className="grid grid-cols-2 gap-1">
              <img src={pentagon_1} alt=""/>
              <img src={pentagon_2} alt=""/>
            </div>
            
            <div className="md:w-[320px]  flex  rounded-tl-3xl pt-2.5 font-manrope justify-end">
              <div className="md:w-[300px]  bg-[#DDEADB] rounded-2xl p-3">
                <div className="flex flex-row  items-center gap-2">
                  <img
                    src={feedback_Card}
                    alt=""
                    className="w-14 h-14 rounded-xl"
                  />
                  <div className="">
                    <h6 className="text-black text-[15px]">
                      Shri Alapati Venkateswara Rao
                    </h6>
                    <p className="text-[#4D6E76] text-[15px]">
                      CHAIRMAN Prachin Hospital
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2 text-[#66686C] text-justify">
                  “We don't just treat symptoms; we care for people and
                  committed in building a healthier society through compassion
                  with integrity”
                </p>

                <HashLink
                  smooth
                  to="/about#our-chairman"
                  className="group  flex items-center justify-between pt-1.5 hover:text-[#f37721]  rounded-full w-fit gap-2 transition duration-200"
                >
                  <span className="font-medium font-manrope text-[16px] capitalize">
                    Read More
                  </span>
                  <span className=" flex items-center justify-center text-lg transition">
                    <EastIcon fontSize="small" />
                  </span>
                </HashLink>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-1 xl:items-start items-center xl:order-2 order-1">
          <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
            ABOUT US
          </span>

          <h2 className="text-[22px] md:text-[34px] 3xl:text-[42px] font-manrope    font-semibold mt-1.5 leading-tight">
            Who{" "}
            <span className="italic font-light font-instrumental text-[#5187af]">
              We Are?
            </span>
          </h2>

          <p className="text-[#788793] text-sm text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Prachin Global Hospitals, 250-bed super-speciality healthcare
            provider committed to delivering world-class healthcare services
            with compassion, precision and excellence. Designed to meet
            international standards, the hospital seamlessly combines advanced
            technology with the highly skilled medical professionals to ensure
            the best possible outcomes for patients.
          </p>
          <p className="text-[#788793] text-sm text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Hospital is equipped with advanced Transplant Operation Theatres and
            Robotic Operation Theatre facility, enabling complex and minimally
            invasive procedure with the greater accuracy, faster recovery and
            enhanced patient safety. Our infrastructure supports for Medical,
            Surgical all Super Speciality care with round the clock Emergency
            and Critical Care services. We have equipped with comprehensive
            Diagnostics and Treatment services, including an Advanced Clinical
            Laboratory with high end Radiology Department
          </p>
          <p className="text-[#788793] text-sm text-justify xl:w-auto max-w-2xl font-manrope mt-1">
            Our strength lies on highly qualified and experienced Doctors,
            Paramedics, Nursing Staff and Patient Care team, who are dedicated
            in providing ethical, patient centric care round the clock. We
            strives with a strong focus safety, innovation, clinical excellence
            and technology and trusted destination for advanced health care
            services where advanced technology meets compassionate care.
          </p>
        </div>
      </div>
    </section>
  );
}

// <Dialog
//   open={open}
//   onClose={handleClose}
//   TransitionComponent={Transition}
//   fullWidth
//   maxWidth="lg"
//   fullScreen={window.innerWidth <= 640}
//   PaperProps={{
//     sx: {
//       borderRadius: { xs: 0, sm: "20px" },
//       margin: { xs: 0, sm: "auto" },
//       height: { xs: "100vh", sm: "auto" },
//       maxHeight: { xs: "100vh", sm: "90vh" },
//     },
//   }}
// >
//   <DialogContent sx={{ p: 0, height: "100%", overflow: "hidden" }}>
//     <div className="bg-[#ffffff] h-full w-full px-6 py-12 sm:py-16 sm:px-10  relative font-manrope flex flex-col">
//       {/* Close Button */}
//       <button
//         onClick={handleClose}
//         className="absolute top-6 right-6 text-black text-3xl hover:text-gray-500 z-10"
//       >
//         ✕
//       </button>
//       <div>
//         <span className="   text-[#094ca0] font-manrope font-medium px-1  py-1 rounded-full tracking-[2px]  text-lg">
//           Greatness Inspired
//         </span>

//         <h2 id="our-chairman" className="text-[44px] font-manrope  font-semibold mt-1.5 leading-tight">
//           OUR{" "}
//           <span className="italic font-light font-instrumental text-[#5187af]">
//             CHAIRMAN
//           </span>
//         </h2>
//         <img
//           src={feedback_Card}
//           className="float-right w-64 ml-12 mb-4 rounded-xl"
//           alt=""
//         />
//         <p className=" mt-4 font-manrope text-[#788793] text-base xl:text-justify text-center">
//           <span className="font-bold italic ">
//             Shri Alapati Venkateswara Rao,{" "}
//           </span>{" "}
//           Founder, Chairman & Managing Director of Prachin Global
//           Hospitals is a visionary leader known for his commitment towards
//           excellence in healthcare and education with strong belief in
//           creating a meaningful impact. He has played a pivotal role in
//           shaping institutions that contribute to the growth and
//           well-being of society.
//         </p>
//         <p className=" mt-2 font-manrope text-[#788793] text-base xl:text-justify text-center">
//           Rising from humble beginnings, he has built a legacy rooted in
//           dedication, integrity and forward-thinking leadership. Through
//           his initiatives in education, he has nurtured and empowered
//           countless young minds, helping them achieve their aspirations
//           and become responsible contributors to the society.
//         </p>
//         <p className=" mt-2 font-manrope text-[#788793] text-base xl:text-justify text-center">
//           Driven by a passion to make quality healthcare accessible, he
//           established Prachin Global Hospitals as a state of the art 250
//           bed super speciality facility. His vision extends beyond
//           infrastructure-he aims to create a healing environment where
//           advancement of medical technology is seamlessly combined with
//           compassionate, patient centric care.
//         </p>
//         <p className=" mt-2 font-manrope text-[#788793] text-base xl:text-justify text-center">
//           Under his leadership, the organisation continues to grow with
//           the focus on innovation, clinical excellence and ethical
//           practices. His unwavering commitment to service and his
//           people-first approach have made Prachin Global Hospitals a
//           trusted land mark in healthcare.
//         </p>
//         <div className="clear-both"></div>
//       </div>
//     </div>
//   </DialogContent>
// </Dialog>
