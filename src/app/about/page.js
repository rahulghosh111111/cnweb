import React from 'react'

function page() {
  return (
    <div>

      {/* About us part*/}
      <div className='flex  justify-center items-center h-screen bg-[#2F2B2B] pt-10'>
        <div className="md:w-1/2 text-left">
          <h1 className="text-[100px] flex justify-center items-center font Sans font-bold text-[#FF8820] shadow-inner shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]  mb-2 mr-20">About us</h1>


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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative bg-[#555350] border-2 border-[#FF8820] h-[416px] w-[355px] rounded-xl p-6"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-27 h-27 bg-[#D9D9D9] rounded-full border-4 border-none"></div>

              <h3 className="text-3xl font-bold mt-25 text-center">Heading</h3>
              <p className="text-sm mt-10  text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol
              </p>
            </div>
          ))}
        </div>
        <h2 className="bg-[#2F2B2B] text-[100px] md:text-[100px] font-bold text-[#FF8820] solid text-center mb-0">
          Why Join us
        </h2>
      </section>

      {/* Why Join us  part*/}

      <section className="bg-gradient-to-b from-[#242121] to-[#C06B20] text-white py-16 px-4 border-t-2 border-r-2 ">

        <div className="space-y-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[#ccb7a3] text-black font-bold text-lg py-15 px-6 rounded-xl shadow-md"
            >
              {`0${item}.`}
            </div>
          ))}
        </div>
      </section>


      <h1>Not finished</h1>

    </div>
  )
}

export default page



