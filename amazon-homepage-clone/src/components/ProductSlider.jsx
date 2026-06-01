import React, { useRef } from 'react';
import './ProductSlider.css';

function ProductSlider({ data }) {
  const rowRef = useRef(null);

  const slide = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const offset = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      rowRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="productSlider">
      <div className="productSlider_header">
        <h2>{data.title}</h2>
        <a href="#">{data.linkText}</a>
      </div>
      
      <div className="productSlider_wrapper">
        <button className="productSlider_arrow productSlider_arrowLeft" onClick={() => slide('left')}>
          ‹
        </button>
        
        <div className="productSlider_row" ref={rowRef}>
          {data.items.map((imgUrl, index) => (
            <div key={index} className="productSlider_card">
              <img src={imgUrl} alt={`Product Slider Thumbnail ${index}`} />
            </div>
          ))}
        </div>

        <button className="productSlider_arrow productSlider_arrowRight" onClick={() => slide('right')}>
          ›
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;