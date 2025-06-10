import React from 'react';
import Button from './Button';

export default function EventsSection() {
  return (
    <section
      className="w-full  min-h-[500px] relative flex flex-col items-center"
      style={{
        background: "url('/ourEvents.jpg') center/cover ",
      }}
    >
      <h2
        className="text-6xl mb-15 mt-20 z-10"
        style={{
          fontFamily: "'Gang of Three', Arial, sans-serif",
          color: '#ffe08a',
          textShadow: '2px 2px 0 #000, 4px 4px 8px #000a',
          letterSpacing: '0.04em',
        }}
      >
        OUR EVENTS
      </h2>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/70 via-emerald-500/60 to-teal-700/70 z-0" />

      <div className="relative mb-20 z-10 flex flex-row items-center justify-center w-full max-w-4xl px-8 gap-8">
        <div className="flex-shrink-0 w-80 h-80 bg-black/50 rounded-xl flex items-center justify-center shadow-lg">
          <img
            src="/ourEvents.jpg"
            alt="Event"
            className="w-full h-full object-cover"
            style={{ background: '#222' }}
          />
        </div>

        <div className="flex flex-col items-start justify-center flex-1">
          <p
            className="text-white text-lg mb-6"
            style={{ fontFamily: "'Paytone One', Arial, sans-serif" }}
          >
            Unleash your creativity. Connect, attend, and spark growth!
          </p>
         <button className="bg-[#b84f2e] hover:bg-[#e06a3c] text-white px-6 py-2   rounded-xl font-bold text-lg shadow transition-all duration-200">
          <a href="/events">MORE EVENTS</a> 
        </button>
        </div>
      </div>
    </section>
  );
}
