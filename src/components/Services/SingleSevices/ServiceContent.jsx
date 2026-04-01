import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import EastIcon from "@mui/icons-material/East";
import image1 from "../../../assets/images/Services/shot-operating-room-assistant-hands-out-instruments-surgeons-operation-surgeons-perform-operation-professional-medical-doctors-performing-surgery.jpg";
import image2 from "../../../assets/images/Services/doctor-checking-patient.jpg";
import image3 from "../../../assets/images/Services/425763422_bcc81853-275a-4dee-92a3-683a4bfaa685.jpg";
export default function ServiceContent() {
  const images = [image1, image2];
  return (
    <section className="w-full py-10 xl:py-36 px-5 xl:px-0">
      {/* CONTAINER */}
      <div className="w-[95%] md:w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-[10%]">
        {/* LEFT SIDE (55%) */}
        <div className="md:w-[55%] space-y-5">
          {/* SECTION 1 */}
          <div>
            <h2 className="text-[32px] xl:text-[40px] font-manrope font-semibold  mb-[12px]">
              Overview Services
            </h2>
            <p className="text-[#2f373e] text-[16px] xl:text-[18px] font-manrope">
              Our state-of-the-art heart clinics, combined with a highly
              experienced team of Cardiologists and well trained Nursing and
              Technicians, place us at the forefront of Cardiac Care. Every
              treatment plan is tailored to ensure the best clinical outcomes,
              guiding each patient toward a healthier heart and a better quality
              of life. The Department of Cardiology at Prachin Global Hospital
              is equipped with cutting-edge technology and advanced
              infrastructure to deliver world-class cardiac care.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h3 className="text-[24px] xl:text-[32px] font-manrope font-semibold  mb-[12px]">
              Advanced Diagnostic Tools
            </h3>
            <p className="font-manrope text-[#2f373e] text-[16px]  mb-2">
              We offer comprehensive cardiac diagnostics including:
            </p>

            <div className="grid grid-col-1 xl:grid-cols-2 gap-x-10  gap-y-3 font-manrope text-[#2f373e] text-[16px]">
              {[
                "CT Coronary Angiogram",
                "Cardiac MRI",
                "Radionuclide Studies",
                "2D ECHO, TEE, DSE",
                "Head-Up Tilt Test, Holter Monitoring, and ABPM",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="  text-[#094ca0] rounded-full flex items-center justify-center">
                    <DoneIcon fontSize="small" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <div>
            <h3 className="text-[24px] xl:text-[32px] font-manrope font-semibold mb-[12px]">
              Specialized Cath Labs
            </h3>
            <p className="font-manrope text-[#2f373e] text-[16px] mb-[12px]">
              Our Hybrid Cath Lab and Neuro Intervention Cath Lab are equipped
              with advanced flat-panel imaging technology, IVUS, OCT, NIRS IVUS,
              and 3D mapping systems for accurate diagnosis and precision-driven
              treatment.
            </p>
            <h3 className="font-manrope text-[#2f373e] text-[16px] mb-2">
              We specialize in:
            </h3>
            {[
              "Coronary, structural, and peripheral interventions",
              "Advanced electrophysiology diagnosis and treatments",
              "Image-guided complex coronary interventions",
              "Left Main, Bifurcation CTO procedures",
              "Post-bypass interventional angioplasty",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                {/* NUMBER */}
                <span className="text-[#0c0c0c] font-medium text-[16px] min-w-[28px]">
                  {String(i + 1).padStart(2, "0")}.
                </span>

                {/* TEXT */}
                <span className="text-[16px] text-[#0c0c0c] font-manrope leading-[26px]">
                  {item}
                </span>
              </div>
            ))}
            <p className="font-manrope text-[#2f373e] text-[16px] mt-[12px]">
              Advanced cardiac support using Impella and ECMO-assisted devices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-[20px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt="medical"
                  className="w-full h-[100%] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          {/* EXTRA CONTENT */}
          <div>
            <h3 className="text-[24px] xl:text-[32px] font-manrope font-semibold mb-[12px]">
              Advanced Diagnostic & Preventive Cardiac Care
            </h3>
            <p className="font-manrope text-[#2f373e] text-[16px] mb-[12px]">
              At Prachin Global Hospital, our expert cardiologists diagnose and
              treat heart and vascular diseases using the latest technologies
              and evidence-based practices. Our interventional cardiology team
              focuses on both treatment and prevention, ensuring comprehensive
              care for every cardiovascular concern.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-manrope font-semibold mb-[12px]">
              Regular Screening & Heart Health Check-ups
            </h3>
            <p className="font-manrope text-[#2f373e] text-[16px] mb-[12px]">
              We offer regular heart screening programs and preventive health
              check-ups to promote early detection and timely intervention. Our
              preventive and curative cardiology services are designed to
              protect and enhance long-term heart health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {/* CARD 1 */}
              <div className="flex justify-between items-center bg-[#c8dded] p-5 rounded-[14px]">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0c0c0c] font-manrope">
                    Heart Health Package
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-1 font-manrope">
                    Comprehensive cardiac screening.
                  </p>
                </div>

                <div className="bg-white rounded-[10px] w-10 h-10 flex items-center justify-center">
                  <EastIcon className="text-[#094ca0]" />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex justify-between items-center bg-[#c8dded] p-5 rounded-[14px]">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0c0c0c] font-manrope">
                    Angiogram Package
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-1 font-manrope">
                    Imaging to detect blocked arteries.
                  </p>
                </div>

                <div className="bg-white rounded-[10px] w-10 h-10 flex items-center justify-center">
                  <EastIcon className="text-[#094ca0]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] xl:text-[32px] font-manrope font-semibold mb-[12px]">
              Technologies & Equipment used
            </h3>
            {[
              "Minimally invasive cardiac surgeries",
              "Robotic-assisted procedures",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="  text-[#094ca0] rounded-full flex items-center justify-center">
                  <DoneIcon fontSize="small" />
                </span>
                <span>{item}</span>
              </div>
            ))}
            <p className="font-manrope text-[#2f373e] text-[16px] mt-[12px]">
              Complex cardiothoracic interventions with minimal complications
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (40%) */}
        <div className="md:w-[35%] relative my-10 xl:my-0">
          <div className="sticky top-24 space-y-6 bg-[#c8dded] rounded-[20px] p-8">
            {/* IMAGE CARD */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src={image3}
                alt="doctors"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CTA CARD */}
            <div className="bg-[#094ca0] rounded-[20px] p-4 sm:p-6 font-manrope">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] text-white font-semibold">
                Have More Any Questions?
              </h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#c9d5df] mt-2">
                One morning, when Gregor Samsa woke will from grow yo troubled
                dreams...
              </p>

              <button className="group mt-5 sm:mt-8 flex items-center justify-between border border-[#f37721] text-[#f37721] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 hover:bg-[#f37721] hover:text-white transition">
                <span className="font-medium font-manrope text-[14px] sm:text-[16px] capitalize group-hover:text-white">
                  Get Free Consultation
                </span>

                <span
                  className=" rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition
    bg-[#f5d1b9] text-[#f37721]"
                >
                  <EastIcon fontSize="small" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
