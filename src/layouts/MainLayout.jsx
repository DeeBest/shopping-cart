import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [itemsInCart, setAddItemsInCart] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [cartItemsCounter, setCartItemsCounter] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('themeMode')) || false
  );

  useEffect(() => {
    try {
      const productsFetch = async () => {
        const response = await (
          await fetch('https://fakestoreapi.com/products')
        ).json();
        setProducts(response);
        setOriginalProducts(response); // Keep the original products
      };
      productsFetch();
    } catch (error) {
      console.log('error fetching data', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
            cartItemsCounter={cartItemsCounter}
          />
          <Outlet
            context={{
              products,
              setProducts,
              originalProducts,
              loading,
              itemsInCart,
              setCartItemsCounter,
              productsInCart,
              setProductsInCart,
              setIsDarkMode,
              isDarkMode,
            }}
          />
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </>
  );
};

export default MainLayout;
