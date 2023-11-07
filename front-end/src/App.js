import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages & components
import CompaniesPage  from './pages/Companies/Companies';
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutUs/About.js'

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
