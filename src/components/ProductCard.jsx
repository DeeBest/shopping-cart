import React from 'react';

const ProductCard = ({ isHome = false, id, imgUrl, title, price }) => {
  return (
    <section className="product-card" key={id}>
      <div className="product-img-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="item-title-container">
        <p>{title}</p>
        <p className="product-price">${price}</p>
      </div>
      {isHome ? null : <button className="add-to-cart-btn">Add To Cart</button>}
    </section>
  );
};

export default ProductCard;
