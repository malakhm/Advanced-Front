// Admin/AdminNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Photos/Logo.png'


function AdminNavbar() {

  return (
  <header className='header'>
   <img src={Logo} alt='' className='Logo' />
    <div className="navbar">
     <div className="header_Links">
            <Link to="/admin" className="">Companies</Link>
            <Link to="/admin/Categories" className="">Categories</Link>
            <Link to="/admin/comments" className="">Comments</Link>
            <Link to="/Login" className="N-Login">Logout</Link>

            
      </div>
    </div>
    </header>
  );
}

export default AdminNavbar;
