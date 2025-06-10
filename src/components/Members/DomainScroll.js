'use client';

import React from 'react';
import { domainsData } from '@/app/data/domainsData';
import DomainSection from '@/components/Members/DomainSection';

export default function DomainScroll({ currentDomain, setCurrentDomain, scrollContainerRef }) {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-1/4 bg-black/20 backdrop-blur-sm flex flex-col items-start pt-8 px-6">
        {/* Heading with dot and line */}
        <div className="flex items-center mb-8 relative w-full">
          <span className="w-4 h-4 bg-[#D9C921] rounded-full mr-3 border-4 border-[#8D0E0E]" />
          <h2 className="text-white text-2xl font-bold">Domain</h2>
          {/* Vertical line */}
          <span className="absolute left-2 top-6 w-0.5 h-[calc(100vh-9rem)] bg-[#8D0E0E]" />
        </div>
        {/* Domain buttons/links */}
        <div className="space-y-4 w-full">
          {domainsData.map((domain, index) => (
            <button
              key={domain.id}
              onClick={() => {
                if (!scrollContainerRef?.current) return;
                const container = scrollContainerRef.current;
                const sectionHeight = container.scrollHeight / domainsData.length;
                const targetScroll = sectionHeight * index;
                container.scrollTo({ top: targetScroll, behavior: 'smooth' });
                setCurrentDomain(index);
              }}
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                currentDomain === index
                  ? 'bg-[#D9C921] text-black font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {domain.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto scroll-smooth"
      >
        {domainsData.map((domain, index) => (
          <div
            key={domain.id}
            className="min-h-screen p-8 flex flex-col justify-center"
          >
            <DomainSection
              domain={domain}
              isActive={currentDomain === index}
              showAll={currentDomain === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
