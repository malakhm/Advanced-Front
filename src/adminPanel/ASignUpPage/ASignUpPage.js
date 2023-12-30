import React, { useState } from "react";
import "./ASignUpPage.css";
import Logo from "../../Photos/Logo.png";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ASignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="ASignUpPage-Container">
      <div className="ASignUpPage-Content">
        <div className="ASignUpPage-Logo">
          <img src={Logo} alt="" className="CLogo"/>
        </div>
        <div className="ASignUpPage-Text">
          <h3>Create an account</h3>
          <p>Sign up to continue</p>
        </div>
        <div className="ASignInPage-second-part">
          <form>
            <label>Username</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your username"
              required
            />
            <br />
            <label>Email</label>
            <input
              className="signin-input-a email-input1"
              type="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <label>Password</label>
            <div className="password-input-container">
              <div className="input-wrapper">
                <input
                  className="signin-input-a password-input1"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div
                className={`eye-wrapper ${
                  window.innerWidth > 600 ? "white-icon" : ""
                }`}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <BsEyeFill size={20} />
                ) : (
                  <BsEyeSlashFill size={20} />
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-blue">
              Get Started
            </button>
          </form>
          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/signin" className="signup-link">
              <span className="signup-word">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ASignUpPage;
