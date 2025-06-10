import React from 'react'

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
      <div className='flex  justify-center items-center h-screen bg-[#2F2B2B] pt-10'>
        <div className="md:w-1/2 text-left">
          <h1 className="text-[100px] flex justify-center items-center font Sans font-bold text-[#FF8820]    mb-2 mr-20">About us</h1>


          <div className="text-[#FF8820] text-[20px] flex justify-start items-start flex-col  ml-15  mr-20 ">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>adipiscing elit, sed do eiusmod tempor</p>
            <p>incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud</p>
            <p>exercitation ullamco laboris nisi ut aliquip</p>
            <p>ex ea commodo consequat. Duis aute irure</p>
            <p>dolor in reprehenderit in voluptate velit</p>
            <p>esse cillum dolore eu</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-5">
            <div className="w-60 flex h-120 bg-[#D9D9D9] rounded-xl"></div>
            <div className="w-60 flex h-120 bg-[#D9D9D9] rounded-xl items-end"></div>
          </div>
        </div>
      </div>
      {/* our mission part*/}
      <section className="bg-[#2F2B2B] text-white py-0 px-6">
        <h2 className="text-[100px] md:text-[100px] font-bold text-[#FF8820] solid text-center mb-12">
          Our Mission
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative bg-[#555350] border-2 border-[#FF8820] rounded-xl p-6 h-[350px] flex flex-col"
            >
              {/* Optional: Top Circle or Icon */}
              {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-300 rounded-full border-4 border-[#555350]"></div> */}

              <h3 className="text-2xl font-bold mt-6 text-center text-white">Heading</h3>
              <p className="text-sm mt-6 text-gray-200 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          ))}
        </div>
        <h2 className="bg-[#2F2B2B] text-[100px] md:text-[100px] font-bold text-[#FF8820] solid text-center mb-0">
          Why Join us
        </h2>
      </section>

      {/* Why Join us  part*/}
      {/* div for bg and add our domains part in same div*/}
      <div className='bg-gradient-to-b from-[#242121] to-[#C06B20] border-t-1 border-r-1 border-white pt-10 pb-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 max-w-7xl mx-auto px-4 ">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative bg-[#EBD9C9]  text-black  border-2 border-[#FF8820] rounded-xl p-6 h-[300px] flex  flex-col"
            >
              {/* Optional: Top Circle or Icon */}
              {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-300 rounded-full border-4 border-[#555350]"></div> */}


              <p className="text-4xl font-bold mt-6 text- ">
                {`0${item}.`}
              </p>
            </div>
          ))}

        </div>
        {/* our domains part*/}

        <section className="py-16 px-4">
          <h2 className="text-[100px] flex justify-center items-center font Sans font-bold text-[#FF8820]  mb-12">
            Our Domains
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="border-3 border-white rounded-xl p-6 text-center w-full max-w-sm mx-auto"
              >
                <h3 className="text-lg font-bold mb-4 text-white">
                  {domain.title}
                </h3>

                <div className="bg-[#AE6969] h-65 rounded flex items-center justify-center text-white font-semibold mb-4 border-2">
                  IMAGES
                </div>

                <p className="text-sm text-white leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Frequently Asked Question part*/}
        <section className=" py-12 px-6">
          <div className="bg-[#4a2d1f] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto shadow-lg">
            {/* Left: Image + Title */}

            <div className="md:w-1/2 flex flex-col items-center ">

              <image className="absolute  h-auto w-auto max-w-sm   right-1/2 transform -translate-x-1/4  " src="/AboutNinjas.png" alt="FAQ Ninjas"
              />
            </div>


            {/* Right: FAQ List */}
            <div className="md:w-1/2  text-[#E58282]">
              <h3 className="text-2xl font-semibold mb-6 text-right">
                Frequently Asked <br /> Question
              </h3>

              <form className="space-y-4">
                {[1, 2, 3].map((q) => (
                  <input
                    key={q}
                    type="text"
                    placeholder={`Enter your question ${q}`}
                    className="bg-[#262222] rounded-xl h-12 w-full px-4 text-white font-medium placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300 ease-in-out"
                  />
                ))}

                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-xl hover:bg-orange-600 transition block ml-auto"
                >
                  Submit Questions
                </button>
              </form>

            </div>
          </div>
        </section>


      </div>


    </div>
  )
}




export default page



