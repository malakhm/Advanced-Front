import React from 'react';
import "./Cards.css"
import { useEffect, useState } from 'react';
import Slider from "../Slider/Slider.js"
import Email from "../../Photos/Email.png"
import Gmail from "../../Photos/Gmail.png"
import Location from "../../Photos/Location.png"
import MobileNumber from "../../Photos/MobileNumber.png"
const FlipCard = () => {
  const [companies, setcompanies] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch("https://spaceloom.onrender.com/api/companies")
      const json = await response.json()
      if (response.ok) {
        setcompanies(json.data)
      }
    }
    console.log(companies)
    fetchCompanies();
  }, [])
  return (

    <div className="cards">

      {companies &&
        companies.map(each => (
          <div className="card-wrapper flip-right">
            <div className="card">
              <div className="front">
                <img src={each.logo} alt='' className='card-Logo' />
                <div className='Info'>
                  <img src={Email} alt='' className='Icon1' /> <h3>{each.website_link}</h3>
                  <img src={Gmail} alt='' className='Icon1' />   <h3>{each.email}</h3>
                </div>
                <div className='Info2'>
                  <img src={Location} alt='' className='Icon2' />  <h3>{each.location}</h3>
                  <img src={MobileNumber} alt='' className='Icon2' />  <h3>{each.telephone}</h3>
                </div>

                <div className='CompanyText'>
                  <h2> @{each.name} </h2>
                </div>
              </div>
              <div className="back">
                <Slider companyId={each._id} />
              </div>
            </div>
          </div>
        ))}
    </div>

  )

}

export default FlipCard