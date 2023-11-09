import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminDesign() {
  const [designs, setDesigns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/designs/");
      if (response.ok) {
        const data = await response.json();
        setDesigns(data.data);
      } else {
        console.error("Failed to fetch Designs");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories/");
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await fetch("/api/companies/");
      if (response.ok) {
        const data = await response.json();
        setCompanies(data.data);
      } else {
        console.error("Failed to fetch companies");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchCompanies();
  }, []);

  const onDeleteDesign = async (designId) => {
    if (window.confirm("Are you sure you want to delete this design?")) {
      try {
        const response = await fetch(`/api/designs/${designId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchData();
        } else {
          console.error("Failed to delete design");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryId", selectedCategory);
    formData.append("companyId", selectedCompany);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await fetch("/api/designs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setError("");
        setSelectedCategory("");
        setSelectedCompany("");
        setImages([]);
        fetchData();
      } else {
        const json = await response.json();
        setError(json.error);
      }
    } catch (error) {
      setError("Network error");
    }
  };

  return (
    <div>
      <h1 className="admin-h1">Designs</h1>

      <form
        className="form-adminDashbord"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="category" className="label">
          Select Category
        </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Select a category</option>
          {categories && categories.length > 0 && categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <label htmlFor="company" className="label">
          Select Company
        </label>
        <select
          id="company"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value="">Select a company</option>
          {companies && companies.length > 0 && companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.name}
            </option>
          ))}
        </select>

        <label htmlFor="images" className="label">
          Upload Images
        </label>
        <input 
          type="file"
          id="images"  
          name="images"
          onChange={(e) => setImages([...images, ...e.target.files])}
          multiple
          required
          className="input"
        />

        <input
          type="submit"
          name="submit"
          value="Add Design"
          className="submit"
        />
      </form>
      <p>{error}</p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Company</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {designs && designs.length > 0 && designs.map((design) => (
            <tr key={design._id}>
              <td>{design.categoryId &&design.categoryId.name}</td>
              <td>{design.companyId &&design.companyId.name}</td>
              <td>
              {design && design.images.map((image, index) => (
              <img src={`http://localhost:4000/${image}`} alt={`Design ${index}`} key={index} width="200px"/>
))}


              </td>
              <td>
                <button onClick={() => onDeleteDesign(design._id)}className="button">
                  Delete
                </button>

                <Link to={`/api/design/${design._id}/edit`}>
                    <button className="button">Edit</button>
                  </Link>
                

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDesign;
