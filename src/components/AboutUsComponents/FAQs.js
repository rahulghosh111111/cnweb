"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#FF8820] py-6 md:py-12">
          <div className="bg-[#4a2d1f] rounded-3xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-4 max-w-6xl mx-auto shadow-lg">
  
  {/* Image Section — hidden on mobile & tablet, visible only on desktop */}
  <div className="w-full lg:w-1/2 flex flex-col items-center relative">
    <div className="flex items-center justify-center p-4">
      <Image
        src="/AboutNinjas.png"
        alt="Ninja Image"
        width={400}
        height={250}
        className="hidden lg:block absolute top-0 right-1/2 transform translate-x-1/4 w-full max-w-sm h-auto"
      />
    </div>
  </div>

  {/* FAQ Form Section */}
  <div className="w-full max-w-xl mx-auto px-2 sm:px-4 py-4 md:py-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#E58282] mb-6">
      Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl border-2 border-[#FF8820]  hover:border-[#FF8820] text-black bg-white  hover:transform hover:scale-102 transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center px-5 py-4 text-left text-base sm:text-lg md:text-xl font-semibold focus:outline-none"
            onClick={() => toggleIndex(index)}
          >
            <span className="text-Black">{faq.question}</span>
            {activeIndex === index ? (
              <ChevronUp className="h-5 w-5 text-[#E58282]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#E58282]" />
            )}
          </button>
          {activeIndex === index && (
            <div className="px-5 pb-5 text-sm md:text-base text-black">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

        </section>

  );
}
