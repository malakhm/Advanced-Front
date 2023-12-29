import React, { useState } from "react";
import "./ASignInPage.css";
import Logo from "../../Photos/Logo.png";
import EyeOpen from "../../Photos/eyeopen.svg";
import { Link } from "react-router-dom";

const ASignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="ASignInPage-Container">
      <div className="ASignInPage-Content">
        <div className="ASignInPage-first-part">
          <img alt="" className="BLogo" src={Logo} />
        </div>
        <div className="ASignInPage-second-part">
          <form>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" required />
            <br />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <img
                src={EyeOpen}
                alt="Toggle Password"
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button type="submit" className="btn btn-blue">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ASignInPage;
