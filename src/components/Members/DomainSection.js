'use client';

import Slider from "@/components/Members/Slider";
import Image from "next/image";
import React from 'react'

export default function DomainSection({ domain, isActive, showAll })  {
  return (
     <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      {/* Domain Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {domain.name}
        </h1>
        <div className="w-24 h-1 bg-[#D9C921] mx-auto rounded-full" />
      </div>

      {/* Lead Member - Always Fixed */}
      <div className="flex justify-center mb-12">
        <div className="relative group">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D9C921] shadow-2xl">
            <Image
              src={domain.lead.image}
              alt= {`${domain.lead.name} - ${domain.lead.position}`}
              width={192}
              height={192}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-white">{domain.lead.name}</h3>
            <p className="text-[#D9C921] font-medium">{domain.lead.position}</p>
          </div>
          {/* Lead Badge */}
          <div className="absolute -top-2 -right-2 bg-[#D9C921] text-black px-3 py-1 rounded-full text-sm font-bold"
          aria-label="Lead">
            LEAD
          </div>
        </div>
      </div>
        
        <Slider members={domain.members} showAll={showAll}/>
    </div>
  );
}

