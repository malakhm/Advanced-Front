import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const CompanyMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Companies');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Add logic to handle the click event, e.g., navigate to the corresponding page
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
          onClick={() => handleMenuItemClick('Logout')}
        >
          Logout
        </CDBSidebarMenuItem>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  );
};

export default CompanyMenu;
