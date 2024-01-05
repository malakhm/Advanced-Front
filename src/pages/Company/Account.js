import React from 'react'
import CompanyMenu from '../../components/sidebar/CompanyMenu.js'
import Sidebar from '../../components/sidebar/sidebar.js'
import { LuUserCircle } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import './Styles/Account.css'
import Button from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { CompanyContext } from '../../Context/CompanyConext.js';
import { useState, useEffect, useContext } from 'react';
const Account =() =>{
  const [ data , setData] = useState([])
  const { token, company, setCompany} = useContext(CompanyContext)
  
  return (
    <>
    <Sidebar><CompanyMenu/></Sidebar>
    <div className='Company-main-account-profile d-flex'>
      <div className='profile-with-name '>
      {console.log(company)} 
        <img className="rounded-circle image-profile-main-acc" alt="avatar1" 
        
        src={company.logo} 
        width='250px' 
        height='250px'/>
      
      <h1 className='account-title-name'>{company.name}</h1>
      <h5 class="text-muted mb-4">{company.email} </h5><span class="text-muted mx-2">
       <p><a href="html.com" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> {company.website_link}</a></p>
      </span> 
      <div className='link-button-edit-account'>
        <Link to='/edit-account' 
        state={{id:company.id,
                Name:company.name,
                Email:company.email,
                Website:company.website_link,
                Location:company.location,
                Phone:company.phone,
                Logo:company.logo}} 
                className='btn btn-blue'>Edit
        </Link></div>
      
    </div>
    <div className='card-components-main d-flex flex-column'>
      <h1 className=''>Personal Info</h1>
      <h5 className='text-muted'>Manage your personal info , including your phone number and email address where you can be contacted</h5>
      <div className='card-components-all-main'>
      <div className='single-container-component-main d-flex flex-column'>
        <div className='name-icon-same-container d-flex'>
          <h4>Name</h4>
          <LuUserCircle className='icon-color-style'/>
        </div>
        <span className='text-muted'>{company.name}</span>
      </div>

      <div className='single-container-component-main d-flex flex-column'>
        <div className='name-icon-same-container d-flex'>
          <h4>Country Region</h4>
          <BiWorld className='icon-color-style'/>
        </div>
        <span className='text-muted'>{company.location}</span>
      </div>

      <div className='single-container-component-main d-flex flex-column'>
        <div className='name-icon-same-container d-flex'>
          <h4>Email</h4>
          <IoIosMail className='icon-color-style'/>
        </div>
        <span className='text-muted'>{company.email}</span>
      </div>
      </div>
      
     
    </div>
    

    </div>
    </>
  )
}

export default Account
