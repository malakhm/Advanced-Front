import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "../../Photos/Logo.png";
import "./ANavbar.css"
const ANavbar = () => {
  const [collapse, setCollapsed] = useState(true);
  const executeScroll = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-anavbar">
      <img src={Logo} alt="" className="anavbarLogo" />
      <div className="Navbar">
        <div className="header_Links_anavbar">
          <Link to="/home" className="N-home">
            Home
          </Link>
          <Link to="/Companies" className="N-companies">
            Companies
          </Link>
          <Link to="/Categories" className="N-categories">
            Categories
          </Link>
          <Link to="/About" className="N-about">
            About Us
          </Link>
          <Link
            to="/contact"
            name={"contactUs"}
            className="N-contact"
          >
            Contact Us
          </Link>
          <Link to="/Login" className="N-Login">
            Login
          </Link>
        </div>
        <FontAwesomeIcon
          icon={collapse ? faBars : faXmark}
          className="header_icon"
          onClick={() => setCollapsed(!collapse)}
        />
      </div>
      {!collapse ? (
        <nav className="header_mobile_nav">
          <div className="header_mobile_ul">
            <Link to="/home" className="N-home">
              Home
            </Link>
            <Link to="/Companies" className="N-companies">
              Companies
            </Link>
            <Link to="/Categories" className="N-categories">
              Categories
            </Link>
            <Link to="/About" className="N-about">
              AboutUs
            </Link>
            <Link
              to="/contact"
              onClick={executeScroll}
              className="N-contact"
            >
              ContactUs
            </Link>
            <Link to="/Login" className="N-Login">
              Login
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default ANavbar;
