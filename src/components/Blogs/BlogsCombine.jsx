import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
const BlogsCombine = () => {
  const [visibleCount, setVisibleCount] = useState(12);

  
  const blogs = [
    // {
    //   id: 131,
    //   url: "/blog-details",
    //   title: "Independence day event of Launching My health challenge at Sravani Hospital",
    //   date: "December 22, 2025",
    //   image: blogimg,
    //   desc: "This Independence Day, Sravani Hospitals has launched ‘My Health Challenge’ — a unique ",
    //   topic: "Research",
    // },
    // {
    //   id: 132,
    //   url: "/blog-details",
    //   title: "Tips for Managing Stress to Improve Health",
    //   date: "September 11, 2025",
    //   image: blogimg,
    //   desc: "Healthy habits are easier to adopt when they start small. Begin with simple actions such as",
    //   topic: "Research",
    // },
  ];

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };
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
            key={index * 2.665}
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
                <p className="text-[#66686C] text-[14px] 3xl:text-[15px]">{item.desc}.....</p>
              </Link>
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <div>
            <h2 className="text-xl text-[#094ca0] font-bold font-manrope">
              Under Construction
            </h2>
            <p>We Should be back shortly. Thank you for your patience.</p>
          </div>
        )}
      </div>

      {visibleCount < blogs.length && (
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
  );
};

export default BlogsCombine;
