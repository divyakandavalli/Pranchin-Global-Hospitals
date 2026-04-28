import React, { useState } from "react";
import bannerimg from "../../assets/images/happy_patients_banner.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const HappyPatients = () => {
  const [active, setActive] = useState(1);
  const [visibleCount, setVisibleCount] = useState(12);
  const videos = [
    {
      id: 110,
      url: "https://www.youtube.com/embed/LSR4pyiLfZQ?si=UzhsIpU6EHRMpjBL",
    },
    {
      id: 111,
      url: "https://www.youtube.com/embed/LSR4pyiLfZQ?si=UzhsIpU6EHRMpjBL",
    },
    {
      id: 112,
      url: "https://www.youtube.com/embed/LSR4pyiLfZQ?si=UzhsIpU6EHRMpjBL",
    },
  ];
  const screenshots = [];
  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <div
        className="2xl:max-w-[80%] md:w-[95%] w-full xl:bg-fixed relative mx-auto xl:min-h-[500px] md:min-h-[400px] h-[350px] mt-5 overflow-hidden flex items-center justify-center md:rounded-3xl bg-center lg:bg-[top_center] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerimg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#010813]/70" />
        {/* Content */}
        <div className="text-center text-white z-10 flex flex-col md:gap-6 gap-0">
          <h1 className="md:text-8xl text-[52px] font-manrope font-semibold">
            Feedback Visuals
          </h1>

          <div className="flex items-center justify-center text-base font-manrope">
            <a href="/">Home</a>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <a className="text-[#f37721]" href="/happy-patients">
              Feedback Visuals
            </a>
          </div>
        </div>
      </div>
      <div className="2xl:max-w-[80%] md:w-[95%] w-full mx-auto  py-14">
        <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1
                ? "bg-[#094CA0] text-white"
                : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
            } md:text-lg text-base rounded-3xl md:px-6 py-0.5 px-2 md:py-1 border border-[#094CA0] transition-all duration-300`}
          >
            Feedback Visuals
          </button>
          <button
            onClick={() => setActive(2)}
            className={`${
              active === 2
                ? "bg-[#094CA0] text-white"
                : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
            } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0]  transition-all duration-300`}
          >
            Feedback Screenshots
          </button>
        </div>

        <div className=" md:mt-10 mt-5">
          {active === 1 && (
            <div>
              <div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.slice(0, visibleCount).map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
                    >
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={item.url}
                          title={`video-${index}`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>

                {visibleCount < videos.length && (
                  <div className="flex justify-center items-center w-full my-16">
                    <button
                      onClick={loadMore}
                      className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300"
                    >
                      <span className="font-medium font-manrope text-[16px] capitalize">
                        View More
                      </span>

                      {/* Arrow Circle */}
                      <span
                        className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                      >
                        <ExpandMoreIcon fontSize="large" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {active === 2 && (
            <div>
              {screenshots.length === 0 && (
                <div>
                  <h2 className="text-xl text-[#094ca0] font-bold font-manrope">Under Construction</h2>
                  <p>
                    We Should be back shortly. Thank you for your patience.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HappyPatients;
