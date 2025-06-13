"use client";

import React from "react";
import MissionCards from "@/components/AboutUsComponents/MissionCards";
import WhyJoinUs from "@/components/AboutUsComponents/WhyJoinUs";
import Domains from "@/components/AboutUsComponents/Domains";
import FAQs from "@/components/AboutUsComponents/FAQs";
import AboutUs from "@/components/AboutUsComponents/AboutUs";

export default function Page() {
  return (
    
    <div>
    <AboutUs/>
      <MissionCards />
      <WhyJoinUs />
      <Domains />
      <FAQs />
    </div>
     
          
  );
}