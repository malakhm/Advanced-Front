import React, { useContext } from "react";
import "./Styles/editForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../../components/sidebar/sidebar.js";
import AdminMenu from "../../components/sidebar/AdminMenu";
import { AuthContext } from "../../Context/AuthContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const EditUser = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { id, Username, Email, Role, image } = location.state || {};

  // console.log(id, Name, email)
  //creating states for all fields
  const [username, setUsername] = useState(Username || "");
  const [email, setEmail] = useState(Email || "");
  const [Image, setImage] = useState(image || "");
  const [role, setRole] = useState(Role || "");

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("image", Image);
      formData.append("role", role);

      const response = await axios.put(
        `http://localhost:5000/api/users/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("company edited successfully !");
      navigate("/users");
    } catch (error) {
      console.log(error.message);
      toast.error("something went wrong !!!!");
    }
  };

  return (
    <>
      <Sidebar>
        <AdminMenu />
      </Sidebar>
      <div class="form-bg container">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6">
              <div class="form-container">
                <h3 class="title">Edit User</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      class="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div class="form-group">
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                      <MenuItem value={"User"}>User</MenuItem>
                    </Select>
                  </div>
                  <button class="btn signup" onClick={handleEdit}>
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
