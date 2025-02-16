import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { useNavigate , NavLink} from 'react-router-dom'
import { toast } from 'react-toastify';
import './sidebar.css'
const AdminMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Companies');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Add logic to handle the click event, e.g., navigate to the corresponding page
  };

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/signin");
    localStorage.clear();
    toast.success("Logged out successfully !");
  };

  return (
    <CDBSidebarContent>
      <CDBSidebarMenu>
      <NavLink exact to="/home" activeClassName="activeClicked">
        <CDBSidebarMenuItem
          icon="building"
          iconSize="lg"
          active={activeMenuItem === 'Companies'}
          onClick={() => handleMenuItemClick('Companies')}
        >
          Companies
        </CDBSidebarMenuItem>
      </NavLink>

      <NavLink exact to="/users" activeClassName="activeClicked">
          <CDBSidebarMenuItem
            icon="users"
            iconSize="lg"
            active={activeMenuItem === 'Users'}
            onClick={() => handleMenuItemClick('Users')}
          >
            Users
          </CDBSidebarMenuItem>
      </NavLink>
      <NavLink exact to="/categories" activeClassName="activeClicked">

        <CDBSidebarMenuItem
          icon="file"
          iconType="solid"
          textFontSize="16px"
          iconSize="lg"
          active={activeMenuItem === 'Categories'}
          onClick={() => handleMenuItemClick('Categories')}
        >
          Categories
        </CDBSidebarMenuItem></NavLink>
        
        <CDBSidebarMenuItem
          icon="sign-out-alt"
          iconType="solid"
          textFontSize="16px"
          iconSize="lg"

          active={activeMenuItem === 'Logout'}
          onClick={handleLogout}
        >
          Logout
        </CDBSidebarMenuItem>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  );
};

export default AdminMenu;
