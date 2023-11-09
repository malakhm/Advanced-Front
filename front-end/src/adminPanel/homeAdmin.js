import React, { useEffect, useState } from "react";
import { Link,Route } from "react-router-dom";
import "./styleadmin.css"

function AdminPanel() {
  const [data, setData] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);


  const [error, setError] = useState("");

  


  const fetchData = async () => {
    const response = await fetch("/api/companies/");
    const json = await response.json();

    if (response.ok) {
      setData(json);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);
  console.log(categories);
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setCompanyLogo(uploadedFile);
  };

  const onDeleteCompany = async (companyId) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      try {
        const response = await fetch(`/api/companies/${companyId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchData();
        } else {
          console.error("Failed to delete company");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    selectedCategories.forEach((category) => {
      formData.append("categories[]", category);
    });
    formData.append("name", companyName);
    formData.append("telephone", companyTelephone);
    formData.append("location", companyLocation);
    formData.append("website_link", companyLink);
    formData.append("email", companyEmail);

    formData.append("logo", companyLogo);

    try {
      const response = await fetch("/api/companies/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setCompanyName("");
        setCompanyTelephone("");
        setCompanyLocation("");
        setCompanyLink("");
        setCompanyEmail("");
        setCompanyLogo(null);
        setError("");
        setSelectedCategories([]);
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
      <h1 className="admin-h1">Company</h1>

      <form
        className="form-adminDashbord"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="name"className="label">Company Name</label>
        <input
          className="input"
          type="text"
          id="name"
          required
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />

        <label htmlFor="telephone" className="label">Company telephone</label>
        <input
          className="input"
          type="text"
          id="telephone"
          required
          onChange={(e) => setCompanyTelephone(e.target.value)}
          value={companyTelephone}
        />

        <label htmlFor="location" className="label">Company location</label>
        <input
          className="input"
          type="text"
          id="location"
          required
          onChange={(e) => setCompanyLocation(e.target.value)}
          value={companyLocation}
        />

        <label htmlFor="website_link" className="label">Website link</label>
        <input
        className="input"
          type="text"
          id="website_link"
          required
          onChange={(e) => setCompanyLink(e.target.value)}
          value={companyLink}
        />

        <label htmlFor="email"className="label">Company Email</label>

        <input
        className="input"
          type="email"
          id="email"
          required
          onChange={(e) => setCompanyEmail(e.target.value)}
          value={companyEmail}
        />
        <label htmlFor="logo" className="label">logo</label>
        <input
          type="file"
          id="logo"
          name="logo"
          onChange={handleFileChange}
          required
          className="input"
        />

        <label htmlFor="categories" className="label">Categories</label>
        <select
        className="category"
          id="categories"
          multiple
          onChange={(e) => {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            setSelectedCategories(selectedOptions);
          }}
          value={selectedCategories}
        >
          {categories &&
            categories.data.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>

        <input
        
          type="submit"
          name="submit"
          value="Add Company"
          className="submit"
        />
      </form>
      <p>{error}</p>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Telephone</th>
            <th>Company Location</th>
            <th>Website Link</th>
            <th>Email</th>
            <th>Company Logo</th>
            <th>categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data &&
            data.data.length > 0 &&
            data.data.map((company) => (
              <tr key={company._id}>
                <td>{company.name}</td>
                <td>{company.telephone}</td>
                <td>{company.location}</td>
                <td>{company.website_link}</td>
                <td>{company.email}</td>
                <td>
                  <img src={company.logo} width="100px" alt={company.name} />
                </td>
                <td>{company.categories.map((category)=>`${(category.name)} ,`)}</td>
                <td>
                
                <Link to={`/api/companies/${company._id}/edit`}>
                 <button className="button">Edit</button>
                 </Link>
                  
                  <button onClick={() => onDeleteCompany(company._id)} className="button">
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
