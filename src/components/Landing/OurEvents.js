import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function EventsSection() {
  return (
    <section
      className="w-full min-h-[500px] relative flex flex-col items-center"
      style={{
        background: "url('/ourEvents.jpg') center/cover ",
      }}
    >
      <h2
        className="text-4xl md:text-6xl mb-6 mt-10 md:mt-20 z-10 text-center"
        style={{
          fontFamily: "'Gang of Three', Arial, sans-serif",
          color: '#ffe08a',
          textShadow: '2px 2px 0 #000, 4px 4px 8px #000a',
          letterSpacing: '0.04em',
        }}
      >
        OUR EVENTS
      </h2>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/70 via-emerald-500/60 to-teal-700/70 z-0" />

      <div className="relative mb-10 md:mb-20 z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4 md:px-8 gap-6 md:gap-8">
        <div className="flex-shrink-0 w-60 h-60 md:w-80 md:h-80 bg-black/50 rounded-xl flex items-center justify-center shadow-lg mb-6 md:mb-0">
          <Image
            src="/ourEvents.jpg"
            alt="Event"
            width={320}
            height={320}
            className="rounded-lg object-cover"
            style={{ background: '#222' }}
          />
        </div>

        <div className="flex flex-col items-start justify-center flex-1 text-center md:text-left">
          <p
            className="text-white text-base md:text-lg mb-4 md:mb-6"
            style={{ fontFamily: "'Paytone One', Arial, sans-serif" }}
          >
            Unleash your creativity. Connect, attend, and spark growth!
          </p>
          <div className='flex justify-center items-center m-auto'>
          <Button linkto="/events" name="MORE EVENTS" />

          </div>
        </div>
      </div>
    </section>
  );
}
