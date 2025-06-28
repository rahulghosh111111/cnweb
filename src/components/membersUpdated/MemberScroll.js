import React, { useState, useRef } from 'react';
import { ChevronDown, Users, Crown, ChevronLeft, ChevronRight, Instagram, Linkedin, Github, Calendar } from 'lucide-react';
import * as memberData2025 from '../data/memberData2025';
import * as memberData2026 from '../data/memberData2026';

const MemberScroll = () => {
  const [expandedDomains, setExpandedDomains] = useState({});
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRefs = useRef({});

  // Combine year data
  const memberDataByYear = {
    2025: {
      leadership: memberData2025.leadership,
      domains: memberData2025.domains
    },
    // 2026: {
    //   leadership: memberData2026.leadership,
    //   domains: memberData2026.domains
    // }
  };

  // Get current year data
  const currentData = memberDataByYear[selectedYear];
  const currentLeadershipData = currentData?.leadership || memberData2025.leadership;
  const currentDomainsData = currentData?.domains || memberData2025.domains;

  const scrollLeft = (domainName) => {
    const container = scrollRefs.current[`${selectedYear}-${domainName}`];
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (domainName) => {
    const container = scrollRefs.current[`${selectedYear}-${domainName}`];
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const LeadershipCard = ({ leader }) => (
    <div className="relative group flex-shrink-0 w-52 sm:w-64">
      <div className="bg-gradient-to-br from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#fa5935]/20 ring-2 ring-[#FF8820]/50 shadow-2xl shadow-[#fa5935]/25">
        
        {/* Leader Image */}
        <div className="relative overflow-hidden h-48 sm:h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fa5935]/20 to-[#FF8820]/20 z-10"></div>
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r  from-[#FF8820] to-[#fa5935] text-white px-1 sm:px-2 py-2 sm:py-1.5 rounded-full text-xs sm:text-sm font-normal shadow-2xl shadow-[#FF8820]/40 z-20 backdrop-blur-sm border border-white/30">
            <Crown className="w-3 h-3 inline mr-1" />
            {leader.position}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
        </div>

        {/* Leader Info */}
        <div className="p-4 sm:p-6 relative z-10 bg-gradient-to-t from-[#0d0d0d]/98 to-transparent">
          <h3 className="text-white mb-4 sm:mb-6 text-center text-xl sm:text-2xl font-bold drop-shadow-2xl">
            {leader.name}
          </h3>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a 
              href={leader.social?.instagram || '#'} 
              className="group/social p-2 sm:p-3 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-[#fa5935] hover:to-[#FF8820] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#fa5935]/40 border border-gray-600/50 hover:border-[#fa5935]/50"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover/social:animate-pulse" />
            </a>
            <a 
              href={leader.social?.linkedin || '#'} 
              className="group/social p-2 sm:p-3 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-[#8d0e0e] hover:to-[#fa5935] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#8d0e0e]/40 border border-gray-600/50 hover:border-[#8d0e0e]/50"
            >
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover/social:animate-pulse" />
            </a>
            <a 
              href={leader.social?.github || '#'} 
              className="group/social p-2 sm:p-3 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-gray-700 hover:to-[#8d0e0e] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#8d0e0e]/40 border border-gray-600/50 hover:border-gray-400/50"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover/social:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const MemberCard = ({ member, isLead = false }) => (
    <div className={`relative group flex-shrink-0 ${isLead ? 'w-52 sm:w-64' : 'w-44 sm:w-52'}`}>
      <div className={`bg-gradient-to-br from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#fa5935]/20 ${isLead ? 'ring-2 ring-[#fa5935]/50 shadow-2xl shadow-[#FF8820]/25' : 'shadow-xl shadow-black/60'}`}>
        
        {/* Member Image */}
        <div className={`relative overflow-hidden ${isLead ? 'h-44 sm:h-60' : 'h-40 sm:h-48'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#fa5935]/20 to-[#FF8820]/20 z-10"></div>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {isLead && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#fa5935] to-[#FF8820] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl shadow-[#fa5935]/40 z-20 backdrop-blur-sm border border-white/30">
              <Crown className="w-4 h-4 inline mr-1" />
              LEAD
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
        </div>

        {/* Member Info */}
        <div className="p-3 sm:p-4 relative z-10 bg-gradient-to-t from-[#0d0d0d]/98 to-transparent">
          <h3 className={`text-white mb-3 sm:mb-4 text-center ${isLead ? 'text-lg sm:text-xl font-bold' : 'text-base sm:text-lg font-semibold'} drop-shadow-2xl`}>
            {member.name}
          </h3>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-2 sm:space-x-3">
            <a 
              href={member.social?.instagram || '#'} 
              className="group/social p-1 sm:p-2 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-[#fa5935] hover:to-[#FF8820] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#fa5935]/40 border border-gray-600/50 hover:border-[#fa5935]/50"
            >
              <Instagram className="w-2 h-2 sm:w-3 sm:h-3 text-white group-hover/social:animate-pulse" />
            </a>
            <a 
              href={member.social?.linkedin || '#'} 
              className="group/social p-1 sm:p-2 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-[#8d0e0e] hover:to-[#fa5935] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#8d0e0e]/40 border border-gray-600/50 hover:border-[#8d0e0e]/50"
            >
              <Linkedin className="w-2 h-2 sm:w-3 sm:h-3 text-white group-hover/social:animate-pulse" />
            </a>
            <a 
              href={member.social?.github || '#'} 
              className="group/social p-1 sm:p-2 bg-[#1c1919]/70 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-gray-700 hover:to-[#8d0e0e] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#8d0e0e]/40 border border-gray-600/50 hover:border-gray-400/50"
            >
              <Github className="w-2 h-2 sm:w-3 sm:h-3 text-white group-hover/social:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-black relative overflow-hidden pb-20 pt-0 sm:pt-8 px-0 sm:px-6 lg:px-8 xl:pl-10 xl:pr-20">
      
      <div className="relative z-10 py-4">
        <div className="mx-auto sm:max-w-full">

          {/* Leadership Section */}
          <div className="mb-16 sm:mb-32">
            {/* Mobile Year Selection - Above title */}
            <div className="sm:hidden mb-6">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Mobile Dropdown Button */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer relative group px-6 py-3 bg-gradient-to-r from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-150 shadow-xl shadow-black/60 hover:shadow-[#fa5935]/20 min-w-[140px] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#fa5935] group-hover:text-[#FF8820] transition-colors duration-150" />
                      <span className="text-white font-semibold text-base group-hover:text-[#fa5935] transition-colors duration-150">
                        {selectedYear}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 group-hover:text-[#fa5935] transition-all duration-150 ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </button>

                  {/* Mobile Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 z-50">
                      <div className="bg-gradient-to-br from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-2xl shadow-black/80 overflow-hidden">
                        <div className="relative z-10 p-1">
                          {Object.keys(memberDataByYear).map((year) => (
                            <button
                              key={year}
                              onClick={() => {
                                setSelectedYear(parseInt(year));
                                setIsDropdownOpen(false);
                              }}
                              className={`cursor-pointer w-full px-4 py-3 text-left rounded-lg transition-all duration-150 flex items-center space-x-2 ${
                                selectedYear === parseInt(year)
                                  ? 'bg-gradient-to-r from-[#fa5935] to-[#FF8820] text-white'
                                  : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#fa5935]/20 hover:to-[#FF8820]/20'
                              }`}
                            >
                              <Calendar className={`w-3 h-3 transition-all duration-150 ${
                                selectedYear === parseInt(year) 
                                  ? 'text-white' 
                                  : 'text-gray-400'
                              }`} />
                              <span className="font-semibold text-base">{year}</span>
                              {selectedYear === parseInt(year) && (
                                <div className="ml-auto">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Background overlay when dropdown is open */}
                  {isDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative mb-8 sm:mb-16">
              {/* Main title centered */}
              <div className="text-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Our Leaders
                </h1>
              </div>
              
              {/* Desktop Year Selection - Positioned to the right (hidden on mobile) */}
              <div className="hidden sm:block absolute top-0 right-4 sm:right-8 lg:right-12">
                <div className="relative">
                  {/* Desktop Dropdown Button */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer relative group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-150 shadow-xl shadow-black/60 hover:shadow-[#fa5935]/20 min-w-[120px] sm:min-w-[140px] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#fa5935] group-hover:text-[#FF8820] transition-colors duration-150" />
                      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#fa5935] transition-colors duration-150">
                        {selectedYear}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 group-hover:text-[#fa5935] transition-all duration-150 ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 z-50 w-full">
                      <div className="bg-gradient-to-br from-[#1c1919] to-[#0d0d0d] backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-2xl shadow-black/80 overflow-hidden">
                        <div className="relative z-10 p-1">
                          {Object.keys(memberDataByYear).map((year) => (
                            <button
                              key={year}
                              onClick={() => {
                                setSelectedYear(parseInt(year));
                                setIsDropdownOpen(false);
                              }}
                              className={`cursor-pointer w-full px-4 py-3 text-left rounded-lg transition-all duration-150 flex items-center space-x-2 ${
                                selectedYear === parseInt(year)
                                  ? 'bg-gradient-to-r from-[#fa5935] to-[#FF8820] text-white'
                                  : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#fa5935]/20 hover:to-[#FF8820]/20'
                              }`}
                            >
                              <Calendar className={`w-3 h-3 transition-all duration-150 ${
                                selectedYear === parseInt(year) 
                                  ? 'text-white' 
                                  : 'text-gray-400'
                              }`} />
                              <span className="font-semibold text-sm sm:text-base">{year}</span>
                              {selectedYear === parseInt(year) && (
                                <div className="ml-auto">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Desktop Background overlay when dropdown is open */}
                  {isDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                  )}
                </div>
              </div>
            </div>

            {/* Leadership Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 px-4 sm:px-0">
              {currentLeadershipData.map((leader) => (
                <div key={leader.id} className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#FF8820]/25 to-[#fa5935]/25 rounded-3xl blur-2xl animate-pulse"></div>
                  <LeadershipCard leader={leader} />
                </div>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div className="space-y-16 sm:space-y-32">
            {Object.entries(currentDomainsData).map(([domainName, domainData], domainIndex) => {
              const IconComponent = domainData.icon;
              return (
                <div key={`${selectedYear}-${domainName}`} className="relative">

                  <div className="absolute left-0 top-0 hidden sm:block">

                    <div className="relative z-20">
                      <div className={`w-16 h-16 bg-gradient-to-br ${domainData.color} rounded-full flex items-center justify-center shadow-2xl shadow-[#fa5935]/50 border-4 border-[#0d0d0d]/80 backdrop-blur-sm`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${domainData.color} rounded-full animate-ping opacity-20`}></div>
                        <div className={`w-8 h-8 bg-gradient-to-br ${domainData.color} rounded-full shadow-inner relative z-10 flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-white drop-shadow-lg" />
                          <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line from Circle to Content */}
                    <div className={`absolute left-8 top-16 w-px h-60 bg-gradient-to-b from-[#fa5935]/80 to-transparent shadow-lg shadow-[#fa5935]/30`}>
                      <div className="absolute inset-0 w-full bg-gradient-to-b from-[#FF8820]/40 to-transparent blur-sm"></div>
                    </div>
                  </div>

                  {/* Domain Content */}
                  <div className="sm:ml-16 ml-0">
                    {/* Domain Title Section */}
                    <div className="mb-8 sm:mb-16">
                      <div className="rounded-3xl pl-0 sm:pl-6 pt-3">
                        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4 text-center sm:text-left">
                          {domainName}
                        </h2>
                        <div className="flex items-center justify-center sm:justify-start text-[#bfbfbd] mb-4 sm:mb-6">
                          <span className="text-base sm:text-xl drop-shadow-md font-medium">
                            {domainData.members.length + 1} Team Members
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Members Container */}
                    <div className="relative">
                      {/* Mobile Layout - All Cards Slide */}
                      <div className="sm:hidden px-3">
                        <div className="relative">
                          <div className="overflow-hidden ">
                            <div
                              ref={(el) => (scrollRefs.current[`${selectedYear}-${domainName}`] = el)}
                              className="flex space-x-4 overflow-x-auto scrollbar-hide py-4"
                              style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitScrollbar: { display: 'none' }
                              }}
                            >
                              {/* Lead Card First */}
                              <div className="flex-shrink-0 ml-2 ">
                                <MemberCard member={domainData.lead} isLead={true} />
                              </div>
                              {/* Regular Members */}
                              {domainData.members?.map((member, index) => (
                                <MemberCard key={index} member={member} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout - Original */}
                      <div className="hidden sm:flex items-start space-x-12">

                        <div className="flex-shrink-0 z-10 relative">
                          <div className="absolute -inset-3 bg-gradient-to-r from-[#fa5935]/25 to-[#FF8820]/25 rounded-3xl blur-2xl animate-pulse"></div>
                          <MemberCard member={domainData.lead} isLead={true} />
                        </div>

                        {/* Scrollable Members Section */}
                        <div className="flex-1 relative w-[50%]">
                          {/* Navigation Buttons */}
                          <button
                            onClick={() => scrollLeft(domainName)}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 z-40 p-4 bg-[#1c1919]/95 backdrop-blur-2xl rounded-full border border-gray-600/70 hover:bg-[#fa5935]/20 hover:border-[#fa5935]/70 transition-all duration-300 group shadow-2xl shadow-black/60 hover:shadow-[#fa5935]/40"
                          >
                            <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#fa5935] transition-colors duration-300 drop-shadow-lg" />
                          </button>
                          
                          <button
                            onClick={() => scrollRight(domainName)}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 z-40 p-4 bg-[#1c1919]/95 backdrop-blur-2xl rounded-full border border-gray-600/70 hover:bg-[#fa5935]/20 hover:border-[#fa5935]/70 transition-all duration-300 group shadow-2xl shadow-black/60 hover:shadow-[#fa5935]/40"
                          >
                            <ChevronRight className="w-5 h-5 text-white group-hover:text-[#fa5935] transition-colors duration-300 drop-shadow-lg" />
                          </button>

                          {/* Enhanced Scrollable Container */}
                          <div className="overflow-hidden">
                            <div 
                              ref={(el) => scrollRefs.current[`${selectedYear}-${domainName}`] = el}
                              className="flex space-x-5 overflow-x-auto scrollbar-hide py-6 px-6 w-full"
                              style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitScrollbar: { display: 'none' }
                              }}
                            >
                              {domainData.members?.map((member, index) => (
                                <MemberCard key={index} member={member} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};


export default MemberScroll;
