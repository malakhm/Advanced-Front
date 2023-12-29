// Import necessary modules
import React from "react";
import { CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import "./ACompanySidebar.css"

// Define the ACompanySidebar component
const ACompanySidebar = () => {
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Handle logout function
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/user/login");
    localStorage.clear();
  };

  return (
    <div className="Acontainter">
      <CDBSidebarMenu className="Acomponent">
        {/* NavLink for the "Profile" menu item */}
        <NavLink exact to="/api/company/account" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user-circle" className="menu-list-item-color">
            Account
          </CDBSidebarMenuItem>
        </NavLink>

        {/* NavLink for the "Category" menu item */}
        <NavLink exact to="/category" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="seedling" className="menu-list-item-color">
            Category
          </CDBSidebarMenuItem>
        </NavLink>

        {/* NavLink for the "Design" menu item */}
        <NavLink exact to="/design" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="bell" className="menu-list-item-color">
            Design
          </CDBSidebarMenuItem>
        </NavLink>

        {/* NavLink for the "Logout" menu item */}
        <NavLink exact to="/user/login" activeClassName="activeClicked">
          <CDBSidebarMenuItem
            icon="sign-out-alt"
            className="menu-list-item-color"
            onClick={handleLogout}
          >
            Logout
          </CDBSidebarMenuItem>
        </NavLink>
      </CDBSidebarMenu>


      <div className="Acomponent">
        hi
      </div>
    </div>
  );
};

// Export the component
export default ACompanySidebar;
