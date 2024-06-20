import { useState } from 'react';

const ProductCard = ({ isHome = false, id, imgUrl, title, price }) => {
  const [itemsCounter, setItemsCounter] = useState(0);

  const increaseQuantity = () => setItemsCounter((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (itemsCounter > 0) {
      setItemsCounter((prev) => prev - 1);
    }
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
      {isHome ? null : <button className="add-to-cart-btn">Add To Cart</button>}
    </section>
  );
};

export default ProductCard;
