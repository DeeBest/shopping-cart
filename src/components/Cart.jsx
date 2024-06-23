import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { productsInCart, setProductsInCart, setCartItemsCounter } =
    useOutletContext();

  const clearedCartNotification = () => {
    toast.success('Successfully checked out !');
  };

  const deleteNotification = () => {
    toast.error('Item removed from cart !');
  };

  const [quantities, setQuantities] = useState(
    productsInCart.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  // Function to update the total cart items counter
  const updateCartItemsCounter = () => {
    const totalItems = Object.values(quantities).reduce(
      (acc, quantity) => acc + quantity,
      0
    );
    setCartItemsCounter(totalItems);
  };

  useEffect(() => {
    updateCartItemsCounter(); // Update the counter whenever quantities change
  }, [quantities]);

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(prevQuantities[id] - 1, 1);
      return {
        ...prevQuantities,
        [id]: newQuantity,
      };
    });
  };

  const deleteItemInCart = (id) => {
    const newList = productsInCart.filter((item) => item.id !== id);
    setProductsInCart(newList);

    // Remove the item from the quantities state
    setQuantities((prevQuantities) => {
      const { [id]: _, ...rest } = prevQuantities;
      return rest;
    });
    deleteNotification();
  };

  const calculateTotalCost = () => {
    return productsInCart.reduce((total, item) => {
      return total + item.price * (quantities[item.id] || 1);
    }, 0);
  };

  const clearCart = () => {
    setProductsInCart([]);
    setQuantities({});
    setCartItemsCounter(0); // Reset the cart items counter
    clearedCartNotification();
  };

  const totalCost = calculateTotalCost();
  const shippingFee = totalCost * 0.1;
  const finalCost = (totalCost + shippingFee).toFixed(2);

  return (
    <main className="cart">
      <h1>Cart</h1>
      <hr />
      <section>
        {productsInCart.length === 0 ? (
          <h1>You don&apos;t have products in your cart.🥲</h1>
        ) : (
          <section className="items-list-and-clear-cart">
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
                        <p className="product-price">${item.price}</p>
                        <div>
                          <button
                            className="quantity-btn decrease-quantity-btn"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span>{quantities[item.id]}</span>
                          <button
                            className="quantity-btn increase-quantity-btn"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteItemInCart(item.id)}
                        className="del-item-in-cart-btn"
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="clear-cart-container">
              <div>
                <p>Sub Total:</p>
                <p>${totalCost.toFixed(2)}</p>
              </div>
              <div>
                <p>Shipping Fee:</p>
                <p>10%</p>
              </div>
              <div>
                <p>Total Cost:</p>
                <p>${finalCost}</p>
              </div>
              <button onClick={clearCart}>Check Out</button>
            </div>
          </section>
        )}
      </section>
      <ToastContainer
        style={{
          zIndex: '10000000000',
        }}
      />
    </main>
  );
};

export default Cart;
