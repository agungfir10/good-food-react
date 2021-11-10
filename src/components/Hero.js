import React from 'react';
import mainImage from '../assets/images/foodeditorial.jpg';

function Hero() {
  return (
    <div className="hero">
      <img
        src={mainImage}
        alt="Aneka Makanan"
        width="100%"
        style={{ margin: '0px', padding: '0' }}
        className="image-hero"
      />
      <p>Enjoy your food healthy and easiest to order.</p>
    </div>
  );
}

export default Hero;
