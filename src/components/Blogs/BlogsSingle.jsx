import React, { useEffect } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import blogimg from "../../assets/images/blog_topic_img.jpg";
import WestIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";
const BlogsSingle = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="xl:max-w-[1440px] mx-auto py-10 xl:py-24 px-3 md:px-10 xl:px-20">
      {/* Heading */}
      <Link
        to="/blogs"
        className={` md:text-lg text-base rounded-3xl w-48 flex justify-center items-center gap-2 md:px-6 py-0.5 px-2 hover:bg-[#f37721] hover:border-[#f37721] hover:text-white border border-[#094CA0] transition-all duration-300`}
      >
        <WestIcon /> Back to Blogs
      </Link>
      <div className="text-left">
        <h2 className="text-2xl font-manrope md:text-5xl  font-semibold mt-4 leading-tight">
          Independence day event of Launching My health challenge at Sravani
          Hospital
        </h2>
        <div className="flex flex-row flex-wrap gap-2 my-4 text-base items-center text-[#4D6E76]">
          <ArticleIcon fontSize="small" className="text-[#094ca0]" />{" "}
          <span>Dec 26,2026</span>||<span>Research</span>
        </div>
        <div className="pt-2">
          <img
            src={blogimg}
            alt=""
            className="md:rounded-3xl rounded-xl w-full md:aspect-[21/9]"
          />
        </div>
        <div className="flex flex-col gap-3 font-manrope md:text-lg text-base py-4">
          <p>
            has partnered with L&T Metro Rail (Hyderabad) Limited for the
            semi-naming rights of the KPHB Colony Metro Station. The station
            will now be called “Sravani Hospitals – KPHB Colony Metro Station.
          </p>
          <p>
            The collaboration was marked by the presence of Dr. Naveen
            Chettupalli, President; Ms. Sravani Chettupalli, Founder & CEO; and
            Mr. Lokesh Saxena, Chief of Security, L&T Metro Rail.
          </p>
          <p>
            As part of the initiative, a smart AI+ Health Kiosk has been set up
            at the station, enabling commuters to check vitals like BP, heart
            rate, and oxygen levels within seconds.
          </p>
        </div>
      </div>
      {/* Grid */}
    </div>
  );
};

export default BlogsSingle;
