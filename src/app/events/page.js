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

  return (
    <div
      className="min-h-screen pt-10 overflow-x-hidden"
      style={{
        background: "linear-gradient(to top, #72231a 0%, #4e3a35 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto mt-12">
        {/* Hero Section */}
        <div className="grid grid-cols-[2fr_1fr] gap-4 mb-8 items-stretch">
          <div>
            <div className="text-white text-6xl font-bold text-center py-10">
              <p>HALL</p>
              <p>OF</p>
              <p>FAME</p>
            </div>
            <Link href="">
              <div className="mt-4 group rounded-2xl overflow-hidden bg-neutral-800 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md text-white">
                <div className="relative h-48">
                  <Image
                    src={events[0].bgImage}
                    alt={events[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-3 bg-neutral-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{events[0].title}</h2>
                    <p className="text-sm text-gray-300 italic">
                      {events[0].date || "Coming Soon"}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {events[0].description}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <Link href="">
            <div className="group rounded-2xl overflow-hidden bg-neutral-800 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md text-white h-full">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={events[1].bgImage}
                  alt={events[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3 bg-neutral-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{events[1].title}</h2>
                  <p className="text-sm text-gray-300 italic">
                    {events[1].date || "Coming Soon"}
                  </p>
                </div>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {events[1].description}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {events.slice(2).map((event) => (
            <Link key={event.slug} href="">
              <div className="group rounded-2xl overflow-hidden bg-neutral-800 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md text-white">
                <div className="relative h-48">
                  <Image
                    src={event.bgImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-3 bg-neutral-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{event.title}</h2>
                    <p className="text-sm text-gray-300 italic">
                      {event.date || "Coming Soon"}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Slideshow Section */}
        <section className="relative w-full flex flex-col items-center justify-center mb-20">
          <EventComponent
            {...events[currentEvent]}
            positionIndex={currentEvent}
            totalEvents={events.length}
            setCurrent={setCurrentEvent}
          />
        </section>
      </div>
    </div>
  );
}
