import AboutSection from "@/components/Landing/AboutSection";
import HeroSection from "@/components/Landing/Herosection";
import OurNinjas from "@/components/Landing/OurNinjas";
import OurEvents from "@/components/Landing/OurEvents";
import ProjectsSection from "@/components/Landing/ProjectsSection";
import Alumini from "@/components/Landing/Alumini";
import JoinTeam from "@/components/Landing/JoinTeam";

export default function Home() {
  return (

    <div>

      <HeroSection />
      <AboutSection/>
      <OurNinjas/>
      <OurEvents/>
      {/* <ProjectsSection/> */}
      <Alumini/>
      <JoinTeam/>
    </div>
  );
} 