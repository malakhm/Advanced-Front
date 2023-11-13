import React, { useEffect, useState } from 'react';
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [designs, setDesigns] = useState([]);
  const [Filterdesigns, setFilterDesigns] = useState([]);
  const [filterCat, setFilterCat] = useState('all');

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://spaceloom.onrender.com/api/categories/');
      const jsonCategories = await response.json();
      if (response.status === 200) {
        setCategories(jsonCategories.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchDesign = async () => {
    try {
      const response = await fetch('https://spaceloom.onrender.com/api/designs');
      const jsonDesigns = await response.json();
      if (response.status === 200) {
        setDesigns(jsonDesigns.data);
        setFilterDesigns(jsonDesigns.data);
      }
    } catch (error) {
      console.error('Error fetching designs:', error);
    }
  };

  const FilterDesignByCat = ()=>{
    if(filterCat === 'all' ){
      setFilterDesigns(designs)
    }
    else{
      var filterDesign = designs.filter(cat => cat.categoryId && cat.categoryId._id == filterCat)

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
    <div>

      <header className="min-Header">
        <div className="categories_Buttons">
          <button id="btn" type="button" onClick={() => setFilterCat('all')}>
            ALL
          </button>

          {categories && categories.map(category=>(
             <button key={category._id} onClick={() => setFilterCat(category._id)}>
                {category.name}
            </button>
          ))
          
          }
        </div>
      </header>
      <div className="category-container">
        <div className="image-container">
          <div className="image-row">
            {Filterdesigns && Filterdesigns.map(each=>(
              <img src={`https://spaceloom.onrender.com/${design.images}`} alt="Kitchen 1" className="image" />
            ))}
          </div>
        </div>
      </div> 
    </div>
  );

    
  
}

export default Categories;