import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditDesign() {
  const { designId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://spaceloom.onrender.com/api/designs/${designId}`);
        if (response.ok) {
          const data = await response.json();
          setSelectedCategory(data.data.categoryId._id);
          setSelectedCompany(data.data.companyId._id);
        } else {
          console.error("Failed to fetch design data");
        }
      } catch (error) {
        console.error("Network error:", error);
      }

      // Fetch all categories
      try {
        const response = await fetch("https://spaceloom.onrender.com/api/categories");
        if (response.ok) {
          const data = await response.json();
          setAllCategories(data.data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Network error:", error);
      }

      // Fetch all companies
      try {
        const response = await fetch("https://spaceloom.onrender.com/api/companies");
        if (response.ok) {
          const data = await response.json();
          setAllCompanies(data.data);
        } else {
          console.error("Failed to fetch companies");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchData();
  }, [designId]);

  const handleFileChange = (e) => {
    const uploadedFiles = e.target.files;
    setImages(uploadedFiles);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedDesign = {
      categoryId: selectedCategory,
      companyId: selectedCompany,
      images,
    };

    try {
      const formData = new FormData();
      for (const key in updatedDesign) {
        if (Array.isArray(updatedDesign[key])) {
          for (const value of updatedDesign[key]) {
            formData.append(key, value);
          }
        } else {
          formData.append(key, updatedDesign[key]);
        }
      }

      const response = await fetch(`https://spaceloom.onrender.com/api/designs/${designId}`, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        setError("Design updated successfully");
        window.history.back();
      } else {
        console.error("Failed to update design");
        setError("Failed to update design");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error");
    }
  };

  return (
    <div>
      <h1 className="admin-h1">Edit Design</h1>
      <form
        onSubmit={handleUpdate}
        encType="multipart/form-data"
        className="form-adminDashbord"
      >
        <label htmlFor="category" className="label">
          Select Category
        </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {allCategories &&
            allCategories.map((category) => (
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
          {allCompanies &&
            allCompanies.map((company) => (
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
          onChange={handleFileChange}
          multiple
          className="input"
        />

        <input type="submit" value="Update" className="submit" />
        <p>{error}</p>
      </form>
    </div>
  );
}

export default EditDesign;
