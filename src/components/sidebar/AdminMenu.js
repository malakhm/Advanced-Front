import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const AdminMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Companies');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Add logic to handle the click event, e.g., navigate to the corresponding page
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
          onClick={() => handleMenuItemClick('Logout')}
        >
          Logout
        </CDBSidebarMenuItem>
      </CDBSidebarMenu>
    </CDBSidebarContent>
  );
};

export default AdminMenu;
