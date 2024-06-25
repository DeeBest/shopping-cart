/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PopularWomen from './PopularWomen';
import PopularMen from './PopularMen';
import PopularJewelry from './PopularJewelry';
import PopularElectronics from './PopularElectronics';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { NavLink, Link, useOutletContext } from 'react-router-dom';
import heroImg from '../assets/images/hero-img.jpg';

const Home = () => {
  const { isDarkMode } = useOutletContext();
  return (
    <main className={`${isDarkMode ? 'dark-home-page' : ''} home`}>
      <div className={`${isDarkMode ? 'dark-hero' : ''} hero`}>
        <section className="hero-text-container">
          <p>Get your hands on new arrivals!</p>
          <h1 className={`${isDarkMode ? 'gradient-text' : ''}`}>
            We&apos;ve got something for everyone don&apos;t miss out. 🏃‍♀️
          </h1>
        </section>
        <section className="hero-image-container">
          <img src={heroImg} alt="hero image" />
          <NavLink to="shop">
            <button className="hero-btn">Shop Now</button>
          </NavLink>
        </section>
      </div>
      <div className="popular-section">
        <PopularWomen />
        <PopularMen />
        <PopularJewelry />
        <PopularElectronics />
      </div>
      <div
        className={`${isDarkMode ? 'dark-hero' : ''} subscription-section hero`}
      >
        <h1 className={`${isDarkMode ? 'gradient-text' : ''}`}>
          Get Exclusive Offers Directly In Your Email.
        </h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter Your Email" />
          <button className="subscribe-btn" type="button">
            Subscribe
          </button>
        </form>
        <div className="logo-container">
          <HiOutlineShoppingBag className="header-icon logo-icon" />
          <h1>DeeBest Shop</h1>
        </div>
        <div className="links-container">
          <Link className={`${isDarkMode ? 'dark-mode-link' : ''} link`}>
            Contact
          </Link>

          <Link className={`${isDarkMode ? 'dark-mode-link' : ''} link`}>
            About
          </Link>

          <Link className={`${isDarkMode ? 'dark-mode-link' : ''} link`}>
            Offices
          </Link>

          <Link className={`${isDarkMode ? 'dark-mode-link' : ''} link`}>
            Products
          </Link>

          <Link className={`${isDarkMode ? 'dark-mode-link' : ''} link`}>
            Company
          </Link>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
    </main>
  );
};

export default Home;
