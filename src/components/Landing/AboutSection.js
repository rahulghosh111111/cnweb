import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section 
      className="relative py-16 text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/AboutLanding.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10 flex-col lg:flex-row">
            <h2 className="text-6xl font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">ABOUT US</h2>
            <Link href="/about" className="bg-red-900 hidden lg:block hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 mt-4 md:mt-0">View more</Link>
          </div>
          
          <div className="flex flex-col md:flex-row lg:gap-20 gap-10 backdrop-blur-lg bg-black/50 rounded-3xl justify-between items-center p-6 lg:p-10">
            <div className="flex-1">
              <p className="lg:text-xl leading-relaxed">
                We&apos;re a small but mighty team, 
                much like a focused group of 
                coding ninjas honing their skills in 
                the digital dojo. Our mission is to 
                empower individuals with the knowledge 
                and tools to create digital wonders.
              </p>
              
              <div className="grid grid-cols-3 lg:gap-6 gap-4 bg-white/10 lg:mt-12 mt-8 rounded-2xl p-5">
                <div className=" text-center border-r border-white/20 pr-6">
                  <h3 className="lg:text-4xl text-3xl font-bold text-white">10+</h3>
                  <p className="lg:text-xl mt-1 font-medium">Projects</p>
                </div>

                <div className=" text-center border-r border-white/20 pr-6">
                  <h3 className="lg:text-4xl text-3xl font-bold text-white">10+</h3>
                  <p className="lg:text-xl mt-1 font-medium">Events</p>
                </div>

                <div className=" text-center">
                  <h3 className="lg:text-4xl text-3xl font-bold text-white">10+</h3>
                  <p className="lg:text-xl mt-1 font-medium">Members</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="rounded-xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <Image
                    width={500}
                    height={500}
                  src="/AboutLanding1.png" 
                  alt="Team of developers collaborating" 
                  className="lg:h-80 h-72 block rounded-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

                  <Link href="/about" className="bg-red-900 lg:hidden block hover:bg-red-700 text-white px-6 py-3 w-48 text-center  mx-auto rounded-full font-semibold  transition-all duration-300 text-lg  hover:-translate-y-1 mt-4 lg:mt-8">View more</Link>

    </section>
  );
};

export default AboutSection;
