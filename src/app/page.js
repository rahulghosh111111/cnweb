import AboutSection from "@/components/Landing/AboutSection";
import HeroSection from "@/components/Landing/Herosection";
import OurNinjas from "@/components/Landing/OurNinjas";
import OurEvents from "@/components/Landing/OurEvents";
import ProjectsSection from "@/components/Landing/ProjectsSection";

export default function Home() {
  return (

    <div>

      <HeroSection />
      <AboutSection/>
      <OurNinjas/>
      <OurEvents/>
      <ProjectsSection/>
    </div>
  );
} 