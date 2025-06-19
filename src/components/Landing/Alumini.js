"use client";
import React, { useState, useEffect, useCallback } from "react";
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
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alumni.length);
      setDirection(1);
    }, 6000); 

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + alumni.length) % alumni.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); 
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % alumni.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  const getDisplayIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((current + i + alumni.length) % alumni.length);
    }
    return indices;
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25, duration: 0.8 }, 
        opacity: { duration: 0.7, ease: "easeOut" },
        scale: { duration: 0.8, ease: "easeOut" },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.92,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25, duration: 0.6 },
        opacity: { duration: 0.6, ease: "easeInOut" },
        scale: { duration: 0.5 },
      },
    }),
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const attributionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -5, transition: { duration: 0.4, ease: "easeIn" } },
  };

  // New animation for the quote icon
  const quoteIconVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1c1919] overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 45, 
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#fa5935]/15 to-[#FF8820]/10 blur-[170px]"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -140, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 50, 
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF8820]/15 to-[#fa5935]/10 blur-[170px]"
      ></motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-tr from-[#fa5935]/3 to-[#FF8820]/3 mix-blend-overlay"
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 min-h-screen">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fa5935] to-[#FF8820]"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          MEET OUR ALUMNI
        </motion.h2>

        <div className="relative w-full max-w-4xl mb-16">

          <motion.button
            whileHover={{ scale: 1.15, x: -8, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 md:-left-16 top-1/2 hidden sm:flex items-center justify-center -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-full border border-gray-800/50 hover:border-[#fa5935]/70 transition-all duration-500 group shadow-lg hover:shadow-xl hover:shadow-[#fa5935]/15"
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#fa5935] transition-colors duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, x: 8, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 md:-right-16 top-1/2 hidden sm:flex items-center justify-center -translate-y-1/2 z-20 p-3 bg-gradient-to-r from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-full border border-gray-800/50 hover:border-[#fa5935]/70 transition-all duration-500 group shadow-lg hover:shadow-xl hover:shadow-[#fa5935]/15"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-[#fa5935] transition-colors duration-300" />
          </motion.button>

          <div className="relative overflow-hidden">
            <motion.div
              className="absolute -inset-1 rounded-3xl blur-lg opacity-70"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-[98%] h-full bg-gradient-to-br from-[#1a1616]/30 to-[#0c0c0c]/20 rounded-3xl"
              style={{ backdropFilter: "blur(8px)" }}
            ></div>
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-[96%] h-full bg-gradient-to-br from-[#1a1616]/50 to-[#0c0c0c]/30 rounded-3xl"
              style={{ backdropFilter: "blur(4px)" }}
            ></div>

            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative bg-gradient-to-br from-[#1a1616]/95 to-[#0c0c0c]/95 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-gray-800/50 min-h-[300px] flex flex-col justify-center shadow-lg"
                style={{ willChange: "transform, opacity" }}
              >
                <motion.div
                  className="flex justify-center mb-8"
                  variants={quoteIconVariants}
                  initial="initial"
                  animate="animate"
                  key={`quote-icon-${current}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="p-3.5 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-full shadow-lg shadow-[#fa5935]/20"
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

          
                <motion.blockquote
                  variants={quoteVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={`quote-text-${current}`}
                  className="text-lg md:text-xl text-white text-center leading-relaxed max-w-3xl mx-auto mb-10 font-light"
                  style={{ willChange: "transform, opacity" }}
                >
                  &quot;{alumni[current].quote}&quot;
                </motion.blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-end justify-center gap-6 md:gap-8 w-full max-w-2xl px-4"
        >
          {getDisplayIndices().map((idx, i) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center cursor-pointer ${
                i === 2 ? "z-10" : "z-0"
              }`}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              whileHover={{
                scale: i === 2 ? 1.08 : 1.15,
                y: -8,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            >
              <div className="relative group">
                <motion.div
                  className={`absolute rounded-full transition-all duration-500 ${
                    idx === current
                      ? "opacity-100 blur-sm"
                      : "opacity-0 group-hover:opacity-70"
                  }`}
                  animate={idx === current
                    ? {
                        scale: [1, 1.08, 1],
                        opacity: [0.8, 1, 0.8],
                      }
                    : {}}
                  transition={
                    idx === current
                      ? {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                ></motion.div>
                <motion.div
                  className={`relative rounded-full overflow-hidden bg-gradient-to-br from-[#1a1616] to-[#0c0c0c] p-1.5 transition-all ${
                    idx === current
                      ? "shadow-xl shadow-[#fa5935]/25"
                      : "shadow-md hover:shadow-lg hover:shadow-[#fa5935]/15"
                  }`}
                  style={{
                    width: idx === current ? 100 : 70,
                    height: idx === current ? 100 : 70,
                    willChange: idx === current ? "transform, opacity" : "auto",
                  }}
                  animate={{
                    scale: idx === current ? 1.05 : 0.92,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    duration: 0.8,
                  }}
                >
                  <Image
                    src={alumni[idx].image}
                    alt={alumni[idx].name}
                    width={100}
                    height={100}
                    className={`object-cover w-full h-full rounded-full transition-all duration-500 ${
                      idx === current ? "" : "grayscale-[30%] group-hover:grayscale-0"
                    }`}
                  />
                </motion.div>
              </div>
              <AnimatePresence mode="wait">
                {idx === current && (
                  <motion.div
                    variants={attributionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`attribution-${idx}`}
                    className="flex flex-col items-center mt-5 text-center"
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
