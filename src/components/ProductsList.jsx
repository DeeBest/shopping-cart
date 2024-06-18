import React from 'react';

const ProductsList = ({ products }) => {
  return (
    <div
      className="products-cards-container"
      style={{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>shop</h1>
      {/* {products.map((item) => {
        return (
          <section className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-title-container">
              <p>{item.title}</p>
              <p className="product-price">${item.price}</p>
            </div>
            <button>Add To Cart</button>
          </section>
        );
      })} */}
    </div>
  );
};

export default ProductsList;
