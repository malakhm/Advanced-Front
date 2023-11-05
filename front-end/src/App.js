import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages & components
import CompaniesPage  from './pages/Companies/Companies';
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutUs/About.js'
import Header  from './components/header/Header.js';
import imageHeader from './photos/header-1.png';
import HomeCategoriescard from './components/homeCategoriesCard/HomeCategoriesCard.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Companies" element={<CompaniesPage />} />
            <Route path="/About" element={<AboutPage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
      

    </div>


  );
}

export default App;
