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
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Hero Content */}
      <div className="w-full max-w-5xl mx-auto text-white flex flex-col items-center justify-center px-4 py-10 md:py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="md:w-1/2 flex flex-col items-start justify-center mt-32 sm:mt-24 lg:mt-32">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg xl:text-xl mb-8 max-w-xl">{description}</p>
            <a
              href={registerLink}
              className="px-5 py-3 rounded-lg font-semibold text-white inline-block text-sm md:text-base transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: themeColor }}
            >
              {registrationInfo}
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-24 lg:mt-32">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[400px] aspect-[4/3]">
              <Image
                src={eventPhotos}
                alt="event-photos"
                fill
                className="rounded-2xl shadow-xl object-contain transform hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 480px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Slider Navigator - Moved Inside */}
        <div className="w-full flex justify-center mt-[90%] sm:mt-16">
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
