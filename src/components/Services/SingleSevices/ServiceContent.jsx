import React from "react";
import { useParams } from "react-router-dom";
import SPECIALITIES from "../../../specialities/specialities";
import DoneIcon from "@mui/icons-material/Done";
import EastIcon from "@mui/icons-material/East";

import fallback1 from "../../../assets/images/Services/shot-operating-room-assistant-hands-out-instruments-surgeons-operation-surgeons-perform-operation-professional-medical-doctors-performing-surgery.jpg";
import fallback2 from "../../../assets/images/Services/doctor-checking-patient.jpg";
import image3 from "../../../assets/images/Services/425763422_bcc81853-275a-4dee-92a3-683a4bfaa685.jpg";

export default function ServiceContent() {
  const { slug } = useParams();

  const data = SPECIALITIES.find((item) => item.slug === slug);

  if (!data) return <div className="text-center py-20">Service Not Found</div>;

  const s = data.sections || {};
  const images = s.images || [fallback1, fallback2];

  return (
    <section className="w-full py-10 xl:py-36 px-5 xl:px-0 font-manrope">
      <div className="w-[95%] md:w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-[10%]">
        {/* LEFT SIDE */}
        <div className="md:w-[55%] space-y-10">
          {/* OVERVIEW */}
          {(s.overview || s.moreoverview) && (
            <div>
              <h2 className="text-[32px] xl:text-[40px] font-semibold mb-4">
                {data.title} Services
              </h2>
              {s.overview && (
                <p className="text-[#2f373e] text-[16px] xl:text-[18px] leading-relaxed">
                  {s.overview}
                </p>
              )}
              {s.moreoverview && (
                <p className="text-[#2f373e] text-[16px] xl:text-[18px] mt-4 leading-relaxed">
                  {s.moreoverview}
                </p>
              )}
            </div>
          )}

          {/* DIAGNOSTICS SECTION */}
          {(s.diagnostics || s.diagnosticsDescription) && (
            <div>
              {s.diagnosticsTitle && (
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.diagnosticsTitle}
                </h3>
              )}
              {s.diagnosticsDescription && (
                <p className="text-[#2f373e] text-[16px] leading-relaxed mb-4">
                  {s.diagnosticsDescription}
                </p>
              )}
              {s.diagnosticsDescription2 && (
                <p className="text-[#2f373e] mb-4">
                  {s.diagnosticsDescription2}
                </p>
              )}
              {s.diagnosticssubtitle && (
                <p className="text-[#2f373e] mb-4">{s.diagnosticssubtitle}</p>
              )}

              {s.diagnostics && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-3 text-[#2f373e] text-[16px]">
                  {s.diagnostics.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <DoneIcon
                        fontSize="small"
                        className="text-[#094ca0] mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PROCEDURES SECTION */}
          {s.procedures && (
            <div>
              {s.proceduresTitle && (
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.proceduresTitle}
                </h3>
              )}
              {s.proceduresDescription && (
                <p className="text-[#2f373e] text-[16px] mb-4">
                  {s.proceduresDescription}
                </p>
              )}
              {s.proceduresSubTitle && (
                <p className="font-medium text-[#2f373e] mb-4">
                  {s.proceduresSubTitle}
                </p>
              )}

              <div className="space-y-4">
                {s.procedures.map((item, i) => (
                  <div key={i} className="flex items-start gap-x-4">
                    <span className="font-semibold text-[#094ca0] text-lg min-w-[28px]">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-[16px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {s.proceduresNote && (
                <p className="text-[#2f373e] text-[16px] mt-5 italic">
                  {s.proceduresNote}
                </p>
              )}
            </div>
          )}

          {/* NEUROLOGY CONDITIONS */}
          {s.conditionstreatedtitle && (
            <div>
              <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                {s.conditionstreatedtitle}
              </h3>
              {s.conditionstreateddesc && (
                <p className="text-[#2f373e] mb-4">{s.conditionstreateddesc}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {s.conditionstreatedpoints?.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MAJOR CONDITIONS */}
          {s.Majorconditions && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {s.Majorconditions.map((item, i) => (
                <div key={i} className="bg-[#f5f7fa] p-6 rounded-2xl">
                  <h4 className="font-semibold text-[18px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#555] text-[15px]">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* RHEUMATOLOGY CONDITIONS */}
          {s.conditionsTreated && (
            <div>
              {s.extraSectionTitle && (
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.extraSectionTitle}
                </h3>
              )}
              {s.extraSectionContent && (
                <p className="text-[#2f373e] mb-4">{s.extraSectionContent}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {s.conditionsTreated.map((condition, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{condition}</span>
                  </div>
                ))}
              </div>

              {s.extraSectionNote && (
                <p className="text-[#2f373e] mt-4">{s.extraSectionNote}</p>
              )}
            </div>
          )}

          {/* ARTHROPLASTY – ADVANCED JOINT REPLACEMENT */}
          {s.arthroplastyList && (
            <div>
              {s.extraSectionTitle && (
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.extraSectionTitle}
                </h3>
              )}
              {s.extraSectionContent && (
                <p className="text-[#2f373e] mb-4">{s.extraSectionContent}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {s.arthroplastyList.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {s.extraSectionNote && (
                <p className="text-[#2f373e] mt-4">{s.extraSectionNote}</p>
              )}
            </div>
          )}

          {/* GENERAL EXTRA SECTION (fallback) */}
          {s.extraSectionTitle &&
            !s.conditionsTreated &&
            !s.arthroplastyList && (
              <div>
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.extraSectionTitle}
                </h3>
                {s.extraSectionContent && (
                  <p className="text-[#2f373e] text-[16px] leading-relaxed">
                    {s.extraSectionContent}
                  </p>
                )}
              </div>
            )}

          {/* SCREENING / SPORTS MEDICINE & REHABILITATION */}
          {s.screeningTitle && (
            <div>
              <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                {s.screeningTitle}
              </h3>

              {/* Sports Medicine List */}
              {s.screeningContentList && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {s.screeningContentList.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <DoneIcon fontSize="small" className="text-[#094ca0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.screeningContent && (
                <p className="text-[#2f373e] text-[16px] leading-relaxed">
                  {s.screeningContent}
                </p>
              )}

              {/* Packages */}
              {s.packages && s.packages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {s.packages.map((pkg, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-[#c8dded] p-6 rounded-2xl"
                    >
                      <div>
                        <h4 className="font-semibold text-lg">{pkg.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center">
                        <EastIcon className="text-[#094ca0]" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TECHNOLOGIES SECTION */}
          {(s.technologies || s.technologiesNote) && (
            <div>
              {s.technologiesTitle && (
                <h3 className="text-[24px] xl:text-[32px] font-semibold mb-4">
                  {s.technologiesTitle}
                </h3>
              )}

              {s.technologies && s.technologies.length > 0 && (
                <div className="space-y-3">
                  {s.technologies.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <DoneIcon fontSize="small" className="text-[#094ca0]" />
                      <span className="text-[#2f373e]">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.technologiesNote && (
                <p className="text-[#2f373e] text-[16px] leading-relaxed mt-6">
                  {s.technologiesNote}
                </p>
              )}
            </div>
          )}

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-md group"
              >
                <img
                  src={img}
                  alt={`${data.title} service`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - STICKY */}
        <div className="md:w-[35%] relative my-10 xl:my-0">
          <div className="sticky top-24 space-y-6 bg-[#c8dded] rounded-[20px] p-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src={image3}
                alt="doctors"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-[#094ca0] rounded-[20px] p-4 sm:p-6">
              <h3 className="text-[18px] sm:text-[20px] md:text-[21px] text-white font-semibold">
                Have More Any Questions?
              </h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#c9d5df] mt-2">
                One morning, when Gregor Samsa woke will from grow yo troubled
                dreams...
              </p>

              <button className="group mt-5 sm:mt-8 flex items-center justify-between border border-[#f37721] text-[#f37721] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit gap-3 sm:gap-4 hover:bg-[#f37721] hover:text-white transition">
                <span className="font-medium text-[14px] sm:text-[16px] capitalize">
                  Get Free Consultation
                </span>

                <span className="rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#f5d1b9] text-[#f37721]">
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
