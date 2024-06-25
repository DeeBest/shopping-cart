/* eslint-disable react/prop-types */

import { PiShoppingCart } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = ({ cartItemsCounter, isDarkMode, setIsDarkMode }) => {
  const handleToggleDarkMode = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <header className={isDarkMode && 'dark-header-footer'}>
      <div className="logo-container">
        <HiOutlineShoppingBag className="header-icon logo-icon" />
        <h1>DeeBest Shop</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? 'active' : ''} link ${
                  isDarkMode ? 'dark-mode-link' : ''
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? 'active' : ''} link ${
                  isDarkMode ? 'dark-mode-link' : ''
                }`
              }
              to="shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? 'active' : ''} link ${
                  isDarkMode ? 'dark-mode-link' : ''
                }`
              }
              to="contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <DarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />
      <div className="cart-container">
        <span className="item-counter">{cartItemsCounter}</span>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? 'active' : ''} link ${
              isDarkMode ? 'dark-mode-link' : ''
            }`
          }
          to="cart"
        >
          <PiShoppingCart className="header-icon" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
