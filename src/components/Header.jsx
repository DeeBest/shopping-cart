/* eslint-disable react/prop-types */

import { PiShoppingCart } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ cartItemsCounter, isDarkMode, setIsDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleIsMobile = () => setIsMobile(!isMobile);

  const handleToggleDarkMode = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <header className={isDarkMode && 'dark-header-footer'}>
      <div className="logo-container">
        <HiOutlineShoppingBag className="header-icon logo-icon" />
        <h1>DeeBest Shop</h1>
      </div>
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
      <DarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />
      <nav>
        <ul
          className={`${isMobile ? 'show-nav desktop-nav' : 'desktop-nav'}`}
          style={{
            backgroundColor: `${isDarkMode ? '#1b1918' : '#e7e5e4'}`,
          }}
        >
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
        <div className="mobile-navbar-icons" onClick={toggleIsMobile}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
