import { Code2, Briefcase, User, Zap, Gift, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-World Challenges, Real Skills",
    icon: <Code2 className="text-white w-8 h-8" />,
    description:
      "Why just study when you can build anCodingNinjas throws real-world problems your way—perfect to level ",
    gradient: "from-[#fa5935]/80 to-[#FF8820]/80",
  },
  {
    title: "Placement Ready",
    icon: <Briefcase className="text-white w-8 h-8" />,
    description:
      "CodingNinjas gives you the edge in coding rounds and interviews—walk into placements with confidence.",
    gradient: "from-[#8d0e0e]/80 to-[#fa5935]/80",
  },
  {
    title: "Spotlight on You",
    icon: <User className="text-white w-8 h-8" />,
    description:
      "Win or not, your skills get noticed. Top scorers shine on leaderboards and in the eyes ",
    gradient: "from-[#FF8820]/80 to-[#8d0e0e]/80",
  },
  {
    title: "Learn by Doing",
    icon: <Zap className="text-white w-8 h-8" />,
    description:
      "Every round, every bug, every 'aha!' moment teaches you something new. This isn't just coding—it",
    gradient: "from-[#fa5935]/80 to-[#FF8820]/80",
  },
  {
    title: "Prizes & Perks",
    icon: <Gift className="text-white w-8 h-8" />,
    description:
      "Think swag, certificates, chances of entering the USC.KIIT community and meet other bright minds!",
    gradient: "from-[#8d0e0e]/80 to-[#fa5935]/80",
  },
  {
    title: "Resume Booster",
    icon: <Trophy className="text-white w-8 h-8" />,
    description:
      "Show you don't just learn—you apply. CodingNinjas on your resume says: 'I compete. I code. I conquer.'",
    gradient: "from-[#FF8820]/80 to-[#8d0e0e]/80",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="relative py-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-b from-[#1c1919] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sm:text-6xl text-5xl font-bold text-center mb-4"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fa5935] to-[#FF8820]
          ">
            Why Join Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Discover the benefits of becoming part of our coding community
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full">
                <div className="bg-gradient-to-br from-[#1a1616] to-[#0c0c0c] p-6 rounded-xl border border-gray-800 h-full flex flex-col group-hover:border-[#FF8820]/50 transition-all duration-300">
                  <div className="mb-3">
                    <div
                      className={`rounded-full p-3 bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-md w-16 h-16`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF8820] transition-colors duration-300 min-h-[3.5rem] flex items-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow h-auto">
                    {feature.description}
                  </p>

                  <div className="w-12 h-1 mt-5 bg-gradient-to-r from-[#fa5935] to-[#FF8820]  rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8d0e0e] via-[#FF8820] to-[#fa5935]"></div>
    </section>
  );
}