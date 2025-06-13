import React from 'react';

const JoinTeam = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-[#0d0d0d] to-black min-h-[280px] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 py-12 overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#fa5935] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#8d0e0e] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FF8820] rounded-full blur-xl"></div>
      </div>

      {/* Minimal geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-[#fa5935] rotate-45"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-[#8d0e0e] transform rotate-12"></div>
      </div>

      <div className="relative z-10 text-center sm:text-left text-white mb-8 sm:mb-0">
        <div className=" flex space-x-2 mb-4 items-center justify-center sm:justify-start">
          <h1 
            className="font-black text-4xl sm:text-5xl leading-tight tracking-tight transition-all duration-300"
            style={{ 
              fontFamily: "'Gang of Three', Arial, sans-serif",
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            JOIN OUR
          </h1>
          <h1 
            className="font-black text-4xl sm:text-5xl leading-tight tracking-tight bg-gradient-to-r from-[#fa5935] to-[#FF8820] bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Gang of Three', Arial, sans-serif",
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            TEAM
          </h1>
        </div>
        <p className="text-[#bfbfbd] text-lg sm:text-xl max-w-md leading-relaxed">
          Be part of something extraordinary. Join innovators, creators, and dreamers.
        </p>
      </div>

      <div className="relative z-10 flex justify-center">
        <button className="group relative px-8 py-4 sm:px-10 sm:py-4 bg-black hover:bg-[#0d0d0d] text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-[#fa5935] shadow-lg hover:shadow-[#fa5935]/20">
          <span className="relative z-10">
            Get Started
          </span>
          
          {/* Subtle arrow icon */}
          <svg 
            className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
