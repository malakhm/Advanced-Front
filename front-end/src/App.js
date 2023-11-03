import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompaniesPage  from './pages/Companies/Companies';
//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Companies" element={<CompaniesPage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
