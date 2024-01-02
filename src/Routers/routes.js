import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ALoginPage from "../adminPanel/ALoginPage/ALoginPage.js";
import ASignInPage from "../adminPanel/ASignInPage/ASignInPage.js";
import ASignUpPage from "../adminPanel/ASignUpPage/ASignUpPage.js";
import Test from "../pages/Test.js";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/getstarted" element={<ALoginPage />} />
        <Route path="/signin" element={<ASignInPage />} />
        <Route path="/signup" element={<ASignUpPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
