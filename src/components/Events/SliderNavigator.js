import React, { useRef } from "react";
import Image from "next/image";
import sliderIcon from "../../../public/slider-logo.png";

export default function SliderNavigator({ total, current, setCurrent }) {
    const sliderRef = useRef(null);
  
    const handleClick = (e) => {
      const rect = sliderRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newValue = Math.round((clickX / rect.width) * (total - 1));
      setCurrent(newValue);
    };
  
    return (
      <div
        ref={sliderRef}
        onClick={handleClick}
        className="relative w-full max-w-[90%] sm:max-w-[500px] h-8 sm:h-10 mt-16 mb-4 cursor-pointer"
      >
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black/60 rounded-full transform -translate-y-1/2 z-0" />
  
        {/* Hidden range input */}
        <input
          type="range"
          min="0"
          max={total - 1}
          value={current}
          onChange={(e) => setCurrent(parseInt(e.target.value))}
          className="absolute w-full h-full opacity-0 z-10"
        />
  
        {/* Slider icon */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            left: `${(current / (total - 1)) * 100}%`,
            transition: "left 0.3s ease",
          }}
        >
          <Image
            src={sliderIcon}
            alt="slider"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    );
  }
