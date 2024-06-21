import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const { productsInCart } = useOutletContext();
  return (
    <main>
      <h1>Cart</h1>
      <hr />
      <div className="cart-container">
        {productsInCart.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </main>
  );
};

export default Cart;
