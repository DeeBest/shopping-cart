/* eslint-disable react/prop-types */
import './../styles/main.css';
import PopularWomen from './PopularWomen';
import PopularMen from './PopularMen';
import PopularJewelry from './PopularJewelry';
import PopularElectronics from './PopularElectronics';

const Main = ({ products }) => {
  return (
    <main>
      <div className="hero">
        <section className="hero-text-container">
          <p>Get your hands on new arrivals!</p>
          <h1>We&apos;ve got something for everyone don&apos;t miss out. 🏃‍♀️</h1>
        </section>
        <section className="hero-image-container">
          <img src="public/assets/images/hero-img.jpg" alt="hero image" />
          <button className="hero-btn">Shop Now</button>
        </section>
      </div>
      <PopularWomen products={products} />
      <PopularMen products={products} />
      <PopularJewelry products={products} />
      <PopularElectronics products={products} />
    </main>
  );
};

export default Main;
