import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the authToken from Local Storage
    localStorage.removeItem("authToken");

    // Redirect to the login page
    navigate("/signin"); // Replace "/login" with your actual login page path
  };

  return (
    <div>
      <h1>Sign Out Page</h1>
      <p>You are now signed out.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Test;
