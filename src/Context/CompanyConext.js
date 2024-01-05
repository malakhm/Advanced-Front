import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CompanyContext = createContext(null);

export const CompanyProvider = ({ children }) => {
    const [company, setCompany] = useState(() => {
      // Try to get user from localStorage on initial load
      const storedUser = localStorage.getItem("company");
      return storedUser ? JSON.parse(storedUser) : null;
    });

useEffect(() => {
    // Save user to localStorage whenever it changes
    localStorage.setItem("company", JSON.stringify(company));
  }, [company]);


  const [token, setToken] = useState(localStorage.getItem("token"));

  const fetchData = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <CompanyContext.Provider
      value={{ company, setCompany, token, setToken, fetchData }}
    >
      {children}
    </CompanyContext.Provider>
  );
};