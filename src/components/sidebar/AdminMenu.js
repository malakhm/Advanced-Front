import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
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
        <CDBSidebarMenuItem
          icon="building"
          iconSize="lg"
          active={activeMenuItem === 'Companies'}
          onClick={() => handleMenuItemClick('Companies')}
        >
          Companies
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="users"
          iconSize="lg"
          active={activeMenuItem === 'Users'}
          onClick={() => handleMenuItemClick('Users')}
        >
          Users
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="file"
          iconType="solid"
          textFontSize="16px"
          iconSize="lg"

          active={activeMenuItem === 'Categories'}
          onClick={() => handleMenuItemClick('Categories')}
        >
          Categories
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="user-secret"
          iconType="solid"
          iconSize="lg"

          textFontSize="16px"
          active={activeMenuItem === 'Admins'}
          onClick={() => handleMenuItemClick('Admins')}
        >
          Admins
        </CDBSidebarMenuItem>
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
