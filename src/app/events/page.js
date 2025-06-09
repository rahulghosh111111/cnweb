import Link from "next/link";
import Image from "next/image";
import { events } from "../data/eventsData";

export default function EventsPage() {
  return (
    <div className="min-h-screen px-4 py-10" style={{ background: "linear-gradient(to top, #72231a 0%, #4e3a35 100%)" }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono" style={{ color: "#E3D6D6"}}>HALL OF FAME</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <Link key={event.slug} href={`/events/${event.slug}`}>
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
                    {/* Placeholder date/time */}
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
    </div>
  );
}
