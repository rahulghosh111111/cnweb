import React from 'react';

const JoinTeam = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-500 to-black min-h-[200px] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 py-10">
      
      <div className="text-center sm:text-left text-white font-bold text-3xl sm:text-4xl mb-6 sm:mb-0">
        <h1 style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}>JOIN OUR TEAM</h1>
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-orange-500 rounded-full text-lg sm:text-xl font-medium transition-all duration-200 hover:bg-orange-500 hover:text-white hover:scale-105">
          Get Started   
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
