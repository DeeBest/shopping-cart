import React from 'react';

const PopularMen = ({ products }) => {
  const menClothing = products.filter(
    (product) => product.category === `men's clothing`
  );

  const popularMen = menClothing.splice(0, 2);

  return (
    <section className="popular-products-container">
      <h1>Popular In Men</h1>
      <hr />
      <div className="products-cards-container">
        {popularMen.map((item) => {
          return (
            <section className="product-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-title-container">
                <p>{item.title}</p>
                <p className="product-price">${item.price}</p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default PopularMen;
