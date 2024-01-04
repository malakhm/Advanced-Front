import React from 'react'
import './Styles/editForm.css'
import { useLocation , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu'
const EditForms =() =>{
  const navigate = useNavigate();
  const location = useLocation();
  const {id,
        Name,
        email,
        Location,
        website,
        phone,
        logo} = location.state || {}
       
  // console.log(id, Name, email)
  //creating states for all fields
  const [name, setName] = useState(Name || '')
  const [mail, setEmail] = useState(email || '')
  const [loc, seLocation] = useState(Location || '')
  const [Website, setWebsite] = useState(website || '')
  const [Phone, setPhone] = useState(phone || '')
  const [Logo, setLogo] = useState(logo || '')

  const handleEdit = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", mail);
      formData.append("location", loc);
      formData.append("website_link", Website);
      formData.append("phone", Phone);
      formData.append("logo", Logo);

      const response = await axios.put(
        `http://localhost:5000/api/companies/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
    
      );
      console.log(response)
      toast.success("company edited successfully !");
      navigate("/");
    } catch (error) {
      console.log(error.message)
      toast.error("something went wrong !!!!");
    }
  };
   
  

  return (
    <>
    <Sidebar><AdminMenu/></Sidebar>
	<div class="form-bg container">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <div class="form-container">
            <h3 class="title">Edit Company</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={mail}
                />
              </div>
              <div class="form-group">
                <label>Logo</label>
                <input
                  type="file"
                  class="form-control"
       
                  onChange={(e)=>setLogo(e.target.files[0])}

                  
                />
              </div>
              <div class="form-group">
                <label>Location</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Location"
                  value={loc}
                  onChange={(e)=>seLocation(e.target.value)}
                  
                />
              </div>
              <div class="form-group">
                <label>Phone No.</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  value={Phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label>Website Url</label>
                <input type="text"
                class="form-control"
                placeholder="https://www.google.com"
                value={Website}
                onChange={(e)=>setWebsite(e.target.value)}
                />
              </div>
              
              <button class="btn signup" onClick={handleEdit}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default EditForms
