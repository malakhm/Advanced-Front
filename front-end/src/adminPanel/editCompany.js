import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCompany() {
  const { companyId } = useParams();
  const [companyName, setCompanyName] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the company data
      try {
        const response = await fetch(`/api/companies/${companyId}`);
        if (response.ok) {
          const data = await response.json();
          setCompanyName(data.data.name);
          setCompanyTelephone(data.data.telephone);
          setCompanyLocation(data.data.location);
          setCompanyLink(data.data.website_link);
          setCompanyEmail(data.data.email);
          setSelectedCategories(data.data.categories.map((category) => category._id));
        } else {
          console.error("Failed to fetch company data");
        }
      } catch (error) {
        console.error("Network error:", error);
      }

      // Fetch all categories
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data = await response.json();
          setAllCategories(data.data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchData();
  }, [companyId]);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setCompanyLogo(uploadedFile);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

   
    
      const updatedCompany = {
        name: companyName,
        telephone: companyTelephone,
        location: companyLocation,
        website_link: companyLink,
        email: companyEmail,
        logo: companyLogo,
        categories: selectedCategories,
      };
    
      try {
        const formData = new FormData();
        for (const key in updatedCompany) {
          if (Array.isArray(updatedCompany[key])) {
            for (const value of updatedCompany[key]) {
              formData.append(key, value);
            }
          } else {
            formData.append(key, updatedCompany[key]);
          }
        }
    
        const response = await fetch(`/api/companies/${companyId}`, {
          method: "PATCH",
          body: formData,
        });
    
        if (response.ok) {
          setError("Company updated successfully");
          // Automatically go back after a successful update
          window.history.back();
        } else {
          console.error("Failed to update company");
          setError("Failed to update company");
        }
      } catch (error) {
        console.error("Network error:", error);
        setError("Network error");
      }
    };
    

  return (
    <div>
      <h1 className="admin-h1">Edit Company</h1>
      <form onSubmit={handleUpdate} encType="multipart/form-data" className="form-adminDashbord">
        <label htmlFor="name" className="label">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          className="input"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />

        <label htmlFor="telephone" className="label">
          Company Telephone
        </label>
        <input
          className="input"
          type="text"
          id="telephone"
          required
          onChange={(e) => setCompanyTelephone(e.target.value)}
          value={companyTelephone}
        />

        <label htmlFor="location" className="label">
          Company Location
        </label>
        <input
          className="input"
          type="text"
          id="location"
          onChange={(e) => setCompanyLocation(e.target.value)}
          value={companyLocation}
        />

        <label htmlFor="website_link" className="label">
          Website link
        </label>
        <input
          className="input"
          type="text"
          id="website_link"
          onChange={(e) => setCompanyLink(e.target.value)}
          value={companyLink}
        />

        <label htmlFor="email" className="label">
          Company Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          onChange={(e) => setCompanyEmail(e.target.value)}
          value={companyEmail}
        />

        <label htmlFor="logo" className="label">
          Logo
        </label>
        <input type="file" id="logo" name="logo" onChange={handleFileChange} className="input" />

        <label htmlFor="categories" className="label">
          Categories
        </label>
        <select
          className="category"
          id="categories"
          multiple
          onChange={(e) => {
            const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
            setSelectedCategories(selectedOptions);
          }}
          value={selectedCategories}
        >
          {allCategories &&
            allCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>

        <input type="submit" value="Update" className="submit" />
        <p>{error}</p>
      </form>
    </div>
  );
}

export default EditCompany;
