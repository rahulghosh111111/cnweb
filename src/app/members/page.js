'use client';

import DomainScroll from '@/components/Members/DomainScroll';
import HeroSection from '@/components/Members/HeroSection';
import React,{useState, useRef} from 'react';

export default function Members() {
  const [currentDomain , setCurrentDomain] = useState(0);
  const scrollContainerRef = useRef(null);
  return (
    <div className="bg-[linear-gradient(180deg,#9B5E4E_0%,#550909_100%)]">
      <HeroSection />
      <div className="pt-6 pb-12 md:pt-12 md:pb-20">
        <DomainScroll 
      currentDomain={currentDomain}
      setCurrentDomain={setCurrentDomain}
      scrollContainerRef={scrollContainerRef}
      />
      </div>
    </div>
  );
}
