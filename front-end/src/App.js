import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
//pages & components
import CompaniesPage  from './pages/Companies/Companies';
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutUs/About.js'
import AdminPage from './adminPanel/homeAdmin.js';
import AdminNavbar from './adminPanel/adminNavbar';
import EditCompany from './adminPanel/editCompany';
import AdminCategory from './adminPanel/adminCategory';
import EditCategory from './adminPanel/editCategory';
import Footer from "./components/Footer/Footer.js"
import Categories from './pages/Categories/Categories.js';
import AdminDesign from './adminPanel/adminDesign';
import EditDesign from './adminPanel/editDesign';
import AdminList from './adminPanel/adminList.js';
import EditUser from './adminPanel/editUser.js';
import Loginpage from './adminPanel/Loginpage.js';

// ...

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin')||location.pathname.startsWith('/api');

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Companies" element={<CompaniesPage />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/admin/" element={<AdminPage />} />
          <Route path="/admin/Categories" element={<AdminCategory />} />
          <Route path="/admin/Designs" element={<AdminDesign />} />
          <Route path="/admin/users" element={<AdminList />} />




          <Route path="/api/companies/:companyId/edit" element={<EditCompany />} />
          <Route path="/api/categories/:categoryId/edit" element={<EditCategory />} />
          <Route path="/api/design/:designId/edit" element={<EditDesign />} />
          <Route path="/api/users/:userId/edit" element={<EditUser />} />





        </Routes>
        <Footer/>
       
      </div>
    </>
  );
}

export default App;
