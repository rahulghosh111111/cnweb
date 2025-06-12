import Image from "next/image";
import React from "react";

const OurNinjas = () => {
  const ninjas = [
    { id: 1, name: "NAME", position: "POSITION", image: "/sampleMember.png" },
    { id: 2, name: "NAME", position: "POSITION", image: "/sampleMember.png" },
    { id: 3, name: "NAME", position: "POSITION", image: "/sampleMember.png" },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-0 bg-[#5c2e0d] bg-cover bg-center"
      style={{ backgroundImage: "url('/OurNinjasLanding.png')" }}
    >
      <div className="absolute inset-0 bg-[rgba(60,30,10,0.7)] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2
          className="text-center mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          <span className="text-white">OUR </span>
          <span className="text-[#d12c2c]">
            NINJ
            <span className="inline-block transform -translate-y-1 text-[#d12c2c]">
              ★
            </span>
            S
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {ninjas.map((ninja) => (
            <div
              key={ninja.id}
              className="w-full sm:w-[200px] lg:w-[300px] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-full lg:h-80 h-60 overflow-hidden rounded-lg filter grayscale shadow-lg">
                <Image
                  width={300}
                  height={300}
                  src={ninja.image}
                  alt={`${ninja.name} - ${ninja.position}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-center mt-4 text-white uppercase">
                <h3
                  className="text-2xl font-semibold tracking-wide mb-1"
                  // style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
                >
                  {ninja.name}
                </h3>
                <p className="text-gray-300 tracking-wide">{ninja.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNinjas;
