import React, { useState,useEffect} from "react";
import "./Slider.css";
import arrowLeft from "../../Photos/ArrowLeft.png";
import arrowRight from "../../Photos/ArrowRight.png";


const Slider = ({ companyId }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images,setImages]= useState([]);
  const [designs, setDesigns] = useState([]);

  const Getdesigns = async() => {
    try {
      const response = await fetch(`/api/designs/company/${companyId}`);
      const data=  await response.json();
      setDesigns(data)

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const allImages =designs&& designs.reduce((acc, design) => [...acc, ...design.images], []);

    setImages(allImages);

  }, [designs]); 
  useEffect(() =>{
    Getdesigns()
  },[]);
  console.log(designs);


  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
                    
       <div className="slider-container">
        <img
          src={arrowLeft}
          alt="Prev"
          className="arrowleft"
          onClick={prevSlide}
        />
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className={`slider-image ${currentImage > 0 ? "prev" : ""}`}
        />
        <img
          src={arrowRight}
          alt="Next"
          className="arrowright"
          onClick={nextSlide}
        />
      </div> 



      

      </div>
    
  );
};

export default Slider;
