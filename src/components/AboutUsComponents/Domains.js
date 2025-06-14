"use client";
import React from "react";
import DomainCard from "./DomianCards";

const domains = [
  {
    title: "Web Development",
    description:
      "Design and build responsive websites and full-stack platforms that turn creative ideas into powerful, user-centric digital experiences.",
    technologies: ["Next.js", "JS", "React", "TS"],
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
      "Learn to design, deploy, and manage scalable cloud systems that make applications faster, more secure, and highly reliable.",
    technologies: ["AWS", "Azure", "GCP"],
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
    title: "Marketing",
    description:
      "Drive the branding, communication, and online presence of the team. Plan campaigns, create content, and make our work seen and celebrated.",
    technologies: ["Branding", "Content Strategy"],
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
  {
    title: "App Development",
    description:
      "Create seamless and intuitive mobile applications focused on user experience, design flow, and performance across platforms.",
    technologies: ["Android", "iOS", "Flutter", "Kotlin"],
    icon: "Smartphone",
    slug: "app-development",
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
    title: "Social Team",
    description:
      "Connect with the community through engaging content and campaigns. Be the voice and vibe of our society across all social platforms.",
    technologies: [
      "Campaign",
      "Creative Copy",
      "Community Engagement",
    ],
    icon: "Users",
    slug: "social-team",
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
    title: "Machine Learning",
    description:
      "Explore AI and data science to build intelligent solutions. Work on projects that apply machine learning to real-world problems.",
    technologies: ["Python", "TensorFlow", "Data Analysis"],
    icon: "BrainCircuit",
    slug: "machine-learning",
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
    title: "Admin & Operations",
    description:
      "Plan and manage events, internal coordination, and team logistics. Act as the central force that ensures everything runs efficiently.",
    technologies: [
      "Management",
      "Event Planning",
      "Team Coordination",
    ],
    icon: "ClipboardList",
    slug: "admin-operations",
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
    title: "Cybersecurity",
    description:
      "Dive into ethical hacking and system protection. Safeguard our projects by detecting vulnerabilities and promoting secure digital practices.",
    technologies: [
      "Network Security",
      "OWASP Top 10",
      "Ethical Hacking",
    ],
    icon: "Shield",
    slug: "cybersecurity",
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
