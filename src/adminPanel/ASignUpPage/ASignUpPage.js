import React, { useEffect, useState } from "react";
import "./ASignUpPage.css";
import Logo from "../../Photos/Logo.png";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ASignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/", {
        username: username,
        email: email,
        password: password,
      });

      const Data = response.data;
      console.log(Data);

      // console.log("User ID:", Data.id);
      // console.log("Username:", Data.data.username);
      // console.log("Email:", email);

      toast.success("Account created successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("Error creating user:", error.message);

      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.message === "Email already exists!") {
          toast.error("Email already exists!");
        } else if (errorData.message === "Username already exists!") {
          toast.error("Username already exists!");
        }
      } else if (error.response && error.response.status === 422) {
        const errorData = error.response.data;
        if (errorData.message === "Invalid password") {
          toast.error("Invalid password. Password must be strong!");
        }
      } else {
        toast.error("Failed to create account. Please try again.");
      }
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
