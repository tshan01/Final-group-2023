'use client'
import React from "react";
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-12 font-worksans" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container mx-auto flex items-center">

        {/* Image on the Left */}
        <div className="flex-none mr-8">
          <Image 
            src="/c8.webp" 
            alt="Coffee Shop" 
            width={300} // Adjust as needed
            height={200} // Adjust as needed
            className="image-about-us"
          />
        </div>

        {/* Content on the Right */}
        <div className="flex-grow">
          <h2 className="text-center text-4xl headingFont font-semibold">ABOUT US</h2>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          Welcome to True Black, not just a coffee shop but a realm of extraordinary taste and aroma in the heart of New York City. Our sanctuary is where the essence of coffee is not just served but celebrated and elevated to an art form.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          Entering True Black, you're greeted by an atmosphere filled with the whispers of far-off lands and exotic flavors. Our baristas, true artisans, welcome you with warm smiles and deep coffee knowledge, crafting stories in each cup through a tapestry of flavors that dance on your palate.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          Our coffee beans, sourced from the lush slopes of Coorg, India, are treasures in themselves, embodying the magic and rich heritage of Indian coffee culture. Each bean promises a unique journey, and we ensure that every cup reflects our passion and dedication.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          More than just a coffee destination, True Black is a community hub, a place where ideas, friendships, and creativity thrive. It's where artists, writers, thinkers, and dreamers come together, united by their love of coffee and the energy of like-minded souls.
          </article>
          <article className="text-white text-[16px] font-worksans-medium leading-relaxed mt-[2rem]">
          Every visit to True Black is an opportunity for a sensory journey, to explore new flavors, make new connections, and create new stories. We invite you to indulge in the experience and savor the artistry in every cup.At True Black, coffee is a celebration of culture, a bridge between traditions, and an adventure in every cup. Join us and discover how, at True Black, every cup is not just coffee—it's a masterpiece waiting to unfold.
          </article>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        {/* Replace <img> tags with <Image> */}
        <Image src="/c11.webp" alt="Description of Image 3" width={200} height={200} className="rounded-md" />
        <Image src="/c12.webp" alt="Description of Image 2" width={200} height={200} className="rounded-md" />
        <Image src="/C13.webp" alt="Description of Image 3" width={200} height={200} className="rounded-md" />
        <Image src="/c30.webp" alt="Description of Image 3" width={200} height={200} className="rounded-md" />
        <Image src="/TB1.webp" alt="Description of Image 3" width={200} height={200} className="rounded-md" />
      </div>
    </section>
  );
};

export default AboutUs;