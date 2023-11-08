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
          <Route path="/About" element={<AboutPage />} />
          <Route path="/admin/" element={<AdminPage />} />
          <Route path="/admin/Categories" element={<AdminCategory />} />


          <Route path="/api/companies/:companyId/edit" element={<EditCompany />} />
          <Route path="/api/categories/:categoryId/edit" element={<EditCategory />} />



        </Routes>
        
       
      </div>
    </>
  );
}

export default App;
