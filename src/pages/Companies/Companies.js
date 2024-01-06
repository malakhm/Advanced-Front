import React from 'react';
import FlipCard from '../../components/Cards/Cards.js';
import "./Companies.css"
import ANavbar from '../../components/ANavbar/ANavbar.js'
import AFooter from '../../components/AFooter/AFooter.js'
const CompaniesPage = () => {
  return (
    <div className='body-container-main-compoenent d-flex flex-column'>
      <ANavbar/>
    <div className='body'>
       <FlipCard />
    </div>

       <AFooter/>
       </div>
  );
};
export default CompaniesPage;
