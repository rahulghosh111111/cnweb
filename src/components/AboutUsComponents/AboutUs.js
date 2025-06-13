
"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-center items-center min-h-screen bg-[#2F2B2B] pt-10 px-4'>
      <div className="w-full md:w-1/2 md:h-1/2 text-left">
        <h1 className="text-6xl sm:text-[80px] md:text-[100px] font-bold text-[#FF8820] mb-6 md:text-center text-center">
          About us
        </h1>
        <div className="text-[#FF8820] text-[16px] sm:text-[18px] md:text-[20px] md:ml-8 space-y-3">
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu          </p>
        </div>
      </div>
      <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center gap-5 ">
        <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl" />
        <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl" />
      </div>
    </div>
  );
};

export default AboutUs;
