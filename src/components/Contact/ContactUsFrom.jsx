import React from "react";
import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";
import img from "../../assets/images/footer_mrquee_img.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
const ContactUsFrom = () => {
  return (
    <div className="xl:max-w-[90%] 3xl:max-w-[72%] w-[95%]  mx-auto md:pt-24 pt-12 xl:pt-32 md:pb-16 pb-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
        <div className="flex flex-col justify-between lg:gap-0 gap-8">
          <div className=" flex flex-col items-start  gap-6">
            <div>
              <span className="border border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px] uppercase">
                Get Support
              </span>
            </div>
            <h2 className="xl:text-[64px]  md:text-5xl  text-3xl xl:leading-[74px] md:leading-[54px] leading-10 font-semibold ">
              We’re Here To Help
              <br />
              <span className="text-[#f37721] font-normal italic font-instrumental">
                You Anytime Support
              </span>
            </h2>
            <p className="text-lg font-normal xl:pe-20  text-[#66686C]">
              Reach out to our friendly team for appointments, inquiries, or
              support. We are committed to responding quickly and guiding you to
              care.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Marquee pauseOnHover={true}>
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
              <img
                src={img}
                alt=""
                className=" xl:w-[295px] xl:h-[195px] lg:w-[220px] lg:h-[160px] md:w-[300px] md:h-[220px] w-40 h-28 me-6 rounded-xl "
              />
            </Marquee>
          </div>
        </div>
        <div className="flex flex-col bg-[#094ca0] xl:p-12 md:p-8 p-6 rounded-3xl  ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 md:gap-4 gap-2 max-w-full">
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Peter Johnson"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Your Email
              </label>
              <input
                type="email"
                placeholder="e.g. hello@healix.com"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Phone
              </label>
              <input
                type="text"
                placeholder="e.g. 0812 3456 7890"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
            <div>
              <label className="text-[16px] font-manrope mb-[12px] text-white block">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. 0812 3456 7890"
                className="w-full p-3 rounded-lg bg-white outline-none"
              />
            </div>
          </div>
          {/* MESSAGE */}
          <div className="mt-[32px] font-manrope">
            <label className="text-[16px] font-manrope mb-[12px] text-white block">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="write your message here..."
              className="w-full p-3 rounded-lg bg-white outline-none"
            />
          </div>

          {/* BUTTON */}
          <button className=" flex items-center justify-between bg-[#f37721] text-white px-6 py-2 rounded-full w-fit gap-4  transition mt-8">
            <span className="font-medium font-manrope text-[16px] capitalize">
              Submit Details
            </span>

            {/* Arrow Circle */}
            <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
              <EastIcon fontSize="small" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 mt-16 font-manrope">
        <div className=" xl:w-[415px] lg:w-1/3  flex flex-col gap-6 ">
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Let's talk</h4>
            <p className="text-lg text-[#66686C]">
              <span>Phone : (+62) 812 3456 7890 </span>
              <br />
              <span>FAX : (+12) 834 567 8900</span>
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <EmailIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
                />
              </div>{" "}
              <div className="absolute -left-8 top-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Email support</h4>
            <p className="text-lg text-[#66686C]">
              <span>support@prachinhospital.com</span>
              <br />
              <span>hello@prachinhospital.com</span>
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <LocalPhoneIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
                />
              </div>{" "}
              <div className="absolute -left-8 top-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F5F9] relative p-6 rounded-xl flex flex-col justify-center items-start gap-3">
            <h4 className="md:text-3xl text-2xl  font-semibold">Office address</h4>
            <p className="text-lg text-[#66686C]">
             Jl. Merpati No.86L, Ngringin, Kec. Depok, Kabupaten Sleman
            </p>
            <div className="w-[72px]  absolute flex  rounded-tl-xl  font-manrope bg-[#ffffff] pl-2 pb-2 top-0 right-0 rounded-bl-xl  justify-center items-center">
              <div className=" flex-col gap-2 z-10 pb-2 w-16 h-16 bg-[#C8DDED] rounded-xl flex justify-center items-center">
                <LocationPinIcon
                  fontSize="40px"
                  className="text-4xl  text-[#094ca0]"
                />
              </div>{" "}
              <div className="absolute -left-8 top-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 w-8  rounded-[0px_12px_0px_0px] shadow-[8px_-4px_0px_0px_#fff]">
                <div className="w-8">
                  <div className="w-8">
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  rounded-xl xl:w-[950px] lg:w-2/3 w-full lg:h-auto md:h-[400px] h-[300px]">
            <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.664880662235!2d78.25844797516845!3d17.540409983373156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf37bb130cd95%3A0x6ba76988c49cf127!2sPrachin%20Global%20Hospitals!5e1!3m2!1sen!2sin!4v1774965355262!5m2!1sen!2sin" width="100%" height="100%" title="map-prachin-hospital" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFrom;
