import { BadgeCheck, Handshake, UserCheck } from "lucide-react";

const missionCards = [
  {
    title: "Quality",
    description:
      "We will always provide you the highest quality building at a price you can afford and we will always use all American steel.",
    icon: <BadgeCheck className="h-10 w-10 text-[#FF8820]" />,
  },
  {
    title: "Integrity",
    description:
      "We will provide honest upfront pricing. We will not cut corners or try to oversell a building just to make a sale.",
    icon: <Handshake className="h-10 w-10 text-[#FF8820]" />,
  },
  {
    title: "Experience",
    description:
      "We will provide qualified and trained design consultants, ensuring every building you buy is built to your exact needs.",
    icon: <UserCheck className="h-10 w-10 text-[#FF8820]" />,
  },
];

export default function MissionCards() {
  return (
    <section className="bg-[#2F2B2B] text-white py-10 px-4">
      <h2 className="text-4xl sm:text-[60px] md:text-[80px] font-bold text-[#FF8820] text-center mb-12">
        Our Mission
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {missionCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md text-center p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}