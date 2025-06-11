'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({ members, showAll }) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Correct useCallback syntax
  const scroll = useCallback((direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newScrollLeft =
      container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  }, []);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#D9C921] hover:bg-[#B8A91C] text-black p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#D9C921] hover:bg-[#B8A91C] text-black p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Members Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto px-6 pt-4 pb-2 md:px-12 md:pt-6 md:pb-4
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {members.map((member) => (
          <div
            key={member.id}
            className="flex-shrink-0 w-52 border border-[#3B2A22]  bg-[#7B4A3A] rounded-lg shadow-md p-3 flex flex-col items-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-[#D9C921] transition-all duration-300 shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center mt-3">
              <h4 className="text-white font-medium text-sm">{member.name}</h4>
              <p className="text-white/70 text-xs">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
