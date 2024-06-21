/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useOutletContext } from 'react-router-dom';

const ProductCard = ({ isHome = false, id, imgUrl, title, price, product }) => {
  const [itemsCounter, setItemsCounter] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);
  // const { a } = useOutletContext();

  const increaseQuantity = () => setItemsCounter((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (itemsCounter > 0) {
      setItemsCounter((prev) => prev - 1);
    }
  };

  const addProductToCart = (item) => {
    setProductsInCart((prevProducts) => [...prevProducts, item]);
    console.log(productsInCart);
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
