import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="h-screen bg-black flex relative">
      <div className="w-full mx-auto rounded-xl overflow-hidden relative">
        <Image
          src="/memberHero.jpg"
          alt="missing"
          width={1200}
          height={1200}
          className="h-[70vh] object-cover bg-center w-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
          priority
        />
        
        <div className="absolute top-0 left-0 right-0 h-[35vh] bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

        <div className="">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl sm:px-10 px-5 font-bold bg-gradient-to-r from-[#fa5935] via-[#FF8820] to-[#8d0e0e] bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
          >
            Our Ninjas
          </h1>
          <h2 className="text-lg font-normal pb-4 sm:px-10 px-5 text-[rgba(255,255,255,0.93)]">
            Meet the most talented, creative, and fun-loving team. We are a
            group of creative minds who are passionate about what they do.{" "}
          </h2>
        </div>
      </div>
    </section>
  );
}
