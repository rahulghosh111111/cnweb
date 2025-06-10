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






    </div>
  )
}

export default page



