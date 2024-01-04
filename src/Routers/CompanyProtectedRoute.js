import { Navigate, Outlet } from "react-router-dom";
import { CompanyContext } from "../Context/CompanyConext"
import {toast} from 'react-toastify';
import { useContext } from "react";

const ProtectedRoute = () => {
  const {token, company} = useContext(CompanyContext)
    // Check if the user is authenticated
    if (!token || !company) {
      // If not authenticated, redirect to the login page
      toast.warning('you need to be authorized to access!') ;
      return <Navigate to="/signin-company" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };


  

export default ProtectedRoute 
