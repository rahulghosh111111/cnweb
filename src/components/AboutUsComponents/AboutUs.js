"use client";
import React from 'react';  
import { motion } from 'framer-motion';
import { SparklesCore } from '@/ui/sparkles';
import { BackgroundBeams } from '@/ui/background-beams';    
import { InfiniteMovingCards } from '@/ui/infinite-moving-cards';
import { Globe, Smartphone, Palette, Cloud, Brain, TrendingUp } from 'lucide-react';

const domains = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive websites with modern frameworks and cutting-edge technologies.",
    icon: <Globe className="h-8 w-8 text-[#fa5935]" />
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Building cross-platform mobile apps for iOS and Android with seamless user experiences.",
    icon: <Smartphone className="h-8 w-8 text-[#fa5935]" />
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Crafting beautiful interfaces and intuitive experiences that users love.",
    icon: <Palette className="h-8 w-8 text-[#fa5935]" />
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Implementing scalable cloud infrastructure for modern digital applications.",
    icon: <Cloud className="h-8 w-8 text-[#fa5935]" />
  },
  {
    id: 5,
    title: "AI Integration",
    description: "Leveraging artificial intelligence to create smarter, more adaptive solutions.",
    icon: <Brain className="h-8 w-8 text-[#fa5935]" />
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility and drive meaningful engagement.",
    icon: <TrendingUp className="h-8 w-8 text-[#fa5935]" />
  }
];

const AboutUs = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles-effect"
          background="transparent"
          minSize={0.5}
          maxSize={1.5}
          particleColor="#fa5935"
          particleDensity={70}
          speed={0.6}
        />
      </div>
      <BackgroundBeams className="absolute inset-0 custom-beams" />
      
      {/* Combined Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col justify-between h-[85vh] py-8">
        {/* About Us Content */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#fa5935] to-[#8d0e0e]" 
          style={{fontFamily: "'Gang of Three', Arial, sans-serif", }}>
            About Us
          </h1>
          {/* <div className="w-32 h-1.5 bg-gradient-to-r from-[#fa5935] to-[#8d0e0e] mx-auto mb-8"></div> */}
          <p className="text-xl text-[#bfbfbd] max-w-2xl mx-auto leading-relaxed">
            We&apos;re a team of passionate experts dedicated to transforming ideas into digital reality.
            With cutting-edge technology and creative solutions, we help businesses thrive in the 
            digital landscape.
          </p>
        </motion.div>

        {/* Expertise Slider - takes up most of the vertical space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-grow flex items-center justify-center py-4"
        >
          <div className="w-full">
            <InfiniteMovingCards 
              items={domains}
              direction="left"
              speed="medium"
              className="py-4"
            />
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 mb-4"
        >
          <p className="text-lg text-[#bfbfbd] italic max-w-xl mx-auto">
            &ldquo;We blend technical expertise with creative vision to build 
            solutions that stand out in the digital world.&rdquo;
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fa5935] to-[#8d0e0e] mx-auto mt-4"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;