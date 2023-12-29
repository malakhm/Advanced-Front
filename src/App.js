import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
//pages & components
import CompaniesPage  from './pages/Companies/Companies';
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutUs/About.js'
// import AdminPage from './adminPanel/homeAdmin.js';
// import AdminNavbar from './adminPanel/adminNavbar';
// import EditCompany from './adminPanel/editCompany';
// import AdminCategory from './adminPanel/adminCategory';
// import EditCategory from './adminPanel/editCategory';
import Footer from "./components/Footer/Footer.js"
import Categories from './pages/Categories/Categories.js';
// import AdminDesign from './adminPanel/adminDesign';
// import EditDesign from './adminPanel/editDesign';
// import AdminList from './adminPanel/adminList.js';
// import EditUser from './adminPanel/editUser.js';
// import Loginpage from './adminPanel/Loginpage.js';
import Companies from './pages/Admin/Companies';
import Sidebar from './components/sidebar/sidebar.js';
// ...

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <div className='table-main-component-new d-flex flex-column'>
       <Companies/>
       </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
