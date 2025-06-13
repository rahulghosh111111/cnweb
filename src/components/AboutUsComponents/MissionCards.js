import { BadgeCheck, Handshake, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const missionCards = [
	{
		title: "Quality",
		description:
			"We will always provide you the highest quality building at a price you can afford and we will always use all American steel.",
		icon: <BadgeCheck className="h-10 w-10 text-white" />,
		gradient: "from-[#8d0e0e]/80 to-[#fa5935]/80",
	},
	{
		title: "Integrity",
		description:
			"We will provide honest upfront pricing. We will not cut corners or try to oversell a building just to make a sale.",
		icon: <Handshake className="h-10 w-10 text-white" />,
		gradient: "from-[#fa5935] to-[#8d0e0e]",
	},
	{
		title: "Experience",
		description:
			"We will provide qualified and trained design consultants, ensuring every building you buy is built to your exact needs.",
		icon: <UserCheck className="h-10 w-10 text-white" />,
		gradient: "from-[#FF8820] to-[#8d0e0e]",
	},
];

export default function MissionCards() {
	return (
		<section className="relative sm:py-20 py-12  px-4 overflow-hidden bg-gradient-to-b from-black to-[#1c1919]">

			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-15 mix-blend-soft-light"></div>

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="sm:text-6xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fa5935] to-[#FF8820] text-center mb-16"
					style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
				>
					Our Mission
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
					{missionCards.map((card, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							whileHover={{
								y: -5,
								transition: { duration: 0.3 },
							}}
							className="bg-[#1a1616] rounded-xl shadow-lg transform transition-all duration-300 border border-gray-800"
						>
							<div className="flex flex-col items-center p-8 h-full">
								<div
									className={`rounded-full p-4 bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 shadow-md`}
								>
									{card.icon}
								</div>

								<h3 className="text-xl font-bold mb-3 text-white text-center">
									{card.title}
								</h3>

								<p className="text-gray-300 text-center text-sm">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#fa5935]/5 to-transparent blur-[100px]"></div>
			<div className="absolute bottom-1/3 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF8820]/5 to-transparent blur-[100px]"></div>

			<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#1c1919] to-[#1c1919]"></div>
		</section>
	);
}