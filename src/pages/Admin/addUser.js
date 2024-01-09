import React from 'react'
import './Styles/editForm.css'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import Sidebar from '../../components/sidebar/sidebar.js'
import AdminMenu from '../../components/sidebar/AdminMenu'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AuthContext } from '../../Context/AuthContext'
const AddUser =() =>{
    const {token} = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");
    const [confirm, setConfirm] = useState("");

    const navigate = useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(password === confirm){
            try {
            const response = await axios.post(`https://spaceloomm.onrender.com/api/users/`,{
            username,
            email,
            role,
            password
        }, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }) 
        if(response.status === 201){
        toast.success('user added successfully !')
        navigate('/users')
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
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                  onChange={(e)=>setUsername(e.target.value)}
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

export default AddUser
