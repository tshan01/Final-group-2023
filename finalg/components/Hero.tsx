'use client'
import React from "react";
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="hero py-16 mt-4" 
      style={{
        marginTop: '0', // Remove any top margin
        paddingTop: '0', // Reduce padding at the top
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      <div className="container mx-auto flex items-center">

        {/* Text Content on the Left */}
        <div className="text-content py-16 px-8 text-white flex-grow">
          <h1 className="text-4xl font-bold">
            <span className="text-primary headingOneFont">COORGS Bold Coffee Sanctuary</span><br/>
           
       
            <span className="specialOfferFont">Your FREE Coorg Coffee is just the beginning</span>
            <br />
          </h1>
          <span className="specialOfferFont">&quot;Sign up today, and grab exclusive offers from your next order, because one cup of Coorg is never enough!&quot;</span>
          
         
        </div>

        {/* Full Image on the Right */}
        <div className="flex-none" style={{ maxWidth: '100%', height: '70%' }}>
          <Image 
            src="/R1c9.webp" 
            alt="Coffee Image" 
            width={800} // Adjust as needed
            height={500} // Adjust as needed
            layout="intrinsic" // Maintains the aspect ratio of the image
          />
        </div>

      </div>
      <br/><br/>

      {/* Top Image */}
      <div className="container mx-auto" style={{ position: 'relative', height: '30vh' }}>
        <Image
          src="/TB1.webp" 
          alt="Top Image Description" 
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
