import React from "react";
import "./ALoginPage.css";
import Logo from "../../Photos/Logo.png";
import { Link } from "react-router-dom";

const ALoginPage = () => {
  return (
    <div className="ALoginPage-container">
      <div className="ALoginPage-first-part">
        <div className="Text-Logo">
          <img className="Logo" src={Logo} alt="" />
          <h2 className="Text-Quote">Where Interior Dreams Unfold</h2>
        </div>
      </div>
      <div className="ALoginPage-second-part">
        <div className="ALoginPage-buttons">
          <Link to="/signup" className="btn btn-blue" type="submit">
            Get Started
          </Link>
          <Link to="/signin" className="btn btn-blue" type="submit">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ALoginPage;
