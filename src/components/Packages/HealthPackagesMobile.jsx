import React, { useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import EmergencyIcon from "@mui/icons-material/Emergency";
import VerifiedIcon from "@mui/icons-material/Verified";
import SouthIcon from "@mui/icons-material/South";
const HealthPackagesMobile = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="w-[95%] mx-auto md:hidden block space-y-3 py-12">
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 1 ? null : 1)}
          className={`${activeId === 1 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">SENIOR CITIZEN HEALTH CHECKUP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 1 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 1 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Senior Citizen&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>5900/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  8050/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    Count (CBC)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total, Direct, In-Direct)",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates)",
                    "Albumin",
                    "Globulin",
                    "Albumin/ Globulin Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Blood Sugar – Profile</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    FBS (Fasting Blood Sugar)
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    PLBS (Post Lunch Blood Sugar)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Kidney Assessment</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Urea",
                    "Serum Creatinine",
                    "Serum Uric Acid",
                    "Urine Routine Evaluation",
                    "HBA1C",
                    "TSH",
                    "PSA (For Men)",
                    "X-Ray (Chest)",
                    "ECG (Electro Cardiogram)",
                    "PAP Smear (For Women)",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Complete Lipid Profile</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Complete Lipid Profile",
                    "HDL, LDL, VLDL",
                    "Triglycerides",
                    "Total Cholesterol / HDL Ratio",
                    "Consultation with General Physician",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 2 ? null : 2)}
          className={`${activeId === 2 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">SMART THYROID HEALTH CHECKUP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 2 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 2 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Smart Thyroid&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>3200/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  5650/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Blood Sugar – Fasting</span>{" "}
                </h4>
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>T3, T4, TSH</span>{" "}
                </h4>
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Anti TDI Antibodies</span>{" "}
                </h4>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Complete Blood Count</span>{" "}
                </h4>
                <ul className="p-4">
                  {[
                    "Haemoglobin, PCV, RBC, MCV, MCH,MCHC",
                    "Total Leucocyte Count",
                    "WBC Count",
                    "Platelet Count",
                    "Peripheral Smear",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Sonology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    USG (Thyroid Gland)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultations</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Pre Consultation Check-up (Height, Weight, BP, BMI)",
                    "Consultation with General Physician",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 3 ? null : 3)}
          className={`${activeId === 3 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">KIDNEY CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 3 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 3 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Kidney&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>5750/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  3800/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" />
                    Haemogram
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" />
                    BUN{" "}
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Biochemistry</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Creatinine",
                    "Serum Electrolytes (Na, K, Cl)",
                    "Serum Urea",
                    "Serum Uric Acid",
                    "FBS (Fasting Blood Sugar)",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Sonology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    USG (Thyroid Gland)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultations</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Pre Consultation Check-up (Height, Weight, BP, BMI)",
                    "Consultation with General Physician",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 4 ? null : 4)}
          className={`${activeId === 4 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">COMPLETE BONE HEALTH CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 4 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 4 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Complete Bone&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>4000/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  8200/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold pb-3">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Bone Density Test</span>{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span> Clinical Pathology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Amylase",
                    "Serum Lipase",
                    "Serum Creatinine",
                    "Serum Electrolytes",
                    "RBS (Random Blood Sugar)",
                    "HbsAg",
                    "HCV",
                    "HIV",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total, Direct, In-Direct)",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates)",
                    "Albumin",
                    "Globulin",
                    "Albumin/ Globulin Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 5 ? null : 5)}
          className={`${activeId === 5 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">ESSENTIAL HEART CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 5 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 5 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Essential Heart&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>4100/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  5540/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    Count (CBC)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Biochemistry</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Random Blood Sugar",
                    "Creatinine – Serum",
                    "Lipid Profile",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Cardiology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> ECG
                    (Electrocardiogram)
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> 2D Echo
                  </li>
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span> Cardiologist Consultant</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 6 ? null : 6)}
          className={`${activeId === 6 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">ESSENTIAL GASTRO CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 6 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 6 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Essential Gastro&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>4300/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  7440/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    Count (CBC)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Biochemistry</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Amylase",
                    "Serum Lipase",
                    "Serum Creatinine",
                    "Serum Electrolytes",
                    "RBS (Random Blood Sugar)",
                    "HbsAg",
                    "HCV",
                    "HIV",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total, Direct, Indirect)",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates), GGT",
                    "Albumin",
                    "Globulin",
                    "Albumin / Globulin Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Clinical Pathology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Stool test for Routine",
                    "Stool test for Occult Blood",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Radiology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["USG (Ultrasound – Whole Abdomen)"].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>
                    Consultation with Gastroenterologist & Dietician
                  </span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 7 ? null : 7)}
          className={`${activeId === 7 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">COMPREHENSIVE GASTRO CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 7 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 7 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Comprehensive Gastro&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>7940/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  10540/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Biochemistry</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Amylase",
                    "Serum Lipase",
                    "Serum Creatinine",
                    "Serum Electrolytes",
                    "RBS (Random Blood Sugar)",
                    "HbsAg",
                    "HCV",
                    "HIV",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total, Direct, Indirect)",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates), GGT",
                    "Albumin",
                    "Globulin",
                    "Albumin / Globulin Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Sonology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["USG (Ultrasound – Whole Abdomen)", "UGI Endoscopy"].map(
                    (item) => (
                      <li
                        key={item + Math.round(0, 9)}
                        className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                      >
                        <VerifiedIcon className="text-[#5187af]" /> {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with a Gastroenterologist</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 8 ? null : 8)}
          className={`${activeId === 8 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">LUNG CARE CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 8 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 8 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Lung Care&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>3200/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  4180/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <ul className="p-2.5">
                  {[
                    "Chest X-Ray",
                    "CBP with ESR",
                    "Absolute Eosinophil count",
                    "PFT (Pulmonary Function Test)",
                    "Pulmonologist Consultation",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 9 ? null : 9)}
          className={`${activeId === 9 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">MASTER HEALTH CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 9 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 9 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Master&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>9800/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  16500/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 items-center py-1 text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    Count (CBC)
                  </li>
                  <li className="flex flex-row gap-3 items-center py-1 text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Blood Grouping
                    and RH Typing
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Cardiology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "2D Echo",
                    "TMT (Treadmill Test)",
                    "ECG (Electrocardiogram)",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Kidney Assessment</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Serum Urea",
                    "Serum Creatinine",
                    "Serum Uric Acid",
                    "Serum Electrolytes",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span> Blood Sugar – Profile</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "FBS (Fasting Blood Sugar)",
                    "PLBS (Post Lunch – Blood Sugar)",
                    "HbA1C",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Biochemistry</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "TSH",
                    "PSA (Male above 50 age)",
                    "PAP SMEAR (Women above 35)",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Complete Lipid Profile:</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Total Cholesterol",
                    "HDL, LDL, VLDL",
                    "Triglycerides",
                    "Total Cholesterol / HDL Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total, Direct, In-Direct)",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates)",
                    "Albumin",
                    "Globulin",
                    "Albumin/ Globulin Ratio",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Sonology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["USG (Ultrasound Whole Abdomen) Clinical"].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Pathology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["Complete Urine Examination"].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Radiology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["X-Ray (Chest"].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with General Physician</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 10 ? null : 10)}
          className={`${activeId === 10 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">PREGNANCY PROFILE</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 10 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 10 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Pregnancy&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Profile
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>6730/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  9580/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Complete Haemogram</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "CUE (Complete Urine Examination)",
                    "T3, T4 & TSH",
                    "GTT",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Renal Function Test</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Serum Creatinine
                    FBS (Fasting Blood Sugar)
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Serum Urea
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" />
                    Blood Grouping & Rh Typing
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Serology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["HIV", "HBsAg", "HCV (Anti HCV)", "VDRL", "HBA1C"].map(
                    (item) => (
                      <li
                        key={item + Math.round(0, 9)}
                        className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                      >
                        <VerifiedIcon className="text-[#5187af]" /> {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Sonology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {["Early Pregnancy Scan"].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with a Gynaecologist</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 11 ? null : 11)}
          className={`${activeId === 11 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">DIABETIC CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 11 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 11 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Diabetic&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>3100/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  5580/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Hematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Blood
                    Count (CBC)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>LFT (Liver Function Test)</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Bilirubin (Total)",
                    "Direct Bilirubin",
                    "Indirect Bilirubin",
                    "Total Proteins",
                    "SGOT / ALT",
                    "SGPT / AST",
                    "Serum – ALP (Alkaline Phosphates)",
                    "Albumin",
                    "Globulin",
                    "Albumin / Globulin Ratio",
                    "HBA1C",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Clinical Pathology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Complete Urine
                    Examination
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> Urine Spot
                    Microalbumin
                  </li>
                  <li className="flex flex-row gap-3 py-1 items-center text-base font-medium">
                    <VerifiedIcon className="text-[#5187af]" /> ECG
                    (Electrocardiogram)
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Blood Sugar – Profile</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "FBS (Fasting Blood Sugar)",
                    "PLBS (Post Lunch Blood Sugar)",
                    "Serum Creatinine",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Complete Lipid Profile</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Total Cholesterol",
                    "HDL Ratio",
                    "LDL",
                    "VLDL",
                    "Triglycerides",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>
                    Consultation with General Physician & Diabetologist
                  </span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 12 ? null : 12)}
          className={`${activeId === 12 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">WELL WOMEN CHECK-UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 12 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 12 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Well Women&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>6730/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  9580/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>
                    Preferably for Ladies above 35 years OR as advised by the
                    consultant
                  </span>{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Lab Investigations</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Random Blood Sugar",
                    "Complete Blood Count (CBC)",
                    "Routine Urine Examination",
                    "S Creatinine",
                    "ECG",
                    "CA-125",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Radiology Investigations</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Chest X Ray",
                    "Ultrasound Pelvis",
                    "Papsmear, Breast Examination",
                    "Mammography",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with a Gynaecologist</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 13 ? null : 13)}
          className={`${activeId === 13 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">CANCER SCREENIG</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 13 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 13 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Cancer&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Screening
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>9450/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  16650/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="">
                <ul className="p-2.5">
                  {[
                    "CBP",
                    "Upper UGI Endoscopy",
                    "Mammography (Female)",
                    "Ultrasound Scan",
                    "Whole Abdomen, Pap Smear (Female)",
                    "PASA (Male)",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with MD Physician</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          onClick={() => setActiveId(activeId === 14 ? null : 14)}
          className={`${activeId === 14 ? "bg-transparent text-[#F37721] border-[#F37721]" : "bg-[#C8DDED] text-black   border-[#C8DDED]"} border flex  font-medium justify-between items-center px-6 py-2 cursor-pointer rounded-2xl transition-all duration-300`}
        >
          <span className="font-bold">EXECUTIVE HEALTH CHECK UP</span>{" "}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
            {activeId === 14 ? (
              <SouthIcon fontSize="small" />
            ) : (
              <NorthIcon fontSize="small" />
            )}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 14 ? "h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-[#e5f4ff] rounded-2xl my-4 py-4 xl:px-10 px-4">
            <h2 className="text-xl text-center font-bold  -offset-2 capitalize xl:pb-14 pb-8 pt-6">
              Executive&nbsp;{" "}
              <span
                className="italic font-bold tracking-widest font-instrumental text-[#5187af] 
              "
              >
                Health Checkup
              </span>
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-[#f37721]">
                Price (₹): <span>7900/-</span>{" "}
                <span className="text-base italic line-through text-[#5187af]">
                  14550/-
                </span>
              </h3>
            </div>
            <div className="lg:ps-5 ps-2">
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Lab Investigation</span>{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Haematology</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "Hb, PCV, RBC, MCHC, MCV, MCH",
                    "Total WBC",
                    "Differential Count, SR, PLT",
                    "Peripheral Smear",
                    "Complete Urine Analysis",
                    "Stool Examination",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>BIOCHEMISTRY</span>{" "}
                </h4>
                <ul className="p-2.5">
                  {[
                    "FBS, PLBS",
                    "Creatinine",
                    "Urea and Uric Acid",
                    "Lipid Profile (Total Cholesterol, HDL Cholesterol, LDL Cholesterol, Triglycerides, Cardiac Risk Ratio)",
                    "Liver Function Test (Total Protein, Albumin, Globulin, ALT, AST, GGT)",
                    "Serum Calcium",
                    "TSH",
                    "HbA1c",
                    "Microbiology: Test for AIDS, Test for HBsAg",
                    "Blood Bank: Blood Grouping - RH Typing",
                    "PSA",
                    "Cardiology Investigations: ECG (Resting), 2D Echo, TMT",
                    "Radiology Investigations: X-ray (Chest), Ultrasound Whole Abdomen",
                  ].map((item) => (
                    <li
                      key={item + Math.round(0, 9)}
                      className="flex flex-row gap-3 py-1 items-center text-base font-medium"
                    >
                      <VerifiedIcon className="text-[#5187af]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-4">
                <h4 className="text-lg font-bold">
                  <EmergencyIcon className="text-[#f37721]" />{" "}
                  <span>Consultation with MD Physician and Dietician</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackagesMobile;
