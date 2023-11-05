import React from 'react'
import HeaderCss from './HomeCategoriesCard.css';
import imagesCategories1 from '../../Photos/categories-1.png'
import imagesCategories2 from '../../Photos/categories-2.png'
import imagesCategories3 from '../../Photos/categories-3.png'
import imagesCategories4 from '../../Photos/categories-4.png'
import imagesCategories5 from '../../Photos/categories-5.png'
import imagesCategories6 from '../../Photos/categories-6.png'



export default function HomeCategoriescard() {
  return (

    <section className='Home-categories'>
        <h1 className='Home-categories-txt'>CATEGORIES</h1>

        <section className='Home-categories-cards'>

          <section className='Home-categories-cards-line1'>

            <section className='Home-categories-card1'>
            <img src={imagesCategories1} alt='image1'/>
            <h1>Bedroom</h1>
            </section>

            <section className='Home-categories-card1 card-down'>
            <img src={imagesCategories2} alt='image1'/>
            <h1>Living room </h1>

            </section>

            <section className='Home-categories-card1 '>
            <img src={imagesCategories3} alt='image1'/>
            <h1>Kitchen</h1>

            </section>

          </section>
          <section className='Home-categories-cards-line2'>

            <section className='Home-categories-card1'>
            <img src={imagesCategories4} alt='image1'/>
            <h1>wood</h1>

              </section>

            <section className='Home-categories-card1 card-down'>
            <img src={imagesCategories5} alt='image1'/>
            <h1>Bathroom</h1>

              </section>

            <section className='Home-categories-card1 '>
            <img src={imagesCategories6} alt='image1'/>
            <h1>Garden</h1>
              </section>
            
          </section>


        </section>


      </section>


  )
}
