import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function EditCategory() {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the category data
      try {
        const response = await fetch(`https://spaceloom.onrender.com/api/categories/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryName(data.data.name);
          setSelectedCompanies(data.data.companies.map(company => company._id));
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Network error:", error);
      }

    };
    fetchData();
  }, [categoryId]);

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedCategory = {
      name: categoryName,
      companies: selectedCompanies,
    };

    try {
      const response = await fetch(`https://spaceloom.onrender.com/api/categories/${categoryId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });

      if (response.ok) {
        setError("Category updated successfully");
        window.history.back();
      } else {
        console.error("Failed to update category");
        setError("Failed to update category");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error");
    }
  };

  return (
    <div>
      <h1 className="admin-h1">Edit Category</h1>
      <form onSubmit={handleUpdate} className="form-adminDashbord">
        <label htmlFor="name" className="label"> Category Name</label>
        <input
          className="input"
          type="text"
          id="name"
          required
          onChange={(e) => setCategoryName(e.target.value)}
          value={categoryName}
        />

        <input  type="submit" className="submit" value="update category"/> 
        <p>{error}</p>
      </form>
    </div>
  );
}

export default EditCategory;
