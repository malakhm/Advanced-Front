import React from 'react';
import Header  from '../../components/header/Header.js';
import imageHeader from '../../Photos/header-1.png';
import HomeCategoriescard from '../../components/homeCategoriesCard/HomeCategoriesCard.js';
import  './home.css';
import Slider from '../../components/Slider/Slider.js';

const Home = () => {
    return (

        <div className="home">
           <Header imageSrc={imageHeader} />
           <HomeCategoriescard/>
           
           <section className='home-slider'>
           <p>Recommended design </p>
            <Slider />
           </section>
           <section className='home-comments'>
                <section className='comments-left'>
                    <p className='review'>review</p>
                    <p className='comment-description'><strong> Over 100 designs completed for happy clients.</strong></p>
                </section>

                <section className='comments-right'>
                    <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of color in this design is amazing! I'm getting so much inspiration.</p>
                        </section>
                        <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of color in this design is amazing! I'm getting so much inspiration.</p>
                        </section>
                        <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of color in this design is amazing! I'm getting so much inspiration.</p>
                        </section>
                        <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of color in this design is amazing! I'm getting so much inspiration.</p>
                        </section>
                        <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of fdpfksfosfdk  fssfkfpsd scolor in this design is amazing! I'm getting so much inspiration.</p>
                        </section>

                        <section className='comments-item'> 
                        <h1 className='name-comments'>sara_designer</h1>
                        <p className='comment-itself'>The use of color in this design is amazing! I'm getting so much inspiration.</p>
                        </section>

                        
                                                
                    
                    

                </section>

            </section> 
        </div>
        
    )
}

export default Home;