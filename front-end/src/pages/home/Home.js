import React from 'react';
import Header from '../../components/header/Header.js';
import imageHeader from '../../Photos/header-1.png';
import HomeCategoriescard from '../../components/homeCategoriesCard/HomeCategoriesCard.js';
import './home.css';
import Slider from '../../components/Slider/Slider.js';
import { useEffect, useState } from 'react';
const Home = () => {
    const [feedbacks, setfeedbacks] = useState([])

    useEffect(() => {
        const fetchfeedbacks = async () => {
            const response = await fetch("https://spaceloom.onrender.com/api/feedbacks/")
            console.log(response)
            const json = await response.json()
            if (response.ok) {
                setfeedbacks(json.data)
            }
        }
        console.log(feedbacks)
        fetchfeedbacks();
    }, [])
    return (
        <div className="home">
            <Header imageSrc={imageHeader} />
            <HomeCategoriescard />
            <section className='home-slider'>
                <p>Recommended design </p>
                <Slider companyId={'654cb02ad922370459ecb1d4'} />
            </section>
            <section className='home-comments'>
                <section className='comments-left'>
                    <p className='review'>review</p>
                    <p className='comment-description'><strong> Over 100 desyigns completed for happy clients.</strong></p>
                </section>

                <section className='comments-right'>
  {feedbacks &&
    feedbacks.map((each, index) => (
      <div className='comments-item' key={index}>
        <h1 className='name-comments'>{each.first_name} {each.last_name}</h1>
        <p className='comment-itself'>{each.content}</p>
      </div>
    ))}
</section>

                   
            </section>
        </div>

    )
}
export default Home;