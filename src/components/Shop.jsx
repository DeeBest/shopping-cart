import React from 'react';
import ProductsList from './ProductsList';

const Shop = ({ products }) => {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <h1>Shop Now</h1>
        <hr />
        <ProductsList products={products} />
      </div>
    </main>
  );
};

export default Shop;
