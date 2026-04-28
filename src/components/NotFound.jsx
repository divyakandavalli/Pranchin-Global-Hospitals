import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center my-10 items-center flex-col gap-4">
      <h1 className="md:text-8xl text-4xl tracking-widest py-10 font-bold">404</h1>
      <p className="text-xl text-center px-8">
        Sorry, the page you're looking for is unavailable
      </p>
      <div className="xl:flex justify-center items-center">
        {/* BUTTON */}
        <Link
          to="/"
          className=" flex items-center justify-between bg-[#f37721] border border-[#f37721] hover:bg-transparent hover:border-[#f37721] duration-300 transition-all text-white hover:text-[#f37721] px-4 py-2 rounded-full w-fit gap-4 "
        >
          <span className="font-medium font-manrope text-[14px] capitalize">
            Return to Home Page
          </span>
          {/* Arrow Circle */}
          <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-7 h-7 flex items-center justify-center text-lg">
            <EastIcon fontSize="small" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
