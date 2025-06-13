'use client';

import Slider from "@/components/Members/Slider";
import Image from "next/image";
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

// SocialIcons component for lead and member cards
function SocialIcons({ socials }) {
  return (
    <div className="flex gap-5 justify-center mt-2">
      {socials?.instagram && (
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="text-[#D9C921] w-5 h-5 hover:scale-110 transition" />
        </a>
      )}
      {socials?.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="text-[#D9C921] w-5 h-5 hover:scale-110 transition" />
        </a>
      )}
      {socials?.twitter && (
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="text-[#D9C921] w-5 h-5 hover:scale-110 transition" />
        </a>
      )}
    </div>
  );
}

export default function DomainSection({ domain, isActive, showAll })  {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      {/* Domain Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
        {domain.name}
      </h1>
      <div className="w-24 h-1 bg-[#D9C921] mx-auto rounded-full mb-10 md:mb-12" />

      {/* Lead Member - Always Fixed */}
      <div className="flex justify-center mb-6 md:mb-8 w-full">
        <div className="relative flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D9C921] shadow-2xl">
            <Image
              src={domain.lead.image}
              alt={domain.lead.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-white">{domain.lead.name}</h3>
            <SocialIcons socials={domain.lead.socials} />
          </div>
          {/* Lead Badge */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-[#D9C921] text-black px-2 py-1 rounded-full text-sm md:text-sm font-bold shadow-md"
            aria-label="Lead">
            LEAD
          </div>
        </div>
      </div>

      {/* Members Slider */}
      <Slider members={domain.members} showAll={showAll} />
    </div>
  );
}
