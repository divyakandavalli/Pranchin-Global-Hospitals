import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const GalleryTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const images = [];

  for (let i = 1; i <= 64; i++) {
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
    <div className="2xl:max-w-[80%] md:w-[95%] w-full mx-auto  mt-5 ">
      <div className="p-6">
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
    </div>
  );
};
export default GalleryTabs;
