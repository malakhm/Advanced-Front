// import "./Home.css";
import React from 'react';
import Header  from '../../components/header/Header.js';
import imageHeader from '../../Photos/header-1.png';
import HomeCategoriescard from '../../components/homeCategoriesCard/HomeCategoriesCard.js';
import  './home.css';
const Home = () => {
    return (

        <div className="home">
           <Header imageSrc={imageHeader} />
           <HomeCategoriescard/>
        </div>
        
    )
}

export default Home;