import React from "react";
import Image from "next/image";
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

const Herosection = () => {
  return (
    <div className="relative h-[900px]  w-full ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.png"
          alt="Coding Ninjas Temple Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-between pt-40 h-full container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-20 animate-slide-down">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#E63946] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wider"
            style={{
              textShadow:
                "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            CODING
          </h1>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#E63946] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wider"
            style={{
              textShadow:
                "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            NINJAS
          </h1>
        </div>

        {/* <div className="flex flex-col items-center animate-slide-up">
          <p className="text-white text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in">
            Where Code Meets Mastery
          </p>
          
          <div className="flex gap-4 animate-scale-in">
            <Link 
              href="/explore" 
              className="bg-[#E63946] hover:bg-[#c2303a] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Herosection;
