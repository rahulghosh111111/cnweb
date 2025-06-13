"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const getAnimationDuration = () => {
    switch(speed) {
      case "slow": return "20s";
      case "medium": return "20s";
      default: return "20s"; // fast
    }
  };

  const animationDuration = getAnimationDuration();

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className || ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll${direction === "right" ? "Right" : "Left"} ${animationDuration} linear infinite`,
          animationPlayState: (pauseOnHover && isHovering) ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 w-[350px] mx-4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-[#8d0e0e]/30 to-black/80 backdrop-blur-md border border-[#fa5935]/20 rounded-xl overflow-hidden">
              <div className="p-6 h-full flex flex-col">
                {/* {item.icon && (
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                )} */}
                <h3 className="font-bold text-xl mb-3 text-[#fa5935]">{item.title}</h3>
                <p className="text-[#bfbfbd]">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Clone items for seamless loop */}
        {items.map((item, idx) => (
          <motion.div
            key={`${item.id}-clone-${idx}`}
            className="flex-shrink-0 w-[350px] mx-4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-br from-[#8d0e0e]/30 to-black/80 backdrop-blur-md border border-[#fa5935]/20 rounded-xl overflow-hidden">
              <div className="p-6 h-full flex flex-col">
                {/* {item.icon && (
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                )} */}
                <h3 className="font-bold text-xl mb-3 text-[#fa5935]">{item.title}</h3>
                <p className="text-[#bfbfbd]">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-50%)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
