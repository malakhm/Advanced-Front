import React, { useContext } from 'react'
import './Styles/editForm.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
const AddForm =() =>{
const { token } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [website, setWebsite] = useState('');

  const navigate = useNavigate()
const handleSubmit= async(e)=>{
  e.preventDefault();
  if(password === confirm){
    try {
      const response = await axios.post(`https://spaceloomm.onrender.com/api/companies/`,{
      name,
      email,
      location,
      phone,
      password,
      website_link:website
  } ,{
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }) 
    if(response.status === 201){
      toast.success('user added successfully !')
      navigate('/home')
    }
  
  
  }catch(err){
    if(err.response && err.response.status === 409){
    toast.warning('User already exists' )
    }
      console.error(err.code);
    }
  }
  else{
    toast.error('passwords do not match !')
  }
  
}
  
  return (
    <>
    <Sidebar><AdminMenu/></Sidebar>
	<div class="form-bg container">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <div class="form-container">
            <h3 class="title">Register Company</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              
              <div class="form-group">
                <label>Location</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Location"
                  onChange={(e)=>setLocation(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Phone No.</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password"
                class="form-control"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password"
                 class="form-control"
                 placeholder="Confirm Password"
                 onChange={(e)=>setConfirm(e.target.value)}
                 />
              </div>

              <div class="form-group">
                <label>Website Url</label>
                <input type="text"
                class="form-control"
                placeholder="https://www.google.com"
                onChange={(e)=>setWebsite(e.target.value)}
                />
              </div>
              
              <button class="btn btn-blue signup"
              onClick={handleSubmit}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default AddForm
