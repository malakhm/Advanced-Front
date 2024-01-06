import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";
import { toast } from "react-toastify";
import { useContext } from "react";

const AdminProtectedRoute = () => {
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    toast.warning("you need to login !");
    navigate("/signin");
  } else {
    // Check if the user is an admin
    if (!token || user.role !== 'User') {
     
      // If not authenticated, redirect to the login page
        toast.warning("you need to be authorized to access!");
        return <Navigate to="/signin" />;
      }
    }

    // If authenticated, render the child routes
    return <Outlet />;
  }

export default AdminProtectedRoute;
