"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { events } from "../../components/data/eventsData";
import EventComponent from "../../components/Events/EventComponent";
import JoinEvent from "@/components/Events/JoinEvent";

export default function EventsPage() {
  const [currentEvent, setCurrentEvent] = useState(0);

  // Comprehensive array containing all card data
  const allCardData = [
    {
      title: "Main Event 2023",
      slug: "main-event",
      bgImage: events[0].bgImage,
      date: "September 20, 2023",
      description: "Our flagship annual tech conference",
      isMainHero: true,
    },
    {
      title: "Secondary Exhibition",
      slug: "secondary-exhibition",
      bgImage: events[1].bgImage,
      date: "October 5, 2023",
      description: "Showcase of innovative technologies",
      isSecondaryHero: true,
    },
    {
      title: "Tech Conference 2023",
      slug: "tech-conference",
      bgImage: "/images/events/event1.jpg",
      date: "October 15, 2023",
      description: "Join us for the biggest tech event",
    },
    {
      title: "Hackathon Challenge",
      slug: "hackathon",
      bgImage: "/images/events/event2.jpg",
      date: "November 5, 2023",
      description: "24-hour coding competition",
    },
    {
      title: "Web Development Workshop",
      slug: "webdev-workshop",
      bgImage: "/images/events/event3.jpg",
      date: "September 25, 2023",
      description: "Learn modern web development techniques",
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const GlassInfoOverlay = ({ title, date, description }) => (
    <div className="absolute bottom-0 w-full px-4 py-3 bg-white/10 backdrop-blur-md border-t border-white/20">
      <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-lg font-semibold text-white">
          {title}
        </h2>
        {/* <p className="text-sm text-gray-200 italic">{date || "Coming Soon"}</p> */}
      </div>
      {/* <p className="text-sm text-gray-300 mt-1 line-clamp-2">{description}</p> */}
    </div>
  );

  // Find main hero and secondary hero cards
  const mainHeroCard = allCardData.find((card) => card.isMainHero);
  const secondaryHeroCard = allCardData.find((card) => card.isSecondaryHero);
  // Get regular cards (not heroes)
  const regularCards = allCardData.filter(
    (card) => !card.isMainHero && !card.isSecondaryHero
  );

  return (
    <div
      className="min-h-screen sm:pt-10 pt-5 overflow-x-hidden"
      style={{
        background: "linear-gradient(to top, #8d0e0e 0%, #1c1919 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto mt-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-8 items-stretch">
          <div>
            <div className="text-center py-10">
              <h1
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fffdfc] to-[#f7f6f5]"
                style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
              >
                HALL OF FAME
              </h1>
            </div>
            <Link href="">
              <div className="mt-4 relative group rounded-2xl overflow-hidden transition-transform duration-300 cursor-pointer shadow-md h-48 sm:h-60">
                <Image
                  src={mainHeroCard.bgImage}
                  alt={mainHeroCard.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <GlassInfoOverlay
                  title={mainHeroCard.title}
                  date={mainHeroCard.date}
                  description={mainHeroCard.description}
                />
              </div>
            </Link>
          </div>

          <Link href="">
            <div className="relative group rounded-2xl overflow-hidden transition-transform duration-300 cursor-pointer shadow-md h-64 sm:h-full min-h-[300px]">
              <Image
                src={secondaryHeroCard.bgImage}
                alt={secondaryHeroCard.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <GlassInfoOverlay
                title={secondaryHeroCard.title}
                date={secondaryHeroCard.date}
                description={secondaryHeroCard.description}
              />
            </div>
          </Link>
        </div>

        {/* Remaining Cards */}
        <div className="sm:grid grid-cols-1 hidden sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {regularCards.map((card) => (
            <Link key={card.slug} href="#">
              <div className="relative group rounded-2xl overflow-hidden transition-transform duration-300 cursor-pointer shadow-md h-64">
                <Image
                  src={card.bgImage}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <GlassInfoOverlay
                  title={card.title}
                  date={card.date}
                  description={card.description}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Slideshow Section */}
        <section className="relative w-full h-[90vh] sm:h-[650px] flex flex-col items-center justify-center">
          <EventComponent
            {...events[currentEvent]}
            mobileBgImage={events[currentEvent].mobileBgImage}
            positionIndex={currentEvent}
            totalEvents={events.length}
            setCurrent={setCurrentEvent}
          />
        </section>
      </div>
      <JoinEvent />
    </div>
  );
}