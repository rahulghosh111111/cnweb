import Image from 'next/image';
import React from 'react'

export default function HeroSection ()  {
  return (
    <section className="h-screen flex">
        <div className="w-full mx-auto rounded-xl overflow-hidden ">
            <Image 
            src="/OurNinjasLanding.png"
            alt="missing"
            width={1200}
            height={1200}
            className ="h-[80vh] object-cover bg-center w-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
            priority
            />

             <div className="">
            <h1 className="text-4xl sm:text-6xl md:text-7xl sm:px-10 px-5 font-bold bg-gradient-to-r from-[#fa5935] via-[#FF8820] to-[#8d0e0e] bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight drop-shadow-2xl"
                style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}>
              Our Ninjas
            </h1>
                <h2 className="text-lg font-normal pb-4 sm:px-10 px-5 text-[rgba(255,255,255,0.43)]">Meet the most talented, creative, and fun-loving team</h2>
                {/* <p className="text-xl font-semibold py-9 text-[rgba(239,251,251,0.8)]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu
</p> */}
            </div>
            
        </div> 
        
    </section>
  )
}
