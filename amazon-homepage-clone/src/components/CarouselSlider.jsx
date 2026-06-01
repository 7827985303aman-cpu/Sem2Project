import React, { useState, useEffect } from 'react';
import './CarouselSlider.css';

function CarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/May26/RSVD/Bergner___IV_3000x1200-1._CB763079678_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78268._CB785061629_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/February/GW/BAU/Legacy/Unrec/5298_Sports_-_BAU_PC_creatives_3000X1200_02._CB787728092_.jpg"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        <button className="carousel_button carousel_buttonLeft" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <img 
          className="carousel_image" 
          src={bannerImages[currentIndex]} 
          alt={`Amazon Banner ${currentIndex + 1}`} 
        />

        <button className="carousel_button carousel_buttonRight" onClick={handleNext}>
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
      <div className="carousel_gradient"></div>
    </div>
  );
}

export default CarouselSlider;