import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ANavbar from '../../components/ANavbar/ANavbar.js';
import AFooter from '../../components/AFooter/AFooter.js';

const DesignsClient = () => {
  const location = useLocation();
  const { id, categoryName, images, companyLogo, companyName } = location.state || {};
 
  const fetchLikes = async()=>{

  }
  return (
    <div className='d-flex flex-column'>
      <ANavbar />
      <div className='Designs-main-details-component-h'>
        <div className='more-details-details d-flex flex-column' >
        <h1 className='title-category-name-details-main'>{categoryName}</h1>
        <div className='by-designs-owner-main'>
                <span className='text-muted'>By  :  </span>
                <div>
                  
                 <img className='rounded-circle image-logo-company-designs' width='35px' height='35px' src={companyLogo}/>
                {companyName}<br/>
               
               </div>

               </div>
        </div>
        
        <div className='image-grid'>
          {images.map((image, index) => (
            <div className='grid-item' key={index}>
              <img
                src={image}
                className='single-image-design-details'
                alt={`Design ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <AFooter />
    </div>
  );
};

export default DesignsClient;
