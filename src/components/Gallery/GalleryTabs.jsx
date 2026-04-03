import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import blogimg from "../../assets/images/blog_topic_img.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
const GalleryTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [active, setActive] = useState(1);
  const [visibleCount, setVisibleCount] = useState(12);
  const images = [];
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
  const blogs = [
    {
      id: 131,
      url: "/blogs",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 132,
      url: "/blogs",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 133,
      url: "/blogs",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 134,
      url: "/blogs",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 135,
      url: "/blogs",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
  ];
  const ResetVisibleCount = () => {
    setVisibleCount(12);
  };
  for (let i = 1; i <= 62; i++) {
    images.push(
      new URL(
        `../../assets/images/gallery_photos/image (${i}).jpg`,
        import.meta.url,
      ).toString(), // 👈 important
    );
  }

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };
  return (
    <div className="2xl:max-w-[80%] md:w-[95%] w-full mx-auto  py-14">
      {/* Tabs */}
      <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
        <button
          onClick={() => {
            setActive(1);
            ResetVisibleCount();
          }}
          className={`${
            active === 1
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl md:px-6 py-0.5 px-2 md:py-1 border border-[#094CA0] transition-all duration-300`}
        >
          Photography
        </button>
        <button
          onClick={() => {
            setActive(2);
            ResetVisibleCount();
          }}
          className={`${
            active === 2
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0]  transition-all duration-300`}
        >
          Videos
        </button>
        <button
          onClick={() => {
            setActive(3);
            ResetVisibleCount();
          }}
          className={`${
            active === 3
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721] hover:border-[#094CA0] hover:text-[#094CA0]"
          } md:text-lg text-base rounded-3xl px-2 md:px-6 md:py-1 py-0.5 border border-[#094CA0]  transition-all duration-300`}
        >
          News Artcles
        </button>
      </div>
      <div className=" md:mt-10 mt-5">
        {active === 1 && (
          <div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {images.slice(0, visibleCount).map((img, index) => (
                <img
                  loading="lazy"
                  key={index}
                  src={img}
                  alt={`gallery-${index}`}
                  className="cursor-pointer rounded-lg hover:scale-105 hover:opacity-80 w-full transition"
                  onClick={() => openModal(index)}
                />
              ))}
            </div>

            {visibleCount < images.length && (
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
            {visibleCount > images.length && (
              <div className="flex justify-center items-center w-full my-16">
                <button
                  onClick={() => {
                    setVisibleCount(12);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300"
                >
                  <span className="font-medium font-manrope text-[16px] capitalize">
                    View Less
                  </span>

                  {/* Arrow Circle */}
                  <span
                    className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                  >
                    <KeyboardArrowUpIcon fontSize="large" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
        {active === 2 && (
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
            {visibleCount > videos.length && (
              <div className="flex justify-center items-center w-full my-16">
                <button
                  onClick={() => {
                    setVisibleCount(12);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300"
                >
                  <span className="font-medium font-manrope text-[16px] capitalize">
                    View Less
                  </span>

                  {/* Arrow Circle */}
                  <span
                    className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                  >
                    <KeyboardArrowUpIcon fontSize="large" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
        {active === 3 && (
          <div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:mt-10 mt-5">
              {blogs.map((item, index) => (
                <div
                  key={index * 2.665}
                  className="rounded-2xl overflow-hidden p-4 font-manrope bg-[#F4F5F9]"
                >
                  <div className="relative w-full flex flex-col gap-4 ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl"
                    />
                    <Link
                      to={item.url}
                      className="flex flex-col gap-3 bg-[#DDEADB] sm:p-5 p-4 rounded-xl"
                    >
                      <div className="flex flex-row flex-wrap gap-2 text-base items-center text-[#4D6E76]">
                        <ArticleIcon
                          fontSize="small"
                          className="text-[#094ca0]"
                        />{" "}
                        <span>{item.date}</span>||<span>{item.topic}</span>
                      </div>
                      <h3 className="text-[21px] leading-8 font-semibold ">
                        {item.title}
                      </h3>
                      <p className="text-[#66686C] text-base">
                        {item.desc}.....
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < images.length && (
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
            {visibleCount > images.length && (
              <div className="flex justify-center items-center w-full my-16">
                <button
                  onClick={() => {
                    setVisibleCount(12);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4 border border-[#094CA0] hover:bg-transparent hover:text-[#F37721] hover:border-[#F37721] transition-all duration-300"
                >
                  <span className="font-medium font-manrope text-[16px] capitalize">
                    View Less
                  </span>

                  {/* Arrow Circle */}
                  <span
                    className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center text-lg transition
    group-hover:bg-[#f5d1b9] group-hover:text-[#f37721]"
                  >
                    <KeyboardArrowUpIcon fontSize="large" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-5 text-white text-4xl"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt=""
            className="max-w-[90%] max-h-[80%] rounded-lg"
          />

          {/* Next Button */}
          <button
            className="absolute right-5 text-white text-4xl"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};
export default GalleryTabs;
