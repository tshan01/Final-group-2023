'use client'

import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-12  font-worksans" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container mx-auto flex items-center">

        {/* Image on the Left */}
        <div className="flex-none mr-8">
          <img 
            src="/c8.webp" 
            alt="Coffee Shop" 
            className="image-about-us" 
            
          />
        </div>

        {/* Content on the Right */}
        <div className="flex-grow">
          <h2 className="text-center text-4xl specialOfferFont font-semibold">ABOUT US</h2>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
            Step into a world where each sip is a journey, and every cup tells a story. At True Black, we're not just brewing coffee; we're crafting experiences.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
            Nestled in the heart of New York City, our coffee shop is a haven for coffee enthusiasts and seekers of extraordinary flavor. Indulge in the rich symphony of aromas as our skilled baristas meticulously prepare your favorite brew.
            Our passion for perfection extends beyond the beans – it's in the artful pour, the comforting ambiance, and the genuine smiles that greet you.
            We source only the finest coffee beans, curated from exotic regions of plush coffee plantations in Coorg, ensuring every cup is a taste of Indian coffee culture.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
            From the bold robustness of our signature blends to the delicate notes of our specialty pours, each creation is a testament to our commitment to quality and innovation. More than a coffee shop, we're a community hub—a place where ideas percolate, friendships are stirred, and creativity steams. Join us on a sensory journey where every flavor tells a tale, and every visit is a moment to savor. At True Black, coffee isn't just a beverage; it's an art form, a connection, and an experience waiting to unfold. Elevate your coffee affair—because here, every cup is a masterpiece.
          </article>
        </div>
</div>

<div className="flex justify-center space-x-4 mt-8">
<img src="/c11.webp" alt="Description of Image 3" className="rounded-md" style={{ width: '200px', height: 'auto' }} />
          <img src="/c12.webp" alt="Description of Image 2" className="rounded-md" style={{ width: '200px', height: 'auto' }} />
          <img src="/c5.webp" alt="Description of Image 3" className="rounded-md" style={{ width: '200px', height: 'auto' }} />
          <img src="/TB1.png" alt="Description of Image 3" className="rounded-md" style={{ width: '200px', height: 'auto' }} />
        </div>

    </section>
  );
};

export default AboutUs;
