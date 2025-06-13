"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { events } from "../../components/data/eventsData";
import EventComponent from "../../components/Events/EventComponent";

export default function EventsPage() {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const GlassInfoOverlay = ({ title, date, description }) => (
    <div className="absolute bottom-0 w-full px-4 py-3 bg-white/10 backdrop-blur-md border-t border-white/20">
      <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-200 italic">{date || "Coming Soon"}</p>
      </div>
      <p className="text-sm text-gray-300 mt-1 line-clamp-2">{description}</p>
    </div>
  );

  return (
    <div
      className="min-h-screen pt-10 overflow-x-hidden px-4 sm:px-6 md:px-8"
      style={{
        background: "linear-gradient(to top, #72231a 0%, #4e3a35 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto mt-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-8 items-stretch">
          <div>
            <div className="text-white text-4xl md:text-6xl font-bold text-center py-10">
              <p>HALL</p>
              <p>OF</p>
              <p>FAME</p>
            </div>
            <Link href="">
              <div className="mt-4 relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md h-48 sm:h-60">
                <Image
                  src={events[0].bgImage}
                  alt={events[0].title}
                  fill
                  className="object-cover"
                />
                <GlassInfoOverlay
                  title={events[0].title}
                  date={events[0].date}
                  description={events[0].description}
                />
              </div>
            </Link>
          </div>

          <Link href="">
            <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md h-64 sm:h-full min-h-[300px]">
              <Image
                src={events[1].bgImage}
                alt={events[1].title}
                fill
                className="object-cover"
              />
              <GlassInfoOverlay
                title={events[1].title}
                date={events[1].date}
                description={events[1].description}
              />
            </div>
          </Link>
        </div>

        {/* Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {events.slice(2).map((event) => (
            <Link key={event.slug} href="">
              <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md h-64">
                <Image
                  src={event.bgImage}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <GlassInfoOverlay
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Slideshow Section */}
        <section className="relative w-full flex flex-col items-center justify-center mb-20">
          <EventComponent
            {...events[currentEvent]}
            mobileBgImage={events[currentEvent].mobileBgImage}
            positionIndex={currentEvent}
            totalEvents={events.length}
            setCurrent={setCurrentEvent}
          />
        </section>
      </div>
    </div>
  );
}
