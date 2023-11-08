import { React } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Photos/Logo.png';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
const Navbar = () => {
   const [collapse, setCollapsed] = useState(true)
   const executeScroll = () => {
      const element = document.getElementById('Contact');
      element.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <header className='header'>
         <img src={Logo} alt='' className='Logo' />
         <div className='Navbar'>
            <div className="header_Links">
               <Link to="/" className="N-home">Home</Link>
               <Link to="/Companies" className="N-companies">Companies</Link>
               <Link to="/Categories" className="N-categories">Categories</Link>
               <Link to="/About" className="N-about">AboutUs</Link>
               <Link to="/About#Contact" name={'contactUs'} onClick={executeScroll} className="N-contact"> ContactUs </Link>

            </div>
            <FontAwesomeIcon icon={collapse ? faBars : faXmark} className="header_icon" onClick={() => setCollapsed(!collapse)} />
         </div>
         {!collapse ?
            <nav className="header_mobile_nav">
               <div className="header_mobile_ul">
                  <Link to="/" className="N-home">Home</Link>
                  <Link to="/Companies" className="N-companies">Companies</Link>
                  <Link to="/Categories" className="N-categories">Categories</Link>
                  <Link to="/About" className="N-about">AboutUs</Link>
                  <Link to="/About#Contact" onClick={executeScroll} className="N-contact"> ContactUs </Link>;
               </div>
            </nav>
            : null}

      </header>

   );
};

export default Navbar;

