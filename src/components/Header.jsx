import './../styles/header.css';
import { PiShoppingCart } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <HiOutlineShoppingBag className="header-icon logo-icon" />
        <h1>DeeBest Shop</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-container">
        <span className="item-counter">0</span>
        <PiShoppingCart className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
