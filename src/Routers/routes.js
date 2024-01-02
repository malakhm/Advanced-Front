import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ALoginPage from "../adminPanel/ALoginPage/ALoginPage.js";
import ASignInPage from "../adminPanel/ASignInPage/ASignInPage.js";
import ASignUpPage from "../adminPanel/ASignUpPage/ASignUpPage.js";
import CompanyMenu from '../components/sidebar/CompanyMenu.js'
import Sidebar from "../components/sidebar/sidebar.js";
import Companies from '../pages/Admin/Companies.js'
import Popup1 from '../pages/Admin/Categories.js'
import EditForms from "../pages/Admin/editForm.js";
import AddForm from "../pages/Admin/addForm.js";
import CLoginPage from "../companyPanel/CLoginPage/CLoginPage.js"
import CSignInPage from "../companyPanel/CSignInPage/CSignInPage.js"
import CSignUpPage from "../companyPanel/CSignUpPage/CSignUpPage.js";
const AppRoutes = () => {
  return (
    <>
    <Sidebar><CompanyMenu /></Sidebar>
      <Routes>
     
        <Route path="/" element={<Companies />} />
        <Route path="/add-company" element={<AddForm />} />
        <Route path="/edit-company" element={<EditForms />}/>
        <Route path="/getstarted" element={<ALoginPage />} />
        <Route path="/signin" element={<ASignInPage />} />
        <Route path="/signup" element={<ASignUpPage />} />
        {/*Company*/ }
        <Route path="/getstarted-company" element={<CLoginPage />} />
        <Route path="/signin-company" element={<CSignInPage />} />
        <Route path="/signup-company" element={<CSignUpPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
