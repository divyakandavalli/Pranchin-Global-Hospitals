import React from "react";
import liberty from "../../assets/images/insurances/liberty.png";
import abg from "../../assets/images/insurances/abg_insu.png";
import acko from "../../assets/images/insurances/acko_insurance.png";
import carehealth from "../../assets/images/insurances/care_health.png";
import chola from "../../assets/images/insurances/chola_ms.png";
import digit from "../../assets/images/insurances/digit_insu.webp";
import aerik from "../../assets/images/insurances/erikson_pvt.webp";
import fhpl from "../../assets/images/insurances/fhpl_insurance.webp";
import ifco from "../../assets/images/insurances/ifco_tokio.svg";
import medi from "../../assets/images/insurances/medi.png";
import reliance from "../../assets/images/insurances/reliance.png";
import safeway from "../../assets/images/insurances/safeway.png";
import tata from "../../assets/images/insurances/tata_aig.png";
import Marquee from "react-fast-marquee";
const Insurances = () => {
  const insurance = [
    liberty,
    abg,
    acko,
    carehealth,
    chola,
    aerik,
    digit,
    fhpl,
    medi,
    ifco,
    reliance,
    safeway,
    tata,
  ];
  return (
    <div className="w-full flex flex-col md:gap-12 gap-6 py-10 font-manrope">
      <h2 className=" text-[22px] md:text-[34px] 3xl:text-[42px] text-center   font-semibold ">
        Insurance,{" "}
        <span className="text-[#f37721] font-normal italic font-instrumental">
          What Do We Accept?
        </span>
      </h2>
      <div className="mt-4">
        <Marquee direction="right" pauseOnHover={true}>
          {insurance.slice(0, 7).map((item, index) => (
            <div className="md:w-48 md:mx-8 mx-3 md:h-40 w-32 h-24 rounded-xl bg-[#e5f4ff] px-4 flex justify-center items-center ">
              <img
                key={index * Math.random(2, 100)}
                src={item}
                alt="insurance"
                className=""
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee pauseOnHover={true}>
          {insurance.slice(7).map((item, index) => (
            <div className="md:w-48 md:mx-8 mx-3 md:h-40 w-32 h-24 rounded-xl bg-[#e5f4ff] px-4 flex justify-center items-center ">
              <img
                key={index * Math.random(2, 100)}
                src={item}
                alt="insurance"
                className=""
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Insurances;
