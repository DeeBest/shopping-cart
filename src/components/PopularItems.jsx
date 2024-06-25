/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import ProductCard from './ProductCard';

const PopularItems = ({ heading, popularItems }) => {
  const { isDarkMode } = useOutletContext();

  return (
    <section
      className={`${
        isDarkMode ? 'dark-popular-container' : ''
      } popular-products-container`}
    >
      <h1 className={`${isDarkMode ? 'gradient-text' : ''}`}>{heading}</h1>
      <hr />
      <div className="products-cards-container">
        {popularItems.map((product) => {
          return (
            <ProductCard
              isHome={true}
              key={product.id}
              id={product.id}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularItems;
