import { useRouter } from "next/router";
import EventComponent from "../../components/Events/EventComponent";
import { events } from "../data/eventsData";

const EventPage = () => {
  const router = useRouter();
  const { eventName } = router.query;

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
