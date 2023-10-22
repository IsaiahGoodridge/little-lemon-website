import React from 'react';
import MarioAndAdrian from '../assets/Mario and Adrian b.jpg'

const About = () => {
  return (
    <>
      <article id='about'>
        <section className='about-section-container' >
          <div className='about-text-container' >
            <p1 className='about-text'>
            Opened in the bustling heart of New York City in 2020, our family-owned Mediterranean restaurant is a culinary haven where traditional recipes are lovingly crafted with a modern twist. Steeped in the rich heritage of Mediterranean cuisine, our chefs bring authenticity to every dish, infusing it with the flavors and aromas of sun-soaked coasts and spice markets. Nestled in a cozy yet chic ambiance, our restaurant offers a warm sanctuary for friends, lovers, and families alike, inviting them to savor a carefully curated menu inspired by diverse Mediterranean regions. From sizzling kebabs to heavenly baklava, our creations are culinary masterpieces, made from the finest locally sourced ingredients and authentic spices. More than just a dining experience, we are a culinary journey, a celebration of flavors and textures that transport you to the Mediterranean. With genuine smiles and heartfelt service, our dedicated staff ensures every guest feels like family, making each visit not just a meal but a cherished memory. Thank you for choosing us; we invite you to join us on this flavorful adventure where tradition meets innovation and every bite tells a story.
            </p1>
          </div>
          <div about-img-container>
            <img src={MarioAndAdrian} alt='Mario and Adrian laughing'/>
          </div>
        </section>
      </article>
    </>
  )
}

export default About;