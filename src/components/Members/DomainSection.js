'use client';

import Slider from "@/components/Members/Slider";
import Image from "next/image";
import React from 'react'

export default function DomainSection({ domain, isActive, showAll })  {
  return (
     <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      {/* Domain Header */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {domain.name}
        </h1>
        <div className="w-24 h-1 bg-[#D9C921] mx-auto rounded-full" />
      </div>

      {/* Lead Member - Always Fixed */}
      <div className="flex justify-center mb-6 md:mb-8 w-full">
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D9C921] shadow-2xl">
            <Image
              src={domain.lead.image}
              alt= {`${domain.lead.name} - ${domain.lead.position}`}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-white">{domain.lead.name}</h3>
            <p className="text-[#D9C921] font-medium">{domain.lead.position}</p>
          </div>
          {/* Lead Badge */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#D9C921] text-black px-2 py-1 rounded-full text-sm md:text-sm font-bold shadow-md"
          aria-label="Lead">
            LEAD
          </div>
        </div>
      </div>
        
        <Slider members={domain.members} showAll={showAll}/>
    </div>
  );
}

