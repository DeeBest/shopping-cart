/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ProductCard = ({ isHome = false, id, imgUrl, title, price, product }) => {
  const { setCartItemsCounter, productsInCart, setProductsInCart } =
    useOutletContext();
  const [itemsCounter, setItemsCounter] = useState(1);
  const [priceUpdate, setPriceUpdate] = useState(Number(price));

  const increaseQuantity = () => {
    setItemsCounter((prev) => {
      const newCounter = prev + 1;
      setPriceUpdate(Number(price) * newCounter);
      return newCounter;
    });
  };

  const decreaseQuantity = () => {
    if (itemsCounter > 1) {
      setItemsCounter((prev) => {
        const newCounter = prev - 1;
        setPriceUpdate(Number(price) * newCounter);
        return newCounter;
      });
    }
  };

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
          <p className="product-price">${priceUpdate.toFixed(2)}</p>
          {isHome ? null : (
            <div className="quantity-container">
              <button
                className="quantity-btn decrease-quantity-btn"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span>{itemsCounter}</span>
              <button
                className="quantity-btn increase-quantity-btn"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          )}
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
