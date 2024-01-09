import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/sidebar/sidebar.js";
import CompanyMenu from "../../components/sidebar/CompanyMenu.js";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { CompanyContext } from "../../Context/CompanyConext.js";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const EditDesignCompany = () => {
  const { token, company } = useContext(CompanyContext);
  const [data, setData] = useState([])
  // get all categories from db
  const fetchData = async () => {
    try{
		const response = await axios.get('https://spaceloomm.onrender.com/api/categories');
		if(response.status == 200){
		setData(response.data.data)
		}
		console.log(response.data.data)
	}
	catch(err){
		console.error(err.message)
	}
	
	}
	useEffect(()=>{
	fetchData();
	},[])
    const location = useLocation();
    const { id, categoryId, images1,images2, images3, images4, images5 } = location.state || {};
    console.log(id, categoryId, images1,images2, images3, images4, images5)
  const [image1 , setImage1] = useState(null);
  const [image2 , setImage2] = useState(null);
  const [image3 , setImage3] = useState(null);
  const [image4 , setImage4] = useState(null)
  const [image5 , setImage5] = useState( null);
  const [category, setCategory] = useState(categoryId ||"");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        //Validation: Check if any required file input is empty
    if (!image1 || !image2 || !image3 || !image4 || !image5) {
      toast.error("Please provide all required images");
      return;
    }
        const formData = new FormData();
         formData.append("images", image1);
         formData.append("images", image2);
         formData.append("images", image3);
         formData.append("images", image4);
         formData.append("images", image5);
      formData.append("CategoryId", category);
      const response = await axios.put(
        `https://spaceloomm.onrender.com/api/designs/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
        console.log(response);
        toast.success("design updated successfully !");
        navigate("/mydesigns");
      
    } catch (err) {
      
      console.error(err.message);
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
                <h3 class="title">Add a Design</h3>
                <form class="form-horizontal">
                <div class="form-group">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                        {data.map((item)=>(
                      <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                  </div>
                    <div class="form-group">
                      <label>Image1</label>
                      <input
                        type="file"
                        class="form-control"
                        required
                        onChange={(e) => setImage1(e.target.files[0])}
                      />
                  </div>
                  <div class="form-group">
                      <label>Image2</label>
                      <input
                        type="file"
                        required
                        class="form-control"
                        onChange={(e) => setImage2(e.target.files[0])}
                      />
                  </div>
                  <div class="form-group">
                      <label>Image3</label>
                      <input
                        type="file"
                        required
                        class="form-control"
                        onChange={(e) => setImage3(e.target.files[0])}
                      />
                  </div>
                  <div class="form-group">
                      <label>Image4</label>
                      <input
                        type="file"
                        required
                        class="form-control"
                        onChange={(e) => setImage4(e.target.files[0])}
                      />
                  </div>
                  <div class="form-group">
                      <label>Image5</label>
                      <input
                        type="file"
                        required
                        class="form-control"
                        onChange={(e) => setImage5(e.target.files[0])}
                      />
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

export default EditDesignCompany;
