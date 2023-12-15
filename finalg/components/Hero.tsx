import React from "react";
import Image from 'next/image';


export default function Hero() {
  return (
    <section
      className="hero py-16 mt-4" hero-gradient-border
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
            <span className="text-primary indiaGradient tasteOfIndiaFont">Taste of India in Every Sip!</span><br/><br/>
            <span className="specialOfferFont">Buy 1 get 1 CAPPUCCINO!</span>
            <br />
          </h1>
          <p className="my-4 text-gray-500 text-semibold py-3 font-semibold">DON'T MISS OUT ON THE MAGIC OF COORG COFFEE</p>
          <div className="flex gap-4">
            <button className="bg-black flex gap-2 items-center text-white px-4 py-2 rounded-full text-sm">
              REGISTER HERE
            </button>
          </div>
        </div>

        {/* Full Image on the Right */}
        <div className="flex-none" style={{ maxWidth: '70%', height: 'auto' }}>
          <Image 
            src="/c9.avif" 
            alt="Coffee Image" 
            width={500} // Adjust as needed
            height={300} // Adjust as needed
            objectFit="cover"
          />
        </div>

      </div>
      <br/>
      <br/>
        {/* Top Image */}
    <div className="container mx-auto" style={{ position: 'relative', height: '30vh' }}>
      <Image
        src="/TB1.png" 
        alt="Top Image Description" 
       layout="fill"
        objectFit="cover"
      />
    </div>
    </section>
  );
}