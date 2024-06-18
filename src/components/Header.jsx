import './../styles/header.css';
import { PiShoppingCart } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="cart-container">
        <span className="item-counter">100</span>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="cart"
        >
          <PiShoppingCart className="header-icon" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
