import React, { useState } from 'react';
import './Slider.css';
import arrowLeft from '../../Photos/ArrowLeft.png';
import arrowRight from '../../Photos/ArrowRight.png';
import one from "../../Photos/Artshoc/one.webp";
import two from "../../Photos/Artshoc/two.webp";
import three from "../../Photos/Artshoc/three.webp";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [one, two, three];

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <img src={arrowLeft} alt="Prev" className="arrowleft" onClick={prevSlide} />
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className={`slider-image ${currentImage > 0 ? 'prev' : ''}`}
        />
        <img src={arrowRight} alt="Next" className="arrowright" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;