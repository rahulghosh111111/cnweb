'use client';

import HeroSection from '@/components/membersUpdated/HeroSection';
import MemberScroll from '@/components/membersUpdated/MemberScroll';
import React,{useState, useRef} from 'react';

export default function Members() {
  const [currentDomain , setCurrentDomain] = useState(0);
  const scrollContainerRef = useRef(null);
  return (
    <div className="">
      {/* <HeroSection /> */}
      {/* <div className="pt-6 pb-12 md:pt-12 md:pb-20">
        <DomainScroll 
      currentDomain={currentDomain}
      setCurrentDomain={setCurrentDomain}
      scrollContainerRef={scrollContainerRef}
      />
      </div> */}

      <HeroSection/>

      <MemberScroll/>
    </div>
  );
}
