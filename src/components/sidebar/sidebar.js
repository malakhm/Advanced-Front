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

import AdminMenu from './AdminMenu';
const Sidebar = ({ children }) => {
  return (
      <CDBSidebar textColor="#0E395A" backgroundColor="#fff" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><img style={{width: "180px"}} src={logo} /></CDBSidebarHeader>
       { children }
        
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


