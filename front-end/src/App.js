import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Header from './components/header/Header';
import imageHeader from './photos/header-1.png';
import HomeCategoriescard from './components/homeCategoriesCard/HomeCategoriesCard';

//pages & components
import Home from './pages/Home'
import Navbar  from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* <Navbar/> */}
        <div className="pages">
          <Routes>
            <Route
              path="/"
              // element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Header imageSrc={imageHeader} />
      <HomeCategoriescard/>
      
    </div>
  );
}

export default App;
