import React from "react";
import { useParams } from "react-router-dom";
import SPECIALITIES from "../../../specialities/specialities";
import DoneIcon from "@mui/icons-material/Done";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import fallback1 from "../../../assets/images/Services/shot-operating-room-assistant-hands-out-instruments-surgeons-operation-surgeons-perform-operation-professional-medical-doctors-performing-surgery.jpg";
import fallback2 from "../../../assets/images/Services/doctor-checking-patient.jpg";

export default function ServiceContent() {
  const { slug } = useParams();
  const data = SPECIALITIES.find((item) => item.slug === slug);

  if (!data) return <div className="text-center py-20">Service Not Found</div>;

  const s = data.sections || {};
  const images = s.images || [fallback1, fallback2];
  const doctors = data.doctors || [];
  return (
    <section className="w-full py-10  px-5 xl:px-0 font-manrope">
      <div className="w-[95%] md:w-[90%] max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full xl:w-[60%] space-y-3">
          {/* OVERVIEW */}
          {(s.overview || s.moreoverview) && (
            <div>
              <h2 className="text-[16px] md:text-[20px] mb-4 font-manrope font-semibold leading-tight text-black">
                {data.title}
              </h2>
              {s.overview && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] text-left xl:text-justify leading-relaxed">
                  {s.overview}
                </p>
              )}
              {s.moreoverview && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] text-left xl:text-justify mt-4 leading-relaxed">
                  {s.moreoverview}
                </p>
              )}
            </div>
          )}

          {/* DIAGNOSTICS SECTION */}
          {(s.diagnostics || s.diagnosticsDescription) && (
            <div className="font-manrope">
              {s.diagnosticsTitle && (
                <h3 className="text-[16px] md:text-[18px] font-bold ">
                  {s.diagnosticsTitle}
                </h3>
              )}
              {s.diagnosticsDescription && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] leading-relaxed mb-2">
                  {s.diagnosticsDescription}
                </p>
              )}
              {s.diagnosticsDescription2 && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] mb-2">
                  {s.diagnosticsDescription2}
                </p>
              )}
              {s.diagnosticssubtitle && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] mb-2">
                  {s.diagnosticssubtitle}
                </p>
              )}

              {s.diagnostics && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10  text-[#2f373e] text-[14px] 3xl:text-[15px]">
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
            <div className="font-manrope">
              {s.proceduresTitle && (
                <h3 className="text-[16px] md:text-[18px] font-bold">
                  {s.proceduresTitle}
                </h3>
              )}
              {s.proceduresDescription && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px]">
                  {s.proceduresDescription}
                </p>
              )}
              {s.proceduresSubTitle && (
                <p className=" text-[#2f373e] text-[16px] md:text-[18px] font-bold mb-2">
                  {s.proceduresSubTitle}
                </p>
              )}

              <div className="">
                {s.procedures.map((item, i) => (
                  <div key={i} className="flex items-start gap-x-4">
                    <span className="font-semibold text-[#094ca0] text-[14px] 3xl:text-[15px] min-w-[28px]">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-[14px] 3xl:text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {s.proceduresNote && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] font-manrope font-semibold my-2 italic">
                  {s.proceduresNote}
                </p>
              )}
            </div>
          )}

          {/* NEUROLOGY CONDITIONS */}
          {s.conditionstreatedtitle && (
            <div>
              <h3 className="text-[16px] md:text-[18px] font-bold font-manrope mb-2">
                {s.conditionstreatedtitle}
              </h3>
              {s.conditionstreateddesc && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] font-manrope">
                  {s.conditionstreateddesc}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 font-manrope">
                {s.conditionstreatedpoints?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[14px] 3xl:text-[15px]"
                  >
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <h3 className="text-[16px] md:text-[18px] font-bold font-manrope my-2">
            {s.Majorconditionstitle}
          </h3>
          {/* MAJOR CONDITIONS */}
          {s.Majorconditions && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-manrope">
              {s.Majorconditions.map((item, i) => (
                <div key={i} className="bg-[#c8dded] p-6 rounded-2xl">
                  <h4 className=" text-[16px] md:text-[18px] font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#555] text-[14px] 3xl:text-[15px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* RHEUMATOLOGY CONDITIONS */}
          {s.conditionsTreated && (
            <div>
              {s.extraSectionTitle && (
                <h3 className="text-[16px] md:text-[18px] font-bold mb-2 font-manrope ">
                  {s.extraSectionTitle}
                </h3>
              )}
              {s.extraSectionContent && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] font-manrope">
                  {s.extraSectionContent}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 font-manrope">
                {s.conditionsTreated.map((condition, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[14px] 3xl:text-[15px]"
                  >
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{condition}</span>
                  </div>
                ))}
              </div>

              {s.extraSectionNote && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] mt-2">
                  {s.extraSectionNote}
                </p>
              )}
            </div>
          )}

          {/* ARTHROPLASTY – ADVANCED JOINT REPLACEMENT */}
          {s.arthroplastyList && (
            <div>
              {s.extraSectionTitle && (
                <h3 className="text-[16px] md:text-[18px] font-bold mb-2">
                  {s.extraSectionTitle}
                </h3>
              )}
              {s.extraSectionContent && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px]">
                  {s.extraSectionContent}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 text-[14px] 3xl:text-[15px]">
                {s.arthroplastyList.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <DoneIcon fontSize="small" className="text-[#094ca0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {s.extraSectionNote && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] mt-2">
                  {s.extraSectionNote}
                </p>
              )}
            </div>
          )}

          {/* GENERAL EXTRA SECTION (fallback) */}
          {s.extraSectionTitle &&
            !s.conditionsTreated &&
            !s.arthroplastyList && (
              <div>
                <h3 className="text-[16px] md:text-[18px] font-bold mb-2">
                  {s.extraSectionTitle}
                </h3>
                {s.extraSectionContent && (
                  <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] leading-relaxed">
                    {s.extraSectionContent}
                  </p>
                )}
              </div>
            )}

          {/* SCREENING / SPORTS MEDICINE & REHABILITATION */}
          {s.screeningTitle && (
            <div>
              <h3 className="text-[16px] md:text-[18px] font-bold mb-2">
                {s.screeningTitle}
              </h3>

              {/* Sports Medicine List */}
              {s.screeningContentList && (
                <div className="grid grid-cols-1 md:grid-cols-2 text-[14px] 3xl:text-[15px]">
                  {s.screeningContentList.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <DoneIcon fontSize="small" className="text-[#094ca0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.screeningContent && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] leading-relaxed">
                  {s.screeningContent}
                </p>
              )}

              {/* Packages */}
              {s.packages && s.packages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {s.packages.map((pkg, i) => (
                    <Link
                      key={i}
                      to="/health-packages"
                      className="flex justify-between items-center bg-[#c8dded] p-6 rounded-2xl hover:shadow-md transition cursor-pointer"
                    >
                      <div>
                        <h4 className="text-[16px] md:text-[18px] font-bold">
                          {pkg.title}
                        </h4>
                        <p className="text-[14px] 3xl:text-[15px] text-gray-600 mt-1">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center">
                        <EastIcon className="text-[#094ca0]" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TECHNOLOGIES SECTION */}
          {(s.technologies || s.technologiesNote) && (
            <div>
              {s.technologiesTitle && (
                <h3 className="text-[16px] md:text-[18px] font-bold my-2">
                  {s.technologiesTitle}
                </h3>
              )}

              {s.technologies && s.technologies.length > 0 && (
                <div className="">
                  {s.technologies.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center text-[14px] 3xl:text-[15px] gap-3"
                    >
                      <DoneIcon fontSize="small" className="text-[#094ca0]" />
                      <span className="text-[#2f373e]">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.technologiesNote && (
                <p className="text-[#2f373e] text-[14px] 3xl:text-[15px] leading-relaxed">
                  {s.technologiesNote}
                </p>
              )}
            </div>
          )}

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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
        <div className="w-full xl:w-[40%] relative my-10 xl:my-0">
          <div className="sticky top-40 space-y-6 bg-[#c8dded] rounded-[20px] p-8">
            {/* GRID HERE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map((value, index) => (
                <Link
                  to="/doctors-profile"
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  {/* Passport Image */}
                  <div className="w-[120px] h-[120px] rounded-xl overflow-hidden mb-3">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-semibold text-[15px] md:text-[17px] text-[#5187af]">
                    {value.name}
                  </h3>

                  <p className="text-[#4D6E76] text-[13px] mt-1">
                    {value.dignity}
                  </p>

                  <p className="text-[#7b8a8f] text-[12px]">{value.degree}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
