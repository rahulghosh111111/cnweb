"use client";

import Image from "next/image";
import SliderNavigator from "../../components/Events/SliderNavigator";
import { useState, useEffect } from "react";

const EventComponent = ({
  title,
  description,
  bgImage,
  mobileBgImage,
  themeColor,
  registerLink,
  logo,
  positionIndex,
  totalEvents,
  registrationInfo,
  eventPhotos,
  setCurrent,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const background = isMobile ? mobileBgImage : bgImage;

  return (
    <div
      className="w-screen h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center box-border"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      {/* Hero Content */}
      <div className="w-full max-w- mx-auto text-white flex flex-col items-center justify-between px-4 py-6 sm:mt-10  relative min-h-[85vh] sm:h-[300px]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full flex-1">
          <div className="flex flex-col items-center md:items-start justify-center my-auto ">
            <h1 className="text-4xl lg:text-[42px] font-bold mb-4 text-center md:text-left">
              {title}
            </h1>
            <p className="text-lg xl:text-xl mb-8 max-w-xl text-center md:text-left">
              {description}
            </p>
            <a
              href={registerLink}
              className="px-5 py-3 rounded-lg font-semibold text-white inline-block text-sm md:text-base transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: themeColor }}
            >
              {registrationInfo}
            </a>
          </div>
        </div>

        {/* Slider Navigator - Positioned at bottom */}
        <div className="w-full flex justify-center mt-8 mb-4 md:mb-0">
          <SliderNavigator
            total={totalEvents}
            current={positionIndex}
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
