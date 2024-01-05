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
    <div className="userprofile-container">
      <div className="row">
        <div className="col-xs-12 col-sm-9">
          <form className="form-horizontal">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                {/* Profile picture */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="panel-body">
              <div className="form-group">
                <label className="col-sm-9 control-label">Username</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={handleUsername}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-9 control-label">Email</label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button
                  type="submit"
                  className="btn btn-blue"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <Link to="/home" type="reset" className="btn btn-default">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
