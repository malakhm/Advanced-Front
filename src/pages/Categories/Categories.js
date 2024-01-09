import React, { useEffect, useState } from 'react';
import "./Categories.css";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthContext.js';
import { useContext } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Categorie = () => {
  const [categories, setCategories] = useState([]);
  const [designs, setDesigns] = useState([]);
  const [Filterdesigns, setFilterDesigns] = useState([]);
  const [filterCat, setFilterCat] = useState('all');
  const { user } = useContext(AuthContext)
  const handlelike = async(id)=>{
    try {
      const response = await axios.post(`https://spaceloomm.onrender.com/api/favorites`,{
      UserId:user.id,
      DesignId:id
    })
    if(response.status === 200 || response.status === 201){
      toast.success('Success')
    }
    } catch (error) {
      console.log(error)
      
    } 
  }
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://spaceloomm.onrender.com/api/categories');
      
      if (response.status === 200) {
        setCategories(response.data.data);

      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchDesign = async () => {
    try {
      const response = await axios.get('https://spaceloomm.onrender.com/api/designs/');
     
      if (response.status === 200) {
        setDesigns(response.data.data);
        setFilterDesigns(response.data.data);
      }
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching designs:', error);
    }
  };

  const FilterDesignByCat = ()=>{
    if(filterCat === 'all' ){
      setFilterDesigns(designs)
    }
    else{
      var filterDesign = designs.filter(cat => cat.CategoryId && cat.Category.id == filterCat)

      setFilterDesigns(filterDesign)
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchDesign();
  }, []);

  useEffect(() => {
    FilterDesignByCat();
  }, [filterCat]);

  return (
    <div className='d-flex flex-column'><ANavbar/>
    <div>

      <header className="min-Header">
        <div className="categories_Buttons">
          <button id="btn" type="button" onClick={() => setFilterCat('all')}>
            ALL
          </button>

          {categories && categories.map(category=>(
             <button key={category.id} onClick={() => setFilterCat(category.id)}>
                {category.name}
            </button>
          ))
          
          }
        </div>
      </header>
      <div className="category-container">
        <div className="image-container">
        
          <div className="image-row">
            
            {Filterdesigns.length>0?
            Filterdesigns && Filterdesigns.map(each=>(
              <div className='designs-main-component-div d-flex flex-column'>
                <FaHeart onClick={()=>handlelike(each.id)} className='d-flex '/>
              <Link to='/details' 
                  state={{id:each.id,
                          images:each.images,
                          categoryName:each.Category.name,
                          companyLogo:each.Company.logo,
                          companyName:each.Company.name}}>
              <img src={each.images[0]} alt="Kitchen 1" className="image" /> </Link>
              <hr className='hr'/>
              <div className='by-designs-owner-main'>
                <span className='text-muted'>By  :  </span>
                <div>
                  
                 <img className='rounded-circle image-logo-company-designs' width='35px' height='35px' src={each.Company.logo}/>
                {each.Company.name}<br/>
               </div>
              

               </div>
               
              </div>
            ))
          :
          <p>No Data To Display</p>}
          </div>
        </div>
      </div> 
    </div>
    <AFooter/>
    </div>
  );

    
  
}

export default Categorie;