import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  const [data, setData] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [companies, setCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://spaceloom.onrender.com/api/categories/");
      if (response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };


  useEffect(() => {
    fetchData();
    // fetchCompanies();
  }, []);

  const onDeleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`https://spaceloom.onrender.com/api/categories/${categoryId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchData();
        } else {
          console.error("Failed to delete category");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestBody = {
      name: categoryName,
      companies: selectedCompanies,
    };
  
    try {
      const response = await fetch("https://spaceloom.onrender.com/api/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(requestBody), 
      });
  
      if (response.ok) {
        setCategoryName("");
        setError("");
        setSelectedCompanies([]);
        fetchData();
      } else {
        const json = await response.json();
        setError(json.message);
      }
    } catch (error) {
      setError("Network error");
    }
  };
  
  return (
    <div>
      <h1 className="admin-h1">Categories</h1>

      <form className="form-adminDashbord" onSubmit={handleSubmit} >
        <label htmlFor="name" className="label">
          Category Name
        </label>
        <input
            className="input"
          type="text"
          id="name"
          required
          onChange={(e) => setCategoryName(e.target.value)}
          value={categoryName}
        />

        <input
          type="submit"
          name="submit"
          value="Add Category"
          className="submit"
        />
      </form>
      <p>{error}</p>
      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            {/* <th>Companies</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data &&
            data.data.length > 0 &&
            data.data.map((category) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                {/* <td>
                  {category.companies.map((company) => `${company.name}, `)}
                </td> */}
                <td>
                  <Link to={`https://spaceloom.onrender.com/api/categories/${category._id}/edit`}>
                    <button className="button">Edit</button>
                  </Link>
                  <button onClick={() => onDeleteCategory(category._id)} className="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
