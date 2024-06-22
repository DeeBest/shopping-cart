import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { productsInCart } = useOutletContext();

  const [itemsCounter, setItemsCounter] = useState(1);
  // const [priceUpdate, setPriceUpdate] = useState(Number(price));

  const increaseQuantity = () => {
    setItemsCounter((prev) => {
      const newCounter = prev + 1;
      // setPriceUpdate(Number(price) * newCounter);
      return newCounter;
    });
  };

  const decreaseQuantity = () => {
    if (itemsCounter > 1) {
      setItemsCounter((prev) => {
        const newCounter = prev - 1;
        // setPriceUpdate(Number(price) * newCounter);
        return newCounter;
      });
    }
  };

  return (
    <main className="cart">
      <h1>Cart</h1>
      <hr />
      <section>
        <div className="cart-items-container">
          {productsInCart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="title-btns-price-container">
                  <h4>{item.title}</h4>
                  <div className="quantity-container">
                    <p className="product-price">
                      Item(s) Price: ${item.price}
                    </p>
                    <div>
                      <button
                        className="quantity-btn decrease-quantity-btn"
                        onClick={() => decreaseQuantity()}
                      >
                        -
                      </button>
                      <span>{itemsCounter}</span>
                      <button
                        className="quantity-btn increase-quantity-btn"
                        onClick={() => increaseQuantity()}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="del-item-in-cart-btn">Delete Item</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="clear-cart-container">
          <div>
            <p>Total Costs:</p>
            <p>$300</p>
          </div>
          <button>Clear Cart</button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
