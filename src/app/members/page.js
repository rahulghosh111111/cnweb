import DomainScroll from '@/components/Members/DomainScroll';
import HeroSection from '@/components/Members/HeroSection';
import React from 'react';

export default function Members() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#9B5E4E_0%,#550909_100%)]">
      <HeroSection />
      <DomainScroll />
    </div>
  );
}
