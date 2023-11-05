import React from 'react';
import "./Cards.css"
import Slider from "../Slider/Slider.js"
import INFINITELB from "../../Photos/INFINITELB.png"
import ARTSHOC from "../../Photos/ARTSHOC.png"
import FOCDESIGN from "../../Photos/FOCDESIGN.png"
import DESIGNSTATION from "../../Photos/DESIGNSTATION.png"
import Email from "../../Photos/Email.png"
import Gmail from "../../Photos/Gmail.png"
import Location from "../../Photos/Location.png"
import MobileNumber from "../../Photos/MobileNumber.png"
const FlipCard = () => {
    return (
      <div  className="cards">
      <div className="card-wrapper flip-right">
        <div className="card">
          <div className="front">
             <img src={INFINITELB} alt='' className='INFINITE-Logo'/>
               <div className='Info'>
               <img src={Email} alt='' className='Icon1'  /> <h3>www.SpaceLoom.com</h3>
               <img src={Gmail} alt='' className='Icon1'  />   <h3>ex.gamil.com</h3>
               </div>
               <div className='Info2'>
               <img src={Location} alt='' className='Icon2'  />  <h3>Link for Location</h3>
               <img src={MobileNumber} alt='' className='Icon2'  />  <h3>334564351</h3>
               </div>
                
                 <div className='CompanyText'>
                  <h2> @INFINITE DESGIN LB </h2>
                  </div>
          </div>
          <div className="back">
            <Slider />
          </div>
        </div>
      </div>
      <div className="card-wrapper flip-right">
        <div className="card">
          <div className="front">
          <img src={ARTSHOC} alt='' className='INFINITE-Logo'/>
               <div className='Info'>
               <img src={Email} alt='' className='Icon1'  /> <h3>www.gmail.com</h3>
               <img src={Gmail} alt='' className='Icon1'  />   <h3>ex.gamil.com</h3>
               </div>
               <div className='Info2'>
               <img src={Location} alt='' className='Icon2'  />  <h3>Link for Location</h3>
               <img src={MobileNumber} alt='' className='Icon2'  />  <h3>334564351</h3>
               </div>
                
                 <div className='CompanyText'>
                  <h2> @ARTSHOC </h2>
                  </div>
          </div>
          <div className="back">
            <Slider />
          </div>
        </div>
      </div>
      <div className="card-wrapper flip-right">
        <div className="card">
          <div className="front">
          <img src={FOCDESIGN} alt='' className='INFINITE-Logo'/>
               <div className='Info'>
               <img src={Email} alt='' className='Icon1'  /> <h3>www.gmail.com</h3>
               <img src={Gmail} alt='' className='Icon1'  />   <h3>ex.gamil.com</h3>
               </div>
               <div className='Info2'>
               <img src={Location} alt='' className='Icon2'  />  <h3>Link for Location</h3>
               <img src={MobileNumber} alt='' className='Icon2'  />  <h3>334564351</h3>
               </div>
                
                 <div className='CompanyText'>
                  <h2> @FOC DESIGN </h2>
                  </div>
          </div>
          <div className="back">
            <Slider />
          </div>
        </div>
      </div>
      <div className="card-wrapper flip-right">
        <div className="card">
          <div className="front">
          <img src={DESIGNSTATION} alt='' className='INFINITE-Logo'/>
               <div className='Info'>
               <img src={Email} alt='' className='Icon1'  /> <h3>www.gmail.com</h3>
               <img src={Gmail} alt='' className='Icon1'  />   <h3>ex.gamil.com</h3>
               </div>
               <div className='Info2'>
               <img src={Location} alt='' className='Icon2'  />  <h3>Link for Location</h3>
               <img src={MobileNumber} alt='' className='Icon2'  />  <h3>334564351</h3>
               </div>
                
                 <div className='CompanyText'>
                  <h2> @DESIGN STATION </h2>
                  </div>
          </div>
          <div className="back">
            <Slider />
          </div>
        </div>
      </div>
      </div>

    )

}

export default FlipCard