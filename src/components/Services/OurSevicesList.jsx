import React from "react";
import EastIcon from "@mui/icons-material/East";
import SPECIALITIES from "../../specialities/specialities";
import Cardiology from "../../assets/images/middle-age-hispanic-man-wearing-doctor-uniform-auscultating-heart-clinic.jpg";
import Neurology from "../../assets/images/empty-examination-office-room-having-brain-tomography-computer-screen-ready-oncology-consultation-hospital-room-with-nobody-it-equipped-with-professional-medical-tools-mri-brain-diagram.jpg";
import Oncology from "../../assets/images/young-woman-suffering-breast-cancer-talking-with-her-doctor.jpg";
import Pulmonology from "../../assets/images/medical-doctor-give-consultation-patient-with-xray-film.jpg";
import { Link } from "react-router-dom";

// const services = [
//   {
//     title: "Cardiology",
//     desc: "The Department of Cardiology at Prachin Global Hospital is equipped with cutting-edge technology",
//     img: Cardiology,
//   },
//   {
//     title: "Neurology",
//     desc: "Department of Neurophysiology provides advanced diagnostic testing essential for evaluating nervous system disorders.",
//     img: Neurology,
//   },
//   {
//     title: "Oncology",
//     desc: "The Department of Medical Oncology at Prachin Global Hospital is fully equipped with modern daycare chemotherapy wards",
//     img: Oncology,
//   },
//   {
//     title: "Pulmonology",
//     desc: "Department of Pulmonary and Lung Sciences is home to a highly skilled team of experienced pulmonologists",
//     img: Pulmonology,
//   },
//   {
//     title: "Cardiology",
//     desc: "The Department of Cardiology at Prachin Global Hospital is equipped with cutting-edge technology",
//     img: Cardiology,
//   },
//   {
//     title: "Neurology",
//     desc: "Department of Neurophysiology provides advanced diagnostic testing essential for evaluating nervous system disorders.",
//     img: Neurology,
//   },
//   {
//     title: "Oncology",
//     desc: "The Department of Medical Oncology at Prachin Global Hospital is fully equipped with modern daycare chemotherapy wards",
//     img: Oncology,
//   },
//   {
//     title: "Pulmonology",
//     desc: "Department of Pulmonary and Lung Sciences is home to a highly skilled team of experienced pulmonologists",
//     img: Pulmonology,
//   },
// ];

export default function OurSevicesList() {
  return (
    <div className="max-w-[95%] mx-auto ">
      <div className=" py-16 sm:py-20 md:py-28 xl:py-36 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        {/* Decoration */}
        <div className="hidden md:block absolute -right-[310px] -top-[653px] pointer-events-none">
          <img
            src="https://kit.slabdsgn.com/healix/wp-content/uploads/sites/11/2025/09/Decorations.png"
            alt=""
          />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 xl:max-w-[95%] 3xl:max-w-[85%] mx-auto">
          <div>
            <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-3 sm:px-4 py-1 rounded-full tracking-[2px] sm:tracking-[3px] text-[12px] sm:text-[14px] md:text-[16px] uppercase">
              our services
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-manrope font-semibold mt-4 leading-tight">
              Comprehensive Care <br />
              for{" "}
              <span className="italic font-light font-instrumental text-[#5187af]">
                Every Need
              </span>
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 xl:max-w-[95%] 3xl:max-w-[85%] mx-auto">
          {SPECIALITIES.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col min-h-[320px] sm:min-h-[380px] md:min-h-[450px] justify-between rounded-[16px] w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.banner})` }}
            >
              {/* Arrow Corner */}
              <Link to={item.slug} className="bg-[#fff] w-[80px] sm:w-[94px] min-h-[70px] sm:min-h-[84px] rounded-bl-[48px] flex justify-end items-start self-end relative">
                <div className="-rotate-[45deg]">
                  <div className="bg-[#E5F4FF] text-[#094ca0] rounded-full text-[24px] sm:text-[30px] md:text-[36px] ml-[10px] sm:ml-[20px] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <EastIcon />
                  </div>
                </div>
              </Link>

              {/* Bottom Content */}
              <div className="bg-[#fff] w-[85%] sm:w-[300px] md:w-[350px] flex justify-end gap-4 border-t-[12px] border-r-[12px] border-[#fff] rounded-tr-[16px] relative">
                <div className="bg-[#E5F4FF] w-full sm:w-[290px] md:w-[340px] rounded-[12px] p-[12px] sm:p-[14px] md:p-[16px]">
                  <h6 className="mb-[4px] font-manrope text-[16px] sm:text-[18px] md:text-[21px] font-semibold leading-[24px] md:leading-[36px] text-[#094ca0]">
                    {item.title}
                  </h6>

                  <p className="text-[13px] sm:text-[14px] md:text-[16px] font-manrope leading-[20px] md:leading-[26px] text-[#2f373e]">
                    {item.sections?.overview?.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
