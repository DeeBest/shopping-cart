/* eslint-disable react/prop-types */

import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductCard = ({ isHome = false, id, imgUrl, title, price, product }) => {
  const { productsInCart, setCartItemsCounter, setProductsInCart } =
    useOutletContext();
  const [isAdded, setIsAdded] = useState(false);

  // Check if the product is already in the cart when the component mounts
  useEffect(() => {
    const isProductInCart = productsInCart.some(
      (cartItem) => cartItem.id === id
    );
    setIsAdded(isProductInCart);
  }, [productsInCart, id]);

  const addProductToCart = (item) => {
    setProductsInCart((prevProducts) => {
      const updatedProducts = [...prevProducts, item];
      setCartItemsCounter(updatedProducts.length);
      setIsAdded(true); // Set the state to true once the item is added
      return updatedProducts;
    });
  };

  return (
    <section className="product-card" key={id}>
      <div className="product-img-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="item-title-container">
        <p>{title}</p>
        <div className="price-quantity-container">
          <p className="product-price">${price}</p>
        </div>
      </div>
      {isHome ? null : (
        <button
          onClick={() => addProductToCart(product)}
          className="add-to-cart-btn"
          disabled={isAdded} // Disable the button if the item is already added
        >
          {isAdded ? 'Item Already Added' : 'Add To Cart'}
        </button>
      )}
    </section>
  );
};

export default ProductCard;
