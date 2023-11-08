import React from 'react';
import  './Header.css';

function Header(props) {
  const { imageSrc } = props; 

  return (
    <div className='header-container'>
      <div className='header-rectangle'>
        <p className='header-text-rectangle'>Design <br></br>Your Dream  House </p>
        <p className='header-text2-rectangle'>Creating a Dream Home: Your Vision, Our Design</p>      
      </div>
      <img className='header-image' src={imageSrc} alt='HeaderImage' />
    </div>
  );
}

export default Header;
