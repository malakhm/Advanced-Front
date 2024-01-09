import React, { useState,useEffect} from "react";
import "./Slider.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
const Slider = ({ companyId }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images,setImages]= useState([]);
  const [designs, setDesigns] = useState([]);

  const Getdesigns = async() => {
    try {
      const response = await fetch(`https://spaceloomm.onrender.com/api/designs/get/${companyId}`);
      const data=  await response.json();
      setDesigns(data.data)
     

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
       <div className="icons-icon-icon"> 
        <IoIosArrowDropleft
         
          onClick={prevSlide}
        /></div>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className={` slider-image ${currentImage > 0 ? "prev" : ""}`}
        />
        <div className="icons-icon-icon"> 

        <IoIosArrowDropright
          onClick={nextSlide}
        />
        </div>
      </div> 



      

      </div>
    
  );
};

export default Slider;
