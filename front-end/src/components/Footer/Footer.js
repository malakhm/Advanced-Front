import React from 'react';
import './Footer.css'; 
import Logo from '../../Photos/Logo.png';
import Facebook from '../../Photos/facebook.png';
import Twitter from '../../Photos/twiter.png';
import Instagram from '../../Photos/instagram.png';
import Tiktok from '../../Photos/tiktok.png';

const YourComponent = () => {
  return (
    <footer>
      <div className="footer-img">
        <img src={Logo} alt="spaceloom" />
      </div>
      <div className="footerContainer">
        <h1>Subscribe</h1>
        <p>Subscribe to our newsletter and stay inspired with the latest interior design trends.</p>
        <form>
          <input className="email" type="email" name="email" placeholder="Email address" pattern=".+@gmail.com" />
          <input className="inp" type="submit" name="submit" value="Sign up" />
        </form>
      </div>
      <div className="footer-imgs">
        <a href="https://www.yourlink.com">
          <img src={Tiktok} alt="tiktokIcon" className="footer-icons" />
        </a>
        <a href="https://www.yourlink.com">
          <img src={Twitter} alt="twitterIcon" className="footer-icons" />
        </a>
        <a href="https://www.yourlink.com">
          <img src={Instagram} alt="instagramIcon" className="footer-icons" />
        </a>
        <a href="https://www.yourlink.com">
          <img src={Facebook} alt="facebookIcon" className="footer-icons" />
        </a>
      </div>
    </footer>
  );
};

export default YourComponent;
