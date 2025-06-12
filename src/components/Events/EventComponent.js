import Image from "next/image";

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
  eventPhotos
}) => {
  const positionPercent = (positionIndex / (totalEvents - 1)) * 100;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${bgImage})`,
               height: '100dvh' 
       }}
    >
      <div className="w-150 text-white">
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <p className="text-2xl mb-20">{description}</p>
        <a
          href={registerLink}
          className="px-5 py-2 rounded-lg font-semibold text-white"
          style={{ backgroundColor: themeColor }}
        >
          {registrationInfo}
        </a>

        
      </div>
      <div className=" " >
        <Image
            src={eventPhotos}
            alt="event-photos"
            width={400}
          height={300}
          className="rounded-3xl shadow-lg mt-10 ml-20"
        />
      </div>
      <div className="fixed mt-150 h-1.5 w-150 bg-black/60 rounded-full">
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-12"
            style={{
              left: `calc(${positionPercent}% - 50px)`,
            }}
          >
            <Image
              src={logo}
              alt="event-logo"
              width={50}
              height={50}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
    </div>
  );
};

export default EventComponent;
