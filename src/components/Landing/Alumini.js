'use client';
import React, { useState } from "react";
import Image from "next/image";

const alumni = [
  {
    name: "Jane Doe",
    role: "Software Engineer",
    image: "/alumni1.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    image: "/alumni2.jpg",
    quote:
      "Aliquam erat volutpat. Proin vitae accumsan urna. Integer vitae erat nec elit dictum sagittis.",
  },
  {
    name: "Alice Johnson",
    role: "UX Designer",
    image: "/alumni3.jpg",
    quote:
      "Curabitur nec massa euismod, pretium lacus at, cursus dui. Vestibulum ante ipsum primis in faucibus.",
  },
  {
    name: "Bob Lee",
    role: "Data Scientist",
    image: "/alumni4.jpg",
    quote:
      "Sed posuere, sapien ac commodo cursus, justo enim dictum erat, sed dictum urna elit at velit.",
  },
  {
    name: "Maria Garcia",
    role: "DevOps Engineer",
    image: "/alumni5.jpg",
    quote:
      "Nam eget enim euismod, dictum ex ac, dictum enim. Pellentesque habitant morbi tristique senectus.",
  },
];

export default function AlumniSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev - 1 + alumni.length) % alumni.length);
  const next = () => setCurrent((prev) => (prev + 1) % alumni.length);

  const getDisplayIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((current + i + alumni.length) % alumni.length);
    }
    return indices;
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start py-8 px-2" style={{ background: "linear-gradient(180deg, #f5c087 0%, #1b232a 100%)" }}>
      <h2
        className="text-4xl md:text-6xl mt-2 mb-8 text-center"
        style={{
          fontFamily: "'Gang of Three', Arial, sans-serif",
          color: "#a03e2f",
          textShadow: "2px 2px 0 #fff, 4px 4px 8px #000a",
          letterSpacing: "0.04em",
        }}
      >
        MEET OUR ALUMNI
      </h2>

      <div className="relative w-full max-w-2xl flex flex-col items-center my-8">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[97%] h-[220px] bg-black/40 rounded-3xl z-0" />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[94%] h-[210px] bg-black/50 rounded-3xl z-0" />

        <button
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2  text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center z-20   transition"
          onClick={prev}
          aria-label="Previous"
        >
          &#60;
        </button>
        <button
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center z-20 transition"
          onClick={next}
          aria-label="Next"
        >
          &#62;
        </button>

        <div className="relative z-10 w-full h-[300px] bg-[#222] justify-center rounded-4xl px-7 py-8 flex flex-col items-center shadow-lg min-h-[210px] mx-16">
          <p className="text-white text-center text-base md:text-lg leading-relaxed max-w-2xl">
            {alumni[current].quote}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-end justify-center gap-4 mt-8 mb-2 w-full max-w-xl">
        {getDisplayIndices().map((idx, i) => (
          <div key={idx} className={`flex flex-col items-center ${i === 2 ? "z-10" : "z-0"}`}>
            <div
              className={`rounded-full overflow-hidden border-4 ${idx === current ? "border-[#222]" : "border-transparent"} bg-white shadow ${idx === current ? "scale-110" : "scale-90"} transition-transform duration-300`}
              style={{ width: idx === current ? 80 : 56, height: idx === current ? 80 : 56 }}
            >
              <Image
                src={alumni[idx].image}
                alt={alumni[idx].name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            {idx === current && (
              <div className="flex flex-col items-center mt-2">
                <span className="text-base font-semibold text-white drop-shadow">{alumni[idx].name}</span>
                <span className="text-xs text-gray-300">{alumni[idx].role}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}