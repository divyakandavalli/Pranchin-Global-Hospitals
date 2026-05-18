import React, { useContext, useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const GalleryTabs = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
useEffect(() => {
  const handleKeyDown = (e) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "Escape") {
      closeModal();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex, selectedEvent]);
  /* ---------------- IMPORT ALL IMAGES ---------------- */

  const importAll = (r) => {
    return r.keys().map(r);
  };

  /* ---------------- EVENTS IMAGES ---------------- */

  const hospitalPhotos = importAll(
    require.context(
      "../../assets/images/Gallery/Hospital-Photos",
      false,
      /\.(png|jpe?g|webp)$/,
    ),
  );

  const medicalCampPhotos = importAll(
    require.context(
      "../../assets/images/Gallery/Medical-Camp",
      false,
      /\.(png|jpe?g|webp)$/,
    ),
  );

  const OPDPhotos = importAll(
    require.context(
      "../../assets/images/Gallery/OPD-Open",
      false,
      /\.(png|jpe?g|webp)$/,
    ),
  );
  const NurseDayPhotos = importAll(
    require.context(
      "../../assets/images/Gallery/International-Nurses-Day",
      false,
      /\.(png|jpe?g|webp|JPG)$/,
    ),
  );
  const PulmanologyPhotos = importAll(
    require.context(
      "../../assets/images/Gallery/Pulmonology-Training-By-Anush",
      false,
      /\.(png|jpe?g|webp|JPG)$/,
    ),
  );

  /* ---------------- EVENTS ---------------- */

  const galleryEvents = [
    {
      id: 1,
      title: "Hospital Images",
      thumbnail: hospitalPhotos[0],
      images: hospitalPhotos,
    },

    {
      id: 2,
      title: "Medical Camp at APR",
      thumbnail: medicalCampPhotos[0],
      images: medicalCampPhotos,
    },

    {
      id: 3,
      title: "OPD Now Open",
      thumbnail: OPDPhotos[0],
      images: OPDPhotos,
    },
    {
      id: 4,
      title: "International Nurses Day",
      thumbnail: NurseDayPhotos[0],
      images: NurseDayPhotos,
    },
    {
      id: 5,
      title: "Pulmanology Training By Dr Anusha",
      thumbnail: PulmanologyPhotos[0],
      images: PulmanologyPhotos,
    },
  ];

  /* ---------------- VIDEOS ---------------- */
const videos = [
  "https://www.youtube.com/embed/ror-TG8oZVs",
  "https://www.youtube.com/embed/HBYTwWuk9Ig",
  "https://www.youtube.com/embed/Zvg-lZn78ZI",

  "https://www.youtube.com/embed/vtF3BpBZoSw",
  "https://www.youtube.com/embed/vhfOUz5rs5U",
  "https://www.youtube.com/embed/GACA8K8U3gY",
  "https://www.youtube.com/embed/HzuzvCtT2_E",
  "https://www.youtube.com/embed/BahKPURL3wA",
  "https://www.youtube.com/embed/wNqoUz_7I9Q",
  "https://www.youtube.com/embed/rBAD-u7ZlIc",
  "https://www.youtube.com/embed/8XNmfP6LEX0",
];

  const blogs = [];

  /* ---------------- FUNCTIONS ---------------- */

  const ResetVisibleCount = () => {
    setVisibleCount(12);
  };

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === selectedEvent.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1,
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="2xl:max-w-[80%] md:w-[95%] w-full mx-auto py-10">
      {/* ================= TABS ================= */}

      <div className="flex flex-row flex-wrap md:gap-6 gap-4 overflow-x-auto w-full">
        <button
          onClick={() => {
            setActiveTab(1);
            ResetVisibleCount();
          }}
          className={`${
            activeTab === 1
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721]"
          } md:text-lg text-base rounded-3xl md:px-6 py-1 px-4 border border-[#094CA0] transition-all duration-300`}
        >
          Photos
        </button>

        <button
          onClick={() => {
            setActiveTab(2);
            ResetVisibleCount();
          }}
          className={`${
            activeTab === 2
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721]"
          } md:text-lg text-base rounded-3xl md:px-6 py-1 px-4 border border-[#094CA0] transition-all duration-300`}
        >
          Videos
        </button>

        <button
          onClick={() => {
            setActiveTab(3);
            ResetVisibleCount();
          }}
          className={`${
            activeTab === 3
              ? "bg-[#094CA0] text-white"
              : "bg-transparent text-[#F37721] border-[#F37721]"
          } md:text-lg text-base rounded-3xl md:px-6 py-1 px-4 border border-[#094CA0] transition-all duration-300`}
        >
          News Articles
        </button>
      </div>

      <div className="md:mt-10 mt-5">
        {/* ================= PHOTOS ================= */}

        {activeTab === 1 && (
          <div>
            {/* EVENTS GRID */}

            {selectedEvent === null ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5 xl:px-0">
                {galleryEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => {
                      setSelectedEvent(event);
                      setVisibleCount(12);
                    }}
                    className="group cursor-pointer rounded-3xl overflow-hidden shadow-md bg-white"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-18 3xl:text-[22px] font-semibold font-manrope ">
                        {event.title}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {event.images.length} Photos
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* BACK BUTTON */}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mb-8 flex items-center gap-2 bg-[#094CA0] text-white px-5 py-2 rounded-full"
                >
                  <ArrowBackIcon />
                  Back To Events
                </button>

                {/* TITLE */}

                <h2 className="text-[28px] font-semibold mb-8">
                  {selectedEvent.title}
                </h2>

                {/* PHOTOS GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {selectedEvent.images
                    .slice(0, visibleCount)
                    .map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        loading="lazy"
                        onClick={() => openModal(index)}
                        className="rounded-2xl cursor-pointer hover:scale-105 hover:opacity-90 transition duration-300"
                      />
                    ))}
                </div>

                {/* VIEW MORE */}

                {visibleCount < selectedEvent.images.length && (
                  <div className="flex justify-center items-center w-full my-10">
                    <button
                      onClick={loadMore}
                      className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4"
                    >
                      <span className="font-medium text-[16px]">View More</span>

                      <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center">
                        <ExpandMoreIcon fontSize="large" />
                      </span>
                    </button>
                  </div>
                )}

                {/* VIEW LESS */}

                {visibleCount >= selectedEvent.images.length &&
                  selectedEvent.images.length > 12 && (
                    <div className="flex justify-center items-center w-full my-10">
                      <button
                        onClick={() => setVisibleCount(12)}
                        className="group mt-8 flex items-center justify-between bg-[#094CA0] text-white px-6 py-3 rounded-full w-fit gap-4"
                      >
                        <span className="font-medium text-[16px]">
                          View Less
                        </span>

                        <span className="bg-[#E5F4FF] text-[#094ca0] rounded-full w-9 h-9 flex items-center justify-center">
                          <KeyboardArrowUpIcon fontSize="large" />
                        </span>
                      </button>
                    </div>
                  )}
              </>
            )}
          </div>
        )}

        {/* ================= VIDEOS ================= */}

        {activeTab === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={video}
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
        )}

        {/* ================= BLOGS ================= */}

        {activeTab === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:mt-10 mt-5">
            {blogs.map((item, index) => (
              <div
                key={index}
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
                      />
                      <span>{item.date}</span>||<span>{item.topic}</span>
                    </div>

                    <h3 className="text-[21px] leading-8 font-semibold ">
                      {item.title}
                    </h3>

                    <p className="text-[#66686C] text-base">{item.desc}.....</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}

      {selectedIndex !== null && selectedEvent && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* CLOSE */}

          <button
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={closeModal}
          >
            ✕
          </button>

          {/* PREV */}

          <button
            className="absolute left-5 text-white text-5xl z-50"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* IMAGE */}

          <img
            src={selectedEvent.images[selectedIndex]}
            alt=""
            className="max-w-[90%] max-h-[85%] rounded-xl"
          />

          {/* NEXT */}

          <button
            className="absolute right-5 text-white text-5xl z-50"
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
