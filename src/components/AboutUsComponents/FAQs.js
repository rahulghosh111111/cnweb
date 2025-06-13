"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
	{
		question: "What is CodingNinjas KIIT ?",
		answer:
			"CodingNinjas is a 45-day coding marathon designed to challenge and enhance your coding skills. It's an opportunity to learn, grow, and showcase your programming abilities, with a supportive community and exciting opportunities to prove yourself.",
	},
	{
		question: "When and where will CodingNinjas be held?",
		answer:
			"CodingNinjas will be held online, so you can participate from anywhere. Dates will be announced soon.",
	},
	{
		question: "Who can participate?",
		answer:
			"Anyone with an interest in coding, whether beginner or expert, is welcome to join CodingNinjas!",
	},
	{
		question: "How much does it cost to participate?",
		answer: "Participation in CodingNinjas is completely free of cost.",
	},
];

export default function FAQs() {
	const [activeIndex, setActiveIndex] = useState(null);
	const toggleIndex = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#1c1919]">
			{/* Background effects */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-15 mix-blend-soft-light"></div>
			<div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#fa5935]/5 to-transparent blur-[100px]"></div>
			<div className="absolute bottom-1/3 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF8820]/5 to-transparent blur-[100px]"></div>

			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#fa5935] to-[#FF8820]"
					style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
				>
					FAQs
				</motion.h2>

				<div className="bg-gradient-to-br from-[#1a1616]/90 to-[#0c0c0c] rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-800 flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="w-full lg:w-3/5 space-y-4"
					>
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="rounded-xl border border-gray-800 bg-[#1a1616]/60 hover:border-[#FF8820]/50 transition-all duration-300 hover:shadow-md hover:shadow-[#fa5935]/10"
							>
								<button
									className="w-full flex justify-between items-center px-5 py-4 text-left text-base sm:text-lg font-medium focus:outline-none"
									onClick={() => toggleIndex(index)}
								>
									<span className="text-white">{faq.question}</span>
									<motion.div
										animate={{ rotate: activeIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1616] border border-gray-800"
									>
										{activeIndex === index ? (
											<ChevronUp className="h-4 w-4 text-[#fa5935]" />
										) : (
											<ChevronDown className="h-4 w-4 text-[#fa5935]" />
										)}
									</motion.div>
								</button>

								{activeIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className="px-5 pb-5 text-sm md:text-base text-gray-300"
									>
										{faq.answer}
									</motion.div>
								)}
							</motion.div>
						))}
					</motion.div>

					{/* Image Container */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="w-full lg:w-2/5 flex items-center justify-center"
					>
						<div className="relative w-full max-w-md">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-2xl blur opacity-30"></div>
							<div className="relative bg-[#1a1616] p-4 rounded-2xl">
								<Image
									src="/AboutNinjas.png"
									alt="Coding Ninjas"
									width={500}
									height={350}
									className="w-full h-auto rounded-xl"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8d0e0e] via-[#FF8820] to-[#fa5935]"></div>
		</section>
	);
}
