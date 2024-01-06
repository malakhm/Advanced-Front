import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ALoginPage from "../adminPanel/ALoginPage/ALoginPage.js";
import ASignInPage from "../adminPanel/ASignInPage/ASignInPage.js";
import ASignUpPage from "../adminPanel/ASignUpPage/ASignUpPage.js";
import CompanyMenu from "../components/sidebar/CompanyMenu.js";
import Sidebar from "../components/sidebar/sidebar.js";
import Companies from "../pages/Admin/Companies.js";
import Popup1 from "../pages/Admin/Categories.js";
import EditForms from "../pages/Admin/editForm.js";
import AddForm from "../pages/Admin/addForm.js";
import CLoginPage from "../companyPanel/CLoginPage/CLoginPage.js";
import CSignInPage from "../companyPanel/CSignInPage/CSignInPage.js";
import CSignUpPage from "../companyPanel/CSignUpPage/CSignUpPage.js";
import Test from "../pages/Test.js";
import AdminProtectedRoute from "./AdminProtectedRoutes.js";
import ContactUs from "../pages/ContactUs/ContactUs.js";
import Users from "../pages/Admin/Users.js";
import EditUser from "../pages/Admin/editUser.js";
import AAboutUs from "../pages/AAboutUs/AAboutUs.js";
import AHome from "../pages/AHome/AHome.js";
import AddUser from "../pages/Admin/addUser.js";
import Categories from "../pages/Admin/Categories.js";
import EditCategory from "../pages/Admin/editCategory.js";
import Account from "../pages/Company/Account.js";
import EditAccount from "../pages/Company/EditAccount.js";
import CategoriesCompany from "../pages/Company/Categories.js";
import EditCategoryCompany from "../pages/Company/editCategory.js";
import AddCategory from "../pages/Company/AddCategory.js";
import DesignsCompany from "../pages/Company/Designs.js";
import AddDesign from "../pages/Company/AddDesign.js";
import EditDesignCompany from "../pages/Company/EditDesign.js";
import EditUserProfile from "../pages/UserProfile/EditUserProfile.js";
import UserProfile from "../pages/UserProfile/UserProfile.js";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/test" element={<Test/>}/> */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/" element={<Companies />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/add-company" element={<AddForm />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/edit-company" element={<EditForms />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/getstarted" element={<ALoginPage />} />
        <Route path="/signin" element={<ASignInPage />} />
        <Route path="/signup" element={<ASignUpPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/edit-user-profile" element={<EditUserProfile />} />
        {/*Company*/}
        <Route path="/getstarted-company" element={<CLoginPage />} />
        <Route path="/signin-company" element={<CSignInPage />} />
        <Route path="/signup-company" element={<CSignUpPage />} />
        <Route path="/edit-account" element={<EditAccount />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/edit-category-company"
          element={<EditCategoryCompany />}
        />
        <Route path="add-category" element={<AddCategory />} />
        <Route path="/mydesigns" element={<DesignsCompany />} />
        <Route path="/add-design" element={<AddDesign />} />
        <Route path="/edit-mydesign" element={<EditDesignCompany />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mycategories" element={<CategoriesCompany />} />
        <Route path="/about" element={<AAboutUs />} />
        <Route path="/home" element={<AHome />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
