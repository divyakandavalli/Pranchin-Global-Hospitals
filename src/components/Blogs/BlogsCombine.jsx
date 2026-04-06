import React from "react";

import blogimg from "../../assets/images/blog_topic_img.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
const BlogsCombine = () => {
  const blogs = [
    {
      id: 131,
      url: "/blog-details",
      title: "Independence day event of Launching My health challenge at Sravani Hospital",
      date: "December 22, 2025",
      image: blogimg,
      desc: "This Independence Day, Sravani Hospitals has launched ‘My Health Challenge’ — a unique ",
      topic: "Research",
    },
    {
      id: 132,
      url: "/blog-details",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 133,
      url: "/blog-details",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 134,
      url: "/blog-details",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
    {
      id: 135,
      url: "/blog-details",
      title: "Tips for Managing Stress to Improve Health",
      date: "September 11, 2025",
      image: blogimg,
      desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
      topic: "Research",
    },
  ];
  return (
    <div className="xl:max-w-[95%] 3xl:max-w-[85%] mx-auto py-10 xl:py-24 px-3 md:px-10 xl:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="border w-[135px] border-[#094ca0] text-[#094ca0] font-manrope font-medium px-4 py-1 rounded-full tracking-[3px]  text-[16px]">
          Health Tips
        </span>
        <h2 className="text-4xl font-manrope md:text-[64px]  font-semibold mt-4 leading-tight">
          Read Our Latest{" "}
          <span className="italic font-light font-instrumental text-[#5187af]">
            News & Articles
          </span>
        </h2>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {blogs.map((item, index) => (
          <div
            key={index*2.665}
            className="rounded-2xl overflow-hidden p-4 font-manrope bg-[#F4F5F9]"
          >
            <div className="relative w-full flex flex-col gap-4 ">
              <img src={item.image} alt={item.title} className="rounded-xl" />
              <Link
                to={item.url}
                className="flex flex-col gap-3 bg-[#DDEADB] sm:p-5 p-4 rounded-xl"
              >
                <div className="flex flex-row flex-wrap gap-2 text-base items-center text-[#4D6E76]">
                  <ArticleIcon fontSize="small" className="text-[#094ca0]" />{" "}
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
    </div>
  );
};

export default BlogsCombine;
