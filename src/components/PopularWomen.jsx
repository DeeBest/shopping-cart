import React from 'react';

const PopularWomen = ({ products }) => {
  const womenClothing = products.filter(
    (product) => product.category === `women's clothing`
  );

  const popularWomen = womenClothing.splice(0, 2);

  return (
    <section className="popular-products-container">
      <h1>Popular In Women</h1>
      <hr />
      <div className="products-cards-container">
        {popularWomen.map((item) => {
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

export default PopularWomen;
