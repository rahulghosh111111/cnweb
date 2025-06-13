"use client";
import React from "react";
import DomainCard from "./DomianCards";

const domains = [
  {
    title: "Web Development",
    description:
      "Building responsive, interactive websites and web applications using modern frameworks and technologies.",
    icon: "Code",
    slug: "web-development",
    colors: {
      topBg: "bg-[#1a1616]/80 dark:bg-[#0c0c0c]",
      circle1: "bg-[#fa5935]/20 dark:bg-[#fa5935]/10",
      circle2: "bg-[#FF8820]/30 dark:bg-[#FF8820]/20",
      iconText: "text-[#fa5935] dark:text-[#fa5935]",
      iconShadow: "bg-[#fa5935]/30",
      titleHover: "group-hover:text-[#fa5935] dark:group-hover:text-[#fa5935]",
      btnBg: "bg-[#1a1616] dark:bg-[#0c0c0c]",
      btnBgHover:
        "group-hover:bg-[#fa5935]/10 dark:group-hover:bg-[#fa5935]/20",
      btnIcon: "text-[#fa5935] dark:text-[#fa5935]",
      underline: "bg-[#fa5935]",
    },
  },
  {
    title: "Cloud Computing",
    description:
      "Leveraging cloud platforms to deploy scalable applications, manage infrastructure, and optimize resources.",
    icon: "Cloud",
    slug: "cloud-computing",
    colors: {
      topBg: "bg-[#1a1616]/80 dark:bg-[#0c0c0c]",
      circle1: "bg-[#fa5935]/20 dark:bg-[#fa5935]/10",
      circle2: "bg-[#FF8820]/30 dark:bg-[#FF8820]/20",
      iconText: "text-[#fa5935] dark:text-[#fa5935]",
      iconShadow: "bg-[#fa5935]/30",
      titleHover: "group-hover:text-[#fa5935] dark:group-hover:text-[#fa5935]",
      btnBg: "bg-[#1a1616] dark:bg-[#0c0c0c]",
      btnBgHover:
        "group-hover:bg-[#fa5935]/10 dark:group-hover:bg-[#fa5935]/20",
      btnIcon: "text-[#fa5935] dark:text-[#fa5935]",
      underline: "bg-[#fa5935]",
    },
  },
  {
    title: "Artificial Intelligence",
    description:
      "Making computers think, learn, and make decisions like humans to help with daily tasks.",
    icon: "BrainCircuit",
    slug: "artificial-intelligence",
    colors: {
      topBg: "bg-[#1a1616]/80 dark:bg-[#0c0c0c]",
      circle1: "bg-[#fa5935]/20 dark:bg-[#fa5935]/10",
      circle2: "bg-[#FF8820]/30 dark:bg-[#FF8820]/20",
      iconText: "text-[#fa5935] dark:text-[#fa5935]",
      iconShadow: "bg-[#fa5935]/30",
      titleHover: "group-hover:text-[#fa5935] dark:group-hover:text-[#fa5935]",
      btnBg: "bg-[#1a1616] dark:bg-[#0c0c0c]",
      btnBgHover:
        "group-hover:bg-[#fa5935]/10 dark:group-hover:bg-[#fa5935]/20",
      btnIcon: "text-[#fa5935] dark:text-[#fa5935]",
      underline: "bg-[#fa5935]",
    },
  },
  {
    title: "Marketing",
    description:
      "Creating strategies to promote products and services, build brand awareness, and drive customer engagement.",
    icon: "LineChart",
    slug: "marketing",
    colors: {
      topBg: "bg-[#1a1616]/80 dark:bg-[#0c0c0c]",
      circle1: "bg-[#fa5935]/20 dark:bg-[#fa5935]/10",
      circle2: "bg-[#FF8820]/30 dark:bg-[#FF8820]/20",
      iconText: "text-[#fa5935] dark:text-[#fa5935]",
      iconShadow: "bg-[#fa5935]/30",
      titleHover: "group-hover:text-[#fa5935] dark:group-hover:text-[#fa5935]",
      btnBg: "bg-[#1a1616] dark:bg-[#0c0c0c]",
      btnBgHover:
        "group-hover:bg-[#fa5935]/10 dark:group-hover:bg-[#fa5935]/20",
      btnIcon: "text-[#fa5935] dark:text-[#fa5935]",
      underline: "bg-[#fa5935]",
    },
  },
];

export default function Domains() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#1c1919] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#fa5935] to-[#FF8820]"
          style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
        >
          Our Domains
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <DomainCard key={index} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
