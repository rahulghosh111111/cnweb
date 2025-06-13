"use client";

import React from "react";
import AboutUs from "@/components/AboutUsComponents/AboutUs";
import MissionCards from "@/components/AboutUsComponents/MissionCards";
import WhyJoinUs from "@/components/AboutUsComponents/WhyJoinUs";
import Domains from "@/components/AboutUsComponents/Domains";
import FAQs from "@/components/AboutUsComponents/FAQs";

export default function Page() {
  return (
    
    <div>
      {/* Other content */}
      <AboutUs />
      <MissionCards />
      <WhyJoinUs />
      <Domains />
      <FAQs />
    </div>
     
          
  );
}