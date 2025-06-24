"use client";
import React from "react";
import { AnimatedTooltip } from "@/ui/tool-tip";
const people = [
  {
    id: 1,
    name: "Soumyadip Maity",
    designation: "Lead Developer",
    image: "/WEB_Soumyadip.jpg",
  },
  {
    id: 2,
    name: "Ayush ",
    designation: "Web Developer",
    image: "/WEB_Ayush.jpg",
  },
  {
    id: 3,
    name: "Rupali Pasa",
    designation: "UX Designer",
    image: "/DESIGN_Rupali_Pasa.jpg",
  },

  {
    id: 4,
    name: "Sanskar Singh",
    designation: "Web Developer",
    image: "/WEB_Sanskar_Singh.jpeg",
  },
  {
    id: 5,
    name: "Eshita Kapat",
    designation: "Web Developer",
    image: "/WEB_Eshita_Kapat.jpeg",
  },
  {
    id: 6,
    name: "Anusuya Srivastava",
    designation: "UI/UX Designer",
    image: "/DESIGN_Anusuya_Srivastava.jpg",
  },
  {
    id: 7,
    name: "Rahul Ghosh",
    designation: "Web Developer",
    image: "/WEB_Rahul_Ghosh.jpg",
  },

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center sm:mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
