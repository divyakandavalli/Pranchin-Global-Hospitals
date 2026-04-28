import React, { useEffect } from "react";
import GalleryBanner from "../components/Gallery/GalleryBanner";
import GalleryTabs from "../components/Gallery/GalleryTabs";

const Gallery = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <GalleryBanner />
      <GalleryTabs />
    </>
  );
};

export default Gallery;
