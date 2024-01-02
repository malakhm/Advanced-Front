import React, { useEffect, useState } from "react";
import "./ASignUpPage.css";
import Logo from "../../Photos/Logo.png";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
const ASignUpPage = () => {
  // State for password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // States for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle input changes
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      // Create a new user
      const response = await axios.post("http://localhost:5000/api/users/", {
        username: username,
        email: email,
        password: password,
      });

      // Access user data from the response
      const userData = response.data.data;
      console.log(userData);

      // Use the user data as needed
      console.log("User ID:", userData.id);
      console.log("Username:", userData.username);
      console.log("Email:", userData.email);

      // You can also redirect the user or perform other actions here
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="ASignUpPage-Container">
      <div className="ASignUpPage-Content">
        <div className="ASignUpPage-Logo">
          <img src={Logo} alt="" className="CLogo" />
        </div>
        <div className="ASignUpPage-Text">
          <h3>Create an account</h3>
          <p>Sign up to continue</p>
        </div>
        <div className="ASignInPage-second-part">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={handleUsername}
            />
            <br />
            <label>Email</label>
            <input
              className="signin-input-a email-input1"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={handleEmail}
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
                  value={password}
                  onChange={handlePassword}
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
            <Link type="submit" to="/signin" className="btn btn-blue">
              Get Started
            </Link>
            {/* <button type="submit" className="btn btn-blue">
              
            </button> */}
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
