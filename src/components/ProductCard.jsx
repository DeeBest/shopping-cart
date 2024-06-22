/* eslint-disable react/prop-types */

import { useOutletContext } from 'react-router-dom';

const ProductCard = ({ isHome = false, id, imgUrl, title, price, product }) => {
  const { setCartItemsCounter, setProductsInCart } = useOutletContext();

  const addProductToCart = (item) => {
    setProductsInCart((prevProducts) => {
      const updatedProducts = [...prevProducts, item];
      setCartItemsCounter(updatedProducts.length);
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
        >
          Add To Cart
        </button>
      )}
    </section>
  );
};

export default ProductCard;
