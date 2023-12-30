import React from 'react';
import logo from '../../Photos/Logo.png';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,

} from 'cdbreact';

const Sidebar = () => {
  return (
      <CDBSidebar textColor="#0E395A" backgroundColor="#fff" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><img style={{width: "180px"}} src={logo} /></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" iconSize="lg">
              Dashboard
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note" iconSize="sm">
              Components
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid" textFontSize="14px">
              Sales
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="gamepad" iconType="solid" textFontSize="14px">
              Games
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  )
};

export default Sidebar;