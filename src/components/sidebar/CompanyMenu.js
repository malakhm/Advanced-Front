import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const CompanyMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Companies');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Add logic to handle the click event, e.g., navigate to the corresponding page
  };
  //function that logs the user out
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/signin-company");
    localStorage.clear();
    toast.success("Logged out successfully !");
  };


  return (
    <CDBSidebarContent>
      <CDBSidebarMenu>

        <CDBSidebarMenuItem
          icon="user-circle"
          iconSize="lg"
          active={activeMenuItem === 'Companies'}
          onClick={() => handleMenuItemClick('Companies')}
        >
          Account
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="file"
          iconSize="lg"
          active={activeMenuItem === 'Users'}
          onClick={() => handleMenuItemClick('Users')}
        >
          Categories
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="seedling"
          iconType="solid"
          textFontSize="16px"
          iconSize="lg"

          active={activeMenuItem === 'Categories'}
          onClick={() => handleMenuItemClick('Categories')}
        >
          Designs
        </CDBSidebarMenuItem>
        <CDBSidebarMenuItem
          icon="comment"
          iconType="solid"
          iconSize="lg"

          textFontSize="16px"
          active={activeMenuItem === 'Admins'}
          onClick={() => handleMenuItemClick('Admins')}
        >
          Chat
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

export default CompanyMenu;
