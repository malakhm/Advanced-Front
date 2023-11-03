import React, { useState } from 'react';
import './Slider.css';
import arrowLeft from './assets/arrow-left.png';
import arrowRight from './assets/arrow-right.png';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    require('./photos/photo1.jpg'),
    require('./photos/photo2.jpg'),
    require('./photos/photo3.jpg'),
  ];

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <img src={images[currentImage].default} alt={`Slide ${currentImage}`} className="slider-image" />
        <div className="slider-arrows">
          <img src={arrowLeft} alt="Prev" className="arrow" onClick={prevSlide} />
          <img src={arrowRight} alt="Next" className="arrow" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;

