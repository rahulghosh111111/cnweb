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
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden box-border"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Hero Content */}
      <div className="w-full max-w-6xl mx-auto text-white flex flex-col md:flex-row justify-evenly items-start gap-5 px-4 overflow-x-hidden">
        <div className="mt-32 md:mt-60 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-lg md:text-2xl mb-6 max-w-xl">{description}</p>
          <a
            href={registerLink}
            className="px-4 py-2 rounded-lg font-semibold text-white inline-block text-sm md:text-base"
            style={{ backgroundColor: themeColor }}
          >
            {registrationInfo}
          </a>
        </div>

        <div className="shrink-0 overflow-hidden w-full md:w-auto flex justify-center md:block mt-10 md:mt-60">
          <Image
            src={eventPhotos}
            alt="event-photos"
            width={isMobile ? 250 : 400}
            height={isMobile ? 180 : 300}
            className="rounded-3xl shadow-lg object-contain"
          />
        </div>
      </div>

      {/* Slider Navigator */}
      <div className="mt-8 w-full flex justify-center px-4">
        <SliderNavigator
          total={totalEvents}
          current={positionIndex}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export default EventComponent;
