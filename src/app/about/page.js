"use client";

import React from 'react';
import Image from 'next/image';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


{/* FAQ data */}
const faqs = [
  {
    question: "What is CodingNinjas KIIT ?",
    answer:
      "CodingNinjas is a 45-day coding marathon designed to challenge and enhance your coding skills. It's an opportunity to learn, grow, and showcase your programming abilities, with a supportive community and exciting opportunities to prove yourself.",
  },
  {
    question: "When and where will CodingNinjas be held?",
    answer:
      "CodingNinjas will be held online, so you can participate from anywhere. Dates will be announced soon.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone with an interest in coding, whether beginner or expert, is welcome to join CodingNinjas!",
  },
  {
    question: "How much does it cost to participate?",
    answer: "Participation in CodingNinjas is completely free of cost.",
  },
];

{/* Domains data */}
const domains = [
    {
      title: "WEB",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
    {
      title: "CLOUD COMPUTING",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
    {
      title: "Marketing",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
  ];



{/* Why join us (Features) data */}
  const features = [
  {
    title: "Real-World Challenges, Real Skills",
    icon: "↔️", // Replace with proper SVG if needed
    description: "Why just study when you can build and solve? CodeSprint throws real-world problems your way—perfect to level up your logic and problem-solving.",
  },
  {
    title: "Placement Ready",
    icon: "📘",
    description: "CodeSprint gives you the edge in coding rounds and interviews—walk into placements with confidence.",
  },
  {
    title: "Spotlight on You",
    icon: "👤",
    description: "Win or not, your skills get noticed. Top scorers shine on leaderboards and in the eyes of recruiters by your everyday LinkedIn posts.",
  },
  {
    title: "Learn by Doing",
    icon: "⚡",
    description: "Every round, every bug, every 'aha!' moment teaches you something new. This isn't just coding—it's growth in fast-forward.",
  },
  {
    title: "Prizes & Perks",
    icon: "🎁",
    description: "Think swag, certificates, chances of entering the USC.KIIT community and meet other bright minds!",
  },
  {
    title: "Resume Booster",
    icon: "🏆",
    description: "Show you don’t just learn—you apply. CodeSprint on your resume says: 'I compete. I code. I conquer.'",
  },
];



function page() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      {/* About us part*/}
      <div className='flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#2F2B2B] pt-10 px-4'>
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl sm:text-[80px] md:text-[100px] text-center justify-center md:text-left font-bold text-[#FF8820] mb-6">About us</h1>
          <div className="text-[#FF8820]  text-[16px] sm:text-[18px] md:text-[20px]  space-y-1 md:ml-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>

          </div>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center gap-5">
          <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl"></div>
          <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl items-end"></div>
        </div>
      </div>

      {/* Our Mission Part */}
      <section className="bg-[#2F2B2B] text-white py-10 px-4">
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-[#FF8820] text-center mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative bg-[#555350] border-2 border-[#FF8820] rounded-xl p-6 h-[350px] flex flex-col">
              <h3 className="text-2xl font-bold mt-6 text-center text-white">Heading</h3>
              <p className="text-sm mt-6 text-gray-200 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-[#FF8820] text-center mt-20">Why Join us</h2>
      </section>

      {/* Why Join Us and Our Domains */}
      <div className='bg-gradient-to-b from-[#242121] to-[#C06B20] border-t border-r border-white pt-10 pb-20 px-4'>
        <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#FF8820] rounded-2xl p-6 shadow-md hover:shadow-white transition duration-300"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

        <section className="py-16">
          <h2 className="text-[60px] sm:text-[80px] md:text-[100px] text-center font-bold text-[#FF8820] mb-12">Our Domains</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div key={index} className="border-3 border-white rounded-xl p-6 text-center w-full max-w-sm mx-auto">
                <h3 className="text-lg font-bold mb-4 text-white">{domain.title}</h3>
                <div className="bg-[#AE6969] h-52 sm:h-56 md:h-65 rounded flex items-center justify-center text-white font-semibold mb-4 border-2">
                  IMAGES
                </div>
                <p className="text-sm text-white leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="bg-[#4a2d1f] rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col md:flex-col lg:flex-row items-center justify-between gap-6 max-w-7xl mx-auto shadow-lg">

            {/* Image Section — hidden on mobile & tablet, visible only on desktop */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center p-6">
                <Image
                  src="/AboutNinjas.png"
                  alt="Ninja Image"
                  width={500}
                  height={300}
                  className="hidden lg:block absolute mt-60 mr-10 right-1/2 transform -translate-x-1/4 w-auto max-w-xs sm:max-w-sm md:max-w-md h-auto"
                />
              </div>
            </div>

            {/* FAQ Form Section */}
            <div className="max-w-2xl translate-y-0 md:translate-y-0 w-full mx-auto px-4 py-10 bg-transparent min-h-screen">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E58282] mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#FF8820] bg-transparent text-white"
                  >
                    <button
                      className="w-full flex justify-between items-center px-5 py-4 text-left text-lg md:text-xl font-semibold focus:outline-none"
                      onClick={() => toggleIndex(index)}
                    >
                      <span className="text-[#fff]">{faq.question}</span>
                      {activeIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-[#E58282]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#E58282]" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div className="px-5 pb-5 text-sm md:text-base text-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default page;
