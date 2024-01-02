import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ALoginPage from "../adminPanel/ALoginPage/ALoginPage.js";
import ASignInPage from "../adminPanel/ASignInPage/ASignInPage.js";
import ASignUpPage from "../adminPanel/ASignUpPage/ASignUpPage.js";
import Test from "../pages/Test.js";

import CLoginPage from "../companyPanel/CLoginPage/CLoginPage.js";
import CSignInPage from "../companyPanel/CSignInPage/CSignInPage.js"
import CSignUpPage from "../companyPanel/CSignUpPage/CSignUpPage.js";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/*Admin-User Routes */}
        <Route path="/getstarted" element={<ALoginPage />} />
        <Route path="/signin" element={<ASignInPage />} />
        <Route path="/signup" element={<ASignUpPage />} />
        <Route path="/test" element={<Test />} />

        {/*Company Routes */}
        <Route path="/getstarted-company" element={<CLoginPage />} />
        <Route path="/signin-company" element={<CSignInPage />} />
        <Route path="/signup-company" element={<CSignUpPage />} />

      </Routes>
    </>
  );
};
export default AppRoutes;
