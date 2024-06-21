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
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="hero">
        <section className="hero-text-container">
          <p>Get your hands on new arrivals!</p>
          <h1>We&apos;ve got something for everyone don&apos;t miss out. 🏃‍♀️</h1>
        </section>
        <section className="hero-image-container">
          <img src="public/assets/images/hero-img.jpg" alt="hero image" />
          <Link to="shop">
            <button className="hero-btn">Shop Now</button>
          </Link>
        </section>
      </div>
      <div className="popular-section">
        <PopularWomen />
        <PopularMen />
        <PopularJewelry />
        <PopularElectronics />
      </div>
      <div className="subscription-section hero">
        <h1>Get Exclusive Offers Directly In Your Email.</h1>
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
          <Link>Company</Link>
          <Link>Products</Link>
          <Link>Offices</Link>
          <Link>About</Link>
          <Link>Contact</Link>
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
