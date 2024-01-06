import React from 'react';
import './AFooter.css'; 
import Logo from '../../Photos/Logo.png';
import FaceBook from '../../Photos/facebook.png';
import whatsUp from '../../Photos/whats.png';
import instagram from '../../Photos/instagram.png';
import Youtube from '../../Photos/Youtube.png';


const AFooter = () => {
  return (
    <footer className='footer contactus-footer'>
      <div className="footer-img">
        <img src={Logo} alt="spaceloom" />
      </div>
      <div className="footerContainer">
        <h1 className='h1'>Subscribe</h1>
        <p className='p'>Subscribe to our newsletter and stay inspired with the latest interior design trends.</p>
        <form className='form'>
          <input className="email" id="input" type="email" name="email" placeholder="Email address" />
          <input className="inp" type="submit" name="submit" value="Sign up" />
        </form>
      </div>
      <div className="footer-imgs">
        <a href="https://www.fb.com">
          <img src={FaceBook} alt="tiktokIcon" className="footer-icons" />
        </a>
        <a href="https://www.whatsup.com">
          <img src={whatsUp} alt="twitterIcon" className="footer-icons" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagram} alt="instagramIcon" className="footer-icons" />
        </a>
        <a href="https://www.youtube.com">
          <img src={Youtube} alt="facebookIcon" className="footer-icons" />
        </a>
      </div>
    </footer>
  );
};

export default AFooter;