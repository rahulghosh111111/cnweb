import React from 'react';
import Image from 'next/image';

function page() {
  const domains = [
    {
      title: "WEB",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
    {
      title: "CLOUD COMPUTING",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
    {
      title: "Marketing",
      description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    },
  ];

  return (
    <div>
      {/* About us part*/}
      <div className='flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#2F2B2B] pt-10 px-4'>
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl sm:text-[80px] md:text-[100px] text-center justify-center md:text-left font-bold text-[#FF8820] mb-6">About us</h1>
          <div className="text-[#FF8820]  text-[16px] sm:text-[18px] md:text-[20px]  space-y-1 md:ml-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>

          </div>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center gap-5">
          <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl"></div>
          <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-120 bg-[#D9D9D9] rounded-xl items-end"></div>
        </div>
      </div>

      {/* Our Mission Part */}
      <section className="bg-[#2F2B2B] text-white py-10 px-4">
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-[#FF8820] text-center mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative bg-[#555350] border-2 border-[#FF8820] rounded-xl p-6 h-[350px] flex flex-col">
              <h3 className="text-2xl font-bold mt-6 text-center text-white">Heading</h3>
              <p className="text-sm mt-6 text-gray-200 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-[#FF8820] text-center mt-20">Why Join us</h2>
      </section>

      {/* Why Join Us and Our Domains */}
      <div className='bg-gradient-to-b from-[#242121] to-[#C06B20] border-t border-white pt-10 pb-20 px-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative bg-[#EBD9C9] text-black border-2 border-[#FF8820] rounded-xl p-6 h-[300px] flex flex-col">
              <p className="text-4xl font-bold mt-6">{`0${item}.`}</p>
            </div>
          ))}
        </div>

        <section className="py-16">
          <h2 className="text-[60px] sm:text-[80px] md:text-[100px] text-center font-bold text-[#FF8820] mb-12">Our Domains</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div key={index} className="border-3 border-white rounded-xl p-6 text-center w-full max-w-sm mx-auto">
                <h3 className="text-lg font-bold mb-4 text-white">{domain.title}</h3>
                <div className="bg-[#AE6969] h-52 sm:h-56 md:h-65 rounded flex items-center justify-center text-white font-semibold mb-4 border-2">
                  IMAGES
                </div>
                <p className="text-sm text-white leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="bg-[#4a2d1f] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto shadow-lg">
            <div className="md:w-1/2 flex flex-col items-center">
  {/* Mobile-first layout: Image above heading */}
  <div className="flex flex-col md:flex-col-reverse items-center justify-center p-6">
    {/* Image First on Mobile, Second on Desktop */}
    <Image
  src="/AboutNinjas.png"
  alt="Ninja Image"
  width={500}
  height={300}
  className="
    mt-4 w-auto max-w-xs sm:max-w-sm md:max-w-md h-auto 
    md:mt-60 md:mr-10 md:absolute md:right-1/2 md:transform md:-translate-x-1/4
  "
/>

  </div>
</div>

            <div className="md:w-1/2 text-[#E58282] w-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6  text-center item-center justify-center">Frequently Asked Question</h3>
              <form className="space-y-4">
                {[1, 2, 3].map((q) => (
                  <input
                    key={q}
                    type="text"
                    placeholder={`Enter your question ${q}`}
                    className="bg-[#262222] rounded-xl h-12 w-full px-4 text-white font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300 ease-in-out"
                  />
                ))}
                <button type="submit" className="flex items-center justify-center bg-orange-500 text-white font-semibold px-6 py-2 rounded-xl hover:bg-orange-600 transition  ml-auto">
                  Submit Questions
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
