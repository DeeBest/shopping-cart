import { PiShoppingCart } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <HiOutlineShoppingBag />
        <h1>DeeBest Shop</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="cart-container">
        <span className="item-counter">0</span>
        <PiShoppingCart />
      </div>
    </header>
  );
};

export default Header;
