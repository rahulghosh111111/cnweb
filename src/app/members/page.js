'use client';

import DomainScroll from '@/components/Members/DomainScroll';
import HeroSection from '@/components/Members/HeroSection';
import React,{useState, useRef} from 'react';

export default function Members() {
  const [currentDomain , setCurrentDomain] = useState(0);
  const scrollContainerRef = useRef(null);
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#9B5E4E_0%,#550909_100%)]">
      <HeroSection />
      <DomainScroll 
      currentDomain={currentDomain}
      setCurrentDomain={setCurrentDomain}
      scrollContainerRef={scrollContainerRef}
      />
    </div>
  );
}
