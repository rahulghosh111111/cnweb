"use client"
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OurNinjas = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const ninjas = [
    { id: 1, name: "Dr. Chittaranjan Pradhan", position: "Faculty Coordinator", image: "/chittaranjan.png" },
  ];

  const handleCardInteraction = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section
      className="relative py-20 px-4 sm:px-0 bg-[#5c2e0d] bg-cover bg-center"
      style={{ backgroundImage: "url('/OurNinjasLanding.png')" }}
    >
      <div className="absolute inset-0 bg-[rgba(60,30,10,0.7)] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2
          className="text-center mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          <span className="text-white">OUR </span>
          <span className="text-[#d12c2c]">
            Guide
            {/* <span className="inline-block transform -translate-y-1 text-[#d12c2c]">
              
            </span> */}
            
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {ninjas.map((ninja) => (
            <div
              key={ninja.id}
              className={`ninja-card w-[300px] md:w-[200px] lg:w-[300px] transition-transform duration-300 cursor-pointer group ${
                activeCard === ninja.id 
                  ? 'transform -translate-y-2 mobile-card-active' 
                  : 'hover:-translate-y-2'
              }`}
              onClick={() => handleCardInteraction(ninja.id)}
              onTouchStart={() => handleCardInteraction(ninja.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardInteraction(ninja.id);
                }
              }}
            >
              <div className={`w-full lg:h-80 h-60 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
                activeCard === ninja.id 
                  ? 'filter-none' 
                  : 'filter grayscale group-hover:grayscale-0'
              }`}>
                <Image
                  width={300}
                  height={300}
                  src={ninja.image}
                  alt={`${ninja.name} - ${ninja.position}`}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    activeCard === ninja.id 
                      ? 'scale-105' 
                      : 'group-hover:scale-105'
                  }`}
                />
              </div>

              <div className="text-center mt-4 text-white ">
                <h3
                  className="text-xl font-semibold tracking-wide mb-1"
                >
                  {ninja.name}
                </h3>
                <p className="text-gray-300 uppercase text-sm tracking-wide">{ninja.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-14 ">
       <Link href="/members" >  <button 
            className="group flex cursor-pointer items-center gap-2 bg-[#d12c2c] hover:bg-[#e03a3a] text-white px-8 py-2 rounded-lg font-bold  tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Whole Team
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight size={24} />
            </span>
          </button>
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default OurNinjas;
