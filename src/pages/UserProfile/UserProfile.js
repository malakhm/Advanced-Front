import React, { useState, useContext, useEffect } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.js";
import { toast } from "react-toastify";

import ProfileImage from "../../Photos/profileiamge.jpg";

const UserProfile = () => {
  const { user, token, fetchData, setUser } = useContext(AuthContext);
  const AuthToken = token;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const id = user.id;

  useEffect(() => {
    // Fetch user data and set initial values when the component mounts
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
        setUser(response.data.data);
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [id, AuthToken]);

  return (
    <div className="userprofile-container">
      <div className="row">
        <div className="col-xs-12 col-sm-9">
          <form className="form-horizontal">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                {/* Profile picture */}
                <img
                  src={user.image || ProfileImage}
                  alt="profile-nav"
                  className="img-circle profile-avatar"
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
                    disabled
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
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <Link type="submit" className="btn btn-blue" to="/edit-user-profile">
                  Edit
                </Link>
                <Link to="/home" type="reset" className="btn btn-default userprofile-cancel">
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

export default UserProfile;
