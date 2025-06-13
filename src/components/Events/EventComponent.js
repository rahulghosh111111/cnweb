import Image from "next/image";
import SliderNavigator from "../../components/Events/SliderNavigator";

const EventComponent = ({
  title,
  description,
  bgImage,
  themeColor,
  registerLink,
  logo,
  positionIndex,
  totalEvents,
  registrationInfo,
  eventPhotos,
  setCurrent,
}) => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden box-border"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Hero Content */}
      <div className="w-full max-w-6xl mx-auto text-white flex flex-wrap justify-evenly items-start gap-5 px-4 overflow-x-hidden">
        <div className="mt-60">
          <h1 className="text-5xl font-bold mb-2">{title}</h1>
          <p className="text-2xl mb-8 max-w-xl">{description}</p>
          <a
            href={registerLink}
            className="px-5 py-2 rounded-lg font-semibold text-white inline-block"
            style={{ backgroundColor: themeColor }}
          >
            {registrationInfo}
          </a>
        </div>

        <div className="shrink-0 overflow-hidden max-w-full">
          <Image
            src={eventPhotos}
            alt="event-photos"
            width={400}
            height={300}
            className="rounded-3xl shadow-lg object-contain mt-60"
          />
        </div>
      </div>

      {/* Slider Navigator */}
      <div className="mt-8 w-full flex justify-center px-4">
        <SliderNavigator
          total={totalEvents}
          current={positionIndex}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export default EventComponent;
