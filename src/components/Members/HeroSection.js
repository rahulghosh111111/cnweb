import Image from 'next/image';
import React from 'react'

export default function HeroSection ()  {
  return (
    <section className="px-4 py-35">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden w-full ">
            <Image 
            src="/OurNinjasLanding.png"
            alt="missing"
            width={1200}
            height={0}
            className ="object-cover w-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
            priority
            />

             <div className="py-8 px-8">
                <Image 
                src="/OUR NINJAS.png"
                alt="missed"
                width={350}
                height={60}
                className="object-contain"
                />
                <h2 className="text-xl font-semibold py-3 text-[rgba(255,255,255,0.43)]">Meet the most talented, creative, and fun-loving team</h2>
                <p className="text-xl font-semibold py-9 text-[rgba(239,251,251,0.8)]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu
</p>
            </div>
            
        </div> 
        
    </section>
  )
}
