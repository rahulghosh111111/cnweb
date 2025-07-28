"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sliderImages = [
  {
    src: "/slide1.jpg",
    alt: "Team of developers collaborating 1",
  },
  {
    src: "/slide2.jpg",
    alt: "Team of developers collaborating 2",
  },
  {
    src: "/slide3.jpg",
    alt: "Team of developers collaborating 3",
  },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-16 text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/AboutLanding.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative z-10">
          <div className="flex justify-between xl:px-8 items-center mb-10 flex-col lg:flex-row">
            <h2
              className="sm:text-6xl text-4xl font-bold  uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent"
              style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
            >
              ABOUT US
            </h2>
            <Link
              href="/about"
              className="bg-red-900 hidden lg:flex hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 mt-4 md:mt-0 items-center gap-2 group"
            >
              View more
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row lg:gap-20 gap-10 backdrop-blur-lg bg-black/50 rounded-3xl justify-between items-center p-6 lg:p-10">
            <div className="flex-1">
              <p className="lg:text-xl leading-relaxed">
                We&apos;re a passionate community of coders, creators, and
                collaborators, dedicated to transforming ideas into impactful
                tech. At Coding Ninjas – KIIT Chapter, we bridge the gap between
                classroom learning and real-world innovation through mentorship,
                teamwork, and hands-on experiences.
              </p>

              <div className="grid grid-cols-3 lg:gap-6 gap-4 bg-white/10 lg:mt-12 mt-8 rounded-2xl p-5">
                <div className=" text-center border-r border-white/20 pr-6">
                  <h3
                    className="lg:text-4xl text-3xl font-bold text-white"
                    style={{
                      fontFamily: "'Gang of Three', Arial, sans-serif",
                    }}
                  >
                    15+
                  </h3>
                  <p className="lg:text-xl mt-1 font-medium">Projects</p>
                </div>

                <div className=" text-center border-r border-white/20 pr-6">
                  <h3
                    className="lg:text-4xl text-3xl font-bold text-white"
                    style={{
                      fontFamily: "'Gang of Three', Arial, sans-serif",
                    }}
                  >
                    5+
                  </h3>
                  <p className="lg:text-xl mt-1 font-medium">Events</p>
                </div>

                <div className=" text-center">
                  <h3
                    className="lg:text-4xl text-3xl font-bold text-white"
                    style={{
                      fontFamily: "'Gang of Three', Arial, sans-serif",
                    }}
                  >
                    250+
                  </h3>
                  <p className="lg:text-xl mt-1 font-medium">Members</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 w-full max-w-[500px] mx-auto">
                <Image
                  width={500}
                  height={500}
                  src={sliderImages[current].src}
                  alt={sliderImages[current].alt}
                  className="lg:h-80 h-72 w-full object-cover block rounded-xl transition-all duration-300"
                  priority
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`block w-2 h-2 rounded-full ${
                        idx === current ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/about"
        className="bg-red-900 lg:hidden flex hover:bg-red-700 text-white px-6 py-3 w-48 mx-auto rounded-full font-semibold transition-all duration-300 text-lg hover:-translate-y-1 mt-4 lg:mt-8 items-center justify-center gap-2 group"
      >
        View more
        <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
};

export default AboutSection;

