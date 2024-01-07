import React, { useState, useContext, useEffect } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.js";
import { toast } from "react-toastify";

const EditUserProfile = () => {
  const { user, token, fetchData, setUser } = useContext(AuthContext);
  const AuthToken = token;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const id = user.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${AuthToken}`,
            },
          }
        );

        const userData = response.data.data;
        console.log(userData);
        setUsername(userData.username);
        setEmail(userData.email);
        setImage(userData.image);
        // setUser(response.data.data);
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [id, AuthToken]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image change here
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);

    try {
      // Make your update API call here
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("image", image);

      const response = await axios.put(
        `http://localhost:5000/api/users/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      console.log(response);
      setUsername(response.data.data.username);
      setEmail(response.data.data.email);
      setImage(response.data.data.image);
      setUser(response.data.data);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to update");
    }
  };

  return (
    <div
      class="form-bg container"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div
        class="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <div class="form-container">
              <h3 class="title">Edit Profile</h3>
              <form class="form-horizontal">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                    value={username}
                    onChange={handleUsername}
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div class="form-group">
                  <label>Image</label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleImageChange}
                  />
                </div>

                <button
                  class="btn signup"
                  type="submit"
                  className="btn btn-blue"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <Link
                  to="/home"
                  type="reset"
                  className="btn btn-default"
                  style={{ marginTop: "-100px" }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
