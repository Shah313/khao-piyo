import React from 'react'

import './HeroSection.css'

import { Link } from 'react-router-dom';




import img1 from '../../assets/home-img-1.png';




const HeroSection = () => {
  return (
    <section className="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <div className="content">
              <span>order online</span>
              <h3>Delicious Foods </h3>
              <Link to="/menu" className="btn">see menus</Link>
            </div>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div>
         
          </div>
        </div>
        
      
    </section>
  );
}

export default HeroSection;