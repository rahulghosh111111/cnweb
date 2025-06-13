"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Button from './Button'; // Remove Button import since we won't use it
import { ArrowRight } from 'lucide-react';

export default function EventsSection() {
  return (
    <section
      className="w-full min-h-[700px] relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Background image with better loading */}
      <Image
        src="/ourEvents.jpg"
        alt="Events Background"
        fill
        priority
        className="object-cover z-0"
        quality={90}
      />

      {/* Enhanced gradient overlay with CSS animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-emerald-500/70 to-teal-700/80 z-0 " />

        <h1
        className="text-4xl sm:text-6xl  mb-20 mt-12 md:mt-16 z-10 text-center font-['Gang_of_Three',Arial,sans-serif] text-[#ffe08a] tracking-wider animate-fadeIn"

      >
        OUR   <span className="font-black text-4xl sm:text-6xl leading-tight tracking-tight bg-gradient-to-r from-[#da3315] to-[#a90303] bg-clip-text text-transparent">
          EVENTS
        </span>
      </h1>

      <div
        className="relative mb-10 md:mb-20 z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl px-4 md:px-8 gap-8 lg:gap-12 animate-scaleIn"
      >
        {/* Enhanced image card with hover effects */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 group rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 transform perspective-1000">
          {/* <div className="w-full h-full bg-gradient-to-b from-black/30 to-black/70 absolute inset-0 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div> */}
          <Image
            src="/ourEvents.jpg"
            alt="Event"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>

        <div className="flex flex-col items-start justify-center flex-1 text-center md:text-left bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl">
          <p
            className="text-white text-base md:text-xl mb-6 md:mb-8 leading-relaxed"
          >
            Unleash your creativity. Connect, attend, and spark growth through our
            carefully curated events designed to inspire and transform.
          </p>
          <div
            className="flex justify-center md:justify-start w-full"
          >
            <div className="transform transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-glow">
              <Link 
                href="/events"
                className="bg-gradient-to-r from-[#da3315] to-[#a90303]  font-bold py-1.5 px-6 rounded-lg border-2 border-[#da3315]/30 shadow-lg flex items-center no-underline"
              >
                Explore Events <ArrowRight className="inline ml-2 h-5 w-5" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
