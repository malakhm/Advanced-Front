import React, { useContext } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu'
import { CompanyContext } from '../../Context/CompanyConext.js'
import CompanyMenu from '../../components/sidebar/CompanyMenu.js'
const EditAccount =() =>{
  const navigate = useNavigate();
  const { token , setCompany} = useContext(CompanyContext)
  const location = useLocation();
  const {id,
        Name,
        Email,
        Location,
        Website,
        Phone,
        Logo} = location.state || {}
       
  // console.log(id, Name, Email)
  //creating states for all fields
  const [name, setName] = useState(Name || '')
  const [email, setEmail] = useState(Email || '')
  const [loc, seLocation] = useState(Location || '')
  const [website, setWebsite] = useState(Website || '')
  const [phone, setPhone] = useState(Phone || '')
  const [logo, setLogo] = useState(Logo || '')

  const handleEdit = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("location", loc);
      formData.append("website_link", website);
      formData.append("phone", phone);
      formData.append("logo", logo);

      const response = await axios.put(
        `http://localhost:5000/api/companies/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
    
      );
      console.log(response)
      setCompany(response.data.data)
      toast.success("company edited successfully !");
      navigate("/account");
    } catch (error) {
      console.log(error.message)
      toast.error("something went wrong !!!!");
    }
  };
   
  

  return (
    <>
    <Sidebar><CompanyMenu/></Sidebar>
	<div class="form-bg container">
    <div class="container">
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
                  value={email}
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
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label>Website Url</label>
                <input type="text"
                class="form-control"
                placeholder="https://www.google.com"
                value={website}
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

export default EditAccount
