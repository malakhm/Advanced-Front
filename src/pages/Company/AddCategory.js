import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/sidebar/sidebar.js";
import CompanyMenu from "../../components/sidebar/CompanyMenu.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../Context/CompanyConext.js";
const AddCategory = () => {
  const { token, company } = useContext(CompanyContext);
  const [name, setName] = useState("");
  const [image , setImage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();

      formData.append("name", name);
      formData.append("image", image);
      formData.append("CompanyId", company.id);
      const response = await axios.post(
        `http://localhost:5000/api/categories`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success("category added successfully !");
        navigate("/mycategories");
      }
        
        else{toast.warning("Category already exists");}
    } catch (err) {
      if (err.response && err.response.status == 409) {
        toast.warning("Category already exists");
      }
      console.error(err.code);
    }
  };

  return (
    <>
      <Sidebar>
        <CompanyMenu />
      </Sidebar>
      <div class="form-bg container">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6">
              <div class="form-container">
                <h3 class="title">Add Category</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Category Name"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div class="form-group">
                      <label>Image</label>
                      <input
                        type="file"
                        class="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <button class="btn btn-blue signup" onClick={handleSubmit}>
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

export default AddCategory;
