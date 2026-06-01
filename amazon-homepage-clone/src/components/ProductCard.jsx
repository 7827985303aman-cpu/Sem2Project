import React from 'react';
import './ProductCard.css';

function ProductCard({ data }) {
  if (data.type === 'grid') {
    return (
      <div className="productCard">
        <h2 className="productCard_title">{data.title}</h2>
        <div className="productCard_grid">
          {data.items.map((item, index) => (
            <div key={index} className="productCard_gridItem">
              <div className="productCard_imageWrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <a href="#" className="productCard_link">{data.linkText}</a>
      </div>
    );
  }

  if (data.type === 'single') {
    return (
      <div className="productCard">
        <h2 className="productCard_title">{data.title}</h2>
        <div className="productCard_singleContainer">
          <img className="productCard_singleImage" src={data.image} alt={data.productName} />
          {data.productName && <p className="productCard_productName">{data.productName}</p>}
          {data.price && (
            <div className="productCard_priceInfo">
              <span className="productCard_priceActual">₹{data.price}</span>
              <span className="productCard_priceMRP">M.R.P: <s>₹{data.mrp}</s></span>
            </div>
          )}
        </div>
        <a href="#" className="productCard_link">{data.linkText}</a>
      </div>
    );
  }

  return null;
}

export default ProductCard;