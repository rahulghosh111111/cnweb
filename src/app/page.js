"use client"
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/Landing/Herosection";
import OurNinjas from "@/components/Landing/OurNinjas";
import OurEvents from "@/components/Landing/OurEvents";
// import ProjectsSection from "@/components/Landing/ProjectsSection";
import Alumini from "@/components/Landing/Alumini";
import JoinTeam from "@/components/Landing/JoinTeam";
import AboutSection from "@/components/Landing/AboutSection";
import AnimatedTestimonialsDemo from "@/components/Landing/new-testimonial";
import Popup from "@/components/Landing/Popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <HeroSection />
      <AboutSection />
      <OurNinjas />
      <OurEvents />
      {/* <ProjectsSection/> */}
      {/* <Alumini/> */}
      {/* <AnimatedTestimonialsDemo /> */}
      <JoinTeam/>
    </div>
  );
}