import React, { useState } from "react";
import "./CSignUpPage.css";
import Logo from "../../Photos/Logo.png";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CSignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [website_link, setWebsite_link] = useState("");

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleWebsite_link = (e) => {
    setWebsite_link(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://spaceloomm.onrender.com/api/companies/",
        {
          name: name,
          email: email,
          password: password,
          phone: phone,
          location: location,
          website_link: website_link,
        }
      );

      const Data = response.data.data;
      console.log(Data);
      toast.success("Company created successfully!");
      navigate("/signin-company");
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 409) {
          if (data.field === "name") {
            toast.error("Company with this name already exists.");
          } else if (data.field === "email") {
            toast.error("Company with this email already exists.");
          } else {
            toast.error("Failed to create company. Please try again.");
          }
        } else {
          toast.error("Failed to create company. Please try again.");
        }
      } else {
        console.error("Error creating company:", error.message);
      }
    }
  };

  return (
    <div className="CSignUpPage-Container">
      <div className="CSignUpPage-Content">
        <div className="CSignUpPage-Logo">
          <img src={Logo} alt="" className="DLogo" />
        </div>
        <div className="CSignUpPage-Text">
          <h3>Create an account</h3>
          <p>Sign up to continue</p>
        </div>
        <div className="CSignInPage-second-part">
          <form onSubmit={handleSubmit}>
            <label>Company Name</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your company name"
              required
              value={name}
              onChange={handleName}
            />
            <label>Phone Number</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={handlePhone}
            />
            <label>Location</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your location"
              required
              value={location}
              onChange={handleLocation}
            />
            <label>Website Link</label>
            <input
              className="signin-input-a email-input1"
              type="text"
              placeholder="Enter your website link"
              required
              value={website_link}
              onChange={handleWebsite_link}
            />

            <label>Email</label>
            <input
              className="signin-input-a email-input1"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={handleEmail}
            />

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
            <Link to="/signin-company" className="signup-link">
              <span className="signup-word">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSignUpPage;
