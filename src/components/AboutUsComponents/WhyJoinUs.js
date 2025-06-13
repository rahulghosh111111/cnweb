import { Code2, Briefcase, User, Zap, Gift, Trophy } from "lucide-react";

const features = [
  {
    title: "Real-World Challenges, Real Skills",
    icon: <Code2 className="text-white w-6 h-6" />,
    description:
      "Why just study when you can build anCodingNinjas throws real-world problems your way—perfect to level up your logic and problem-solving.",
  },
  {
    title: "Placement Ready",
    icon: <Briefcase className="text-white w-6 h-6" />,
    description:
      "CodingNinjas gives you the edge in coding rounds and interviews—walk into placements with confidence.",
  },
  {
    title: "Spotlight on You",
    icon: <User className="text-white w-6 h-6" />,
    description:
      "Win or not, your skills get noticed. Top scorers shine on leaderboards and in the eyes of recruiters by your everyday LinkedIn posts.",
  },
  {
    title: "Learn by Doing",
    icon: <Zap className="text-white w-6 h-6" />,
    description:
      "Every round, every bug, every 'aha!' moment teaches you something new. This isn't just coding—it's growth in fast-forward.",
  },
  {
    title: "Prizes & Perks",
    icon: <Gift className="text-white w-6 h-6" />,
    description:
      "Think swag, certificates, chances of entering the USC.KIIT community and meet other bright minds!",
  },
  {
    title: "Resume Booster",
    icon: <Trophy className="text-white w-6 h-6" />,
    description:
      "Show you don’t just learn—you apply. CodingNinjas on your resume says: 'I compete. I code. I conquer.'",
  },
];

export default function WhyJoinUs() {
  return (
    <div className='bg-gradient-to-b from-[#2F2B2B] to-[#FF8820] pt-10 pb-20 px-4'>
      <h2 className="text-4xl sm:text-[60px] md:text-[80px] font-bold text-[#FF8820] text-center mb-12">
        Why Join Us
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#2a1604] rounded-2xl p-6 shadow-md hover:shadow-white transition duration-300 hover:transform hover:scale-102"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}