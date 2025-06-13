"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const alumni = [
  {
    name: "Jane Doe",
    role: "Software Engineer",
    image: "/alumni1.jpg",
    quote:
      "CodingNinjas KIIT transformed my coding journey. The hands-on projects and mentorship helped me land my dream job at a top tech company.",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    image: "/alumni2.jpg",
    quote:
      "The collaborative environment and real-world problem solving at CodingNinjas prepared me for leadership roles in tech.",
  },
  {
    name: "Alice Johnson",
    role: "UX Designer",
    image: "/alumni3.jpg",
    quote:
      "Through CodingNinjas, I discovered my passion for design and development. The community support was incredible.",
  },
  {
    name: "Bob Lee",
    role: "Data Scientist",
    image: "/alumni4.jpg",
    quote:
      "The practical approach to learning and the industry connections I made here were invaluable for my career growth.",
  },
  {
    name: "Maria Garcia",
    role: "DevOps Engineer",
    image: "/alumni5.jpg",
    quote:
      "CodingNinjas gave me the technical skills and confidence to excel in the competitive tech industry.",
  },
];

export default function AlumniSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alumni.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + alumni.length) % alumni.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8 seconds
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % alumni.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const getDisplayIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((current + i + alumni.length) % alumni.length);
    }
    return indices;
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1c1919] overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-soft-light"></div>
      <motion.div
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#fa5935]/15 to-[#FF8820]/10 blur-[150px]"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -120, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF8820]/15 to-[#fa5935]/10 blur-[150px]"
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 min-h-screen">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fa5935] to-[#FF8820]"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          MEET OUR ALUMNI
        </motion.h2>

        {/* Main testimonial card */}
        <div className="relative w-full max-w-4xl mb-12">
          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-full border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-300 group"
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#fa5935] transition-colors duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-full border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-300 group"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-[#fa5935] transition-colors duration-300" />
          </motion.button>

          {/* Testimonial card with layered shadows */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#fa5935]/20 to-[#FF8820]/20 rounded-3xl blur-lg"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[98%] h-full bg-gradient-to-br from-[#1a1616]/30 to-[#0c0c0c]/20 rounded-3xl"></div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[96%] h-full bg-gradient-to-br from-[#1a1616]/50 to-[#0c0c0c]/30 rounded-3xl"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-[#1a1616]/95 to-[#0c0c0c]/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800/50 min-h-[280px] flex flex-col justify-center"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-full">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl text-white text-center leading-relaxed max-w-3xl mx-auto mb-8 font-light">
                  "{alumni[current].quote}"
                </blockquote>

                {/* Auto-play indicator */}
                {/* <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    {alumni.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === current ? 'w-8 bg-gradient-to-r from-[#fa5935] to-[#FF8820]' : 'w-3 bg-gray-600'
                        }`}
                        animate={index === current && isAutoPlay ? {
                          background: ["#fa5935", "#FF8820", "#fa5935"]
                        } : {}}
                        transition={index === current && isAutoPlay ? {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        } : {}}
                      />
                    ))}
                  </div>
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-end justify-center gap-4 w-full max-w-2xl px-4"
        >
          {getDisplayIndices().map((idx, i) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center cursor-pointer ${
                i === 2 ? "z-10" : "z-0"
              }`}
              onClick={() => {
                setCurrent(idx);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              whileHover={{ scale: i === 2 ? 1.05 : 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar with gradient border */}
              <div className="relative group">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-full transition-all duration-300 ${
                    idx === current
                      ? "opacity-100 blur-sm"
                      : "opacity-0 group-hover:opacity-60"
                  }`}
                ></div>
                <div
                  className={`relative rounded-full overflow-hidden bg-gradient-to-br from-[#1a1616] to-[#0c0c0c] p-1 transition-all duration-500 ${
                    idx === current
                      ? "scale-110 shadow-xl shadow-[#fa5935]/20"
                      : "scale-90 hover:scale-100"
                  }`}
                  style={{
                    width: idx === current ? 90 : 64,
                    height: idx === current ? 90 : 64,
                  }}
                >
                  <Image
                    src={alumni[idx].image}
                    alt={alumni[idx].name}
                    width={90}
                    height={90}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>

              {/* Name and role - only show for current */}
              <AnimatePresence>
                {idx === current && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex flex-col items-center mt-4 text-center"
                  >
                    <span className="text-lg font-bold text-white mb-1">
                      {alumni[idx].name}
                    </span>
                    <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#fa5935] to-[#FF8820] font-medium">
                      {alumni[idx].role}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
