import Logo from "../../Photos/Logo.png";
import "./ASidebar.css";

import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarFooter,
} from "cdbreact";

const ASidebar = ({ children }) => {
  return (
    <CDBSidebar className="asidebar" textColor="#333" backgroundColor="white">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div
          className="container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={Logo} alt="" style={{ width: "180px" }} />
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>{children}</CDBSidebarContent>

      <CDBSidebarFooter
        className="asidebar-footer"
        style={{ textAlign: "center" }}
      >
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px", fontSize:"11px" }}>
          © 2023 Spaceloom
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default ASidebar;
