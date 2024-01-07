import React from "react";
import "./Cards.css";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const FlipCard = () => {
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    const response = await axios.get("http://localhost:5000/api/companies/");

    setCompanies(response.data.data);
  };
  console.log(companies);
  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div className="cards">
      {companies &&
        companies.map((each) => (
          <div className="card-wrapper flip-right">
            <div className="card d-flex flex-column">
              <div className="front-updated-component">
                <img
                  src={each.logo}
                  alt=""
                  className="rounded-circle card-Logo"
                />
              </div>
              <div className="additional-info-main d-flex flex-column">
                <h2> {each.name} </h2>
                <div className="info-spacer d-flex">
                  <div className="icon-for-company-contact-card d-flex">
                    <IoIosLink />
                    <span className="text-muted">{each.website_link}</span>
                  </div>
                  <div className="icon-for-company-contact-card d-flex">
                    <IoMailOutline />
                    <span className="text-muted">{each.email}</span>
                  </div>
                </div>
                <div className="info-spacer d-flex">
                  <div className="icon-for-company-contact-card d-flex">
                    <MdOutlinePlace />
                    <span className="text-muted">{each.location}</span>
                  </div>
            
                  <div className="icon-for-company-contact-card d-flex">
                    <IoCallOutline />
                    <span className="text-muted">{each.phone}</span>
                  </div>
                </div>
                <hr className="hr"></hr>
              </div>
              <Link className="btn btn-blue btnclassname"> Message</Link>

              <div className="back">
                <Slider companyId={each.id} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FlipCard;
