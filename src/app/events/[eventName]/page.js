'use client';

import { useParams } from "next/navigation";
import EventComponent from "../../../components/Events/EventComponent";
import { events } from "../../data/eventsData";

const EventPage = () => {
  const { eventName } = useParams();

  const eventIndex = events.findIndex((e) => e.slug === eventName);
  const event = events[eventIndex];

  if (!event) return <p className="text-center mt-10 text-red-600">Event not found</p>;

  return (
    <div>
      <EventComponent
        {...event}
        positionIndex={eventIndex}
        totalEvents={events.length}
      />
    </div>
  );
};

export default EventPage;
