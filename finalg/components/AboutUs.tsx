'use client'

import React from "react";
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      {/* Added inline styles for left alignment and padding */}
      <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
        About Us
      </h1>
      <p>
        Step into a world where each sip is a journey, and every cup tells a story. At True Black, we're not just brewing coffee; we're crafting experiences. Nestled in the heart of New York City, our coffee shop is a haven for coffee enthusiasts and seekers of extraordinary flavor.
        
        Indulge in the rich symphony of aromas as our skilled baristas meticulously prepare your favorite brew. Our passion for perfection extends beyond the beans – it's in the artful pour, the comforting ambiance, and the genuine smiles that greet you.
        <br /><br />
        We source only the finest coffee beans, curated from exotic regions of plush coffee plantations in Coorg, ensuring every cup is a taste of Indian coffee culture. From the bold robustness of our signature blends to the delicate notes of our specialty pours, each creation is a testament to our commitment to quality and innovation.
        <br /><br />
        More than a coffee shop, we're a community hub—a place where ideas percolate, friendships are stirred, and creativity steams. Join us on a sensory journey where every flavor tells a tale, and every visit is a moment to savor.
        <br /><br />
        At True Black, coffee isn't just a beverage; it's an art form, a connection, and an experience waiting to unfold. Elevate your coffee affair—because here, every cup is a masterpiece.
      </p>
    </div>
  );
}