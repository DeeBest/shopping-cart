import React from 'react';

const PopularElectronics = ({ products }) => {
  const electronics = products.filter(
    (product) => product.category === `electronics`
  );

  const PopularElectronics = electronics.splice(0, 2);

  return (
    <section className="popular-products-container">
      <h1>Popular In Electronics</h1>
      <hr />
      <div className="products-cards-container">
        {PopularElectronics.map((item) => {
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

export default PopularElectronics;
