import React, { useContext } from "react";
import "./Styles/editForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../../components/sidebar/sidebar.js";
import AdminMenu from "../../components/sidebar/AdminMenu";
import { AuthContext } from "../../Context/AuthContext";
const EditCategory = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const { id, Name } = location.state || {};
  console.log(id, Name);
  //creating states for all fields
  const [name, setName] = useState(Name || "");
  const [image, setImage] = useState("");
  console.log(name, image);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("image", image);

      const response = await axios.put(
        `https://spaceloomm.onrender.com/api/categories/2`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("category edited successfully !");
      navigate("/categories");
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
                <h3 class="title">Edit Category</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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

export default EditCategory;
