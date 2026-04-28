import React, { useEffect } from "react";
import BlogsBanner from "../components/Blogs/BlogsBanner";
import BlogsCombine from "../components/Blogs/BlogsCombine";

const BlogPages = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <BlogsBanner />
      <BlogsCombine />
    </>
  );
};

export default BlogPages;
