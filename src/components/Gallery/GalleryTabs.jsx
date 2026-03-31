import React, { useState } from "react";
const GalleryTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [];

  for (let i = 17; i <= 142; i++) {
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
  return (
    <div className="2xl:max-w-[80%] md:w-[95%] w-full mx-auto  mt-5 ">
      <div className="p-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {images.map((img, index) => (
            <img
              loading="lazy"
              key={index}
              src={img}
              alt={`gallery-${index}`}
              className="cursor-pointer rounded-lg hover:scale-105 w-full transition"
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
      </div>
    </div>
  );
};

export default GalleryTabs;

// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Masonry from '@mui/lab/Masonry';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import food_img_1 from "../images/portfolio/3d_img_1.png"
// import food_img_2 from "../images/portfolio/3d_img_2.png"
// import food_img_3 from "../images/portfolio/3d_img_3.png"
// import food_img_4 from "../images/portfolio/3d_img_4.png"
// import "../css/portfolio.css"
// const FoodBakery = () => {
//     const itemData = [
//         {
//             img: food_img_1,
//             title: 'Fern',
//         },
//         {
//             img: food_img_2,
//             title: 'Snacks',
//         },
//         {
//             img: food_img_3,
//             title: 'Mushrooms',
//         },
//         {
//             img: food_img_4,
//             title: 'Tower',
//         },
//     ];
// const [selectedImage, setSelectedImage] = useState(null);
// const [currentIndex, setCurrentIndex] = useState(0);
// const handleImageClick = (index) => {
//     setCurrentIndex(index);
//     setSelectedImage(itemData[index].img);
// };
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.key === "Escape") setSelectedImage(null);
//         };
//         window.addEventListener("keydown", handleKeyDown);
//         return () => window.removeEventListener("keydown", handleKeyDown);
//     }, []);
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);
//     return (
//         <div className="foodbakery-parent">
//             <div>
//                 <h1 id="topHeading" className="text-center">
//                     <span
//                         style={{
//                             color: "#fec436",
//                         }}
//                     >
//                         3D
//                     </span>
//                 </h1>
//                 <Box
//                     sx={{
//                         width: '100vw',
//                         padding: { xs: 2, sm: 4, md: 6 },
//                         minHeight: 'auto',
//                         overflowX: 'hidden',
//                     }}
//                 >
//                     <Masonry
//                         columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
//                         spacing={4}
//                     >
//                         <div
//                             onClick={() => setSelectedImage(true)} // just open modal
//                             style={{
//                                 overflow: "hidden",
//                                 padding: "10px",
//                                 borderRadius: "10px",
//                                 minHeight: "280px",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 flexDirection: "column",
//                                 cursor: "pointer"
//                             }}
//                         >
//                             {itemData.map((item, index) => (
//                                 <img
//                                     key={index}
//                                     className={`threedimg${index + 1}`}
//                                     src={item.img}
//                                     alt={item.title}
//                                     loading="lazy"
//                                     style={{
//                                         display: "block",
//                                         width: "100%",
//                                         objectFit: "cover",
//                                         borderRadius: "8px",
//                                         transition: "transform 0.3s ease",
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     </Masonry>
//                 </Box>
//             </div>
//             {selectedImage && (
//                 <div className="fullscreen-modal">
//                     <span className="close-btn" onClick={() => setSelectedImage(null)}>âœ–</span>
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             padding: "1rem",
//                         }}
//                     >
//                         {itemData.map((item, index) => (
//                             <img
//                                 key={index}
//                                 src={item.img}
//                                 alt={item.title}
//                                 className={`threedimg${index + 1}`}
//                                 style={{
//                                     maxWidth: "90%",
//                                     objectFit: "contain",
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default FoodBakery
