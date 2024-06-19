import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [cartItemsCounter, setCartItemsCounter] = useState(0);

  useEffect(() => {
    const productsFetch = async () => {
      const response = await (
        await fetch('https://fakestoreapi.com/products')
      ).json();
      setProducts(response);
      setOriginalProducts(response); // Keep the original products
    };

    productsFetch();
  }, []);

  return (
    <>
      <Header cartItemsCounter={cartItemsCounter} />
      <Outlet context={[products, setProducts, originalProducts]} />
      <Footer />
    </>
  );
};

export default MainLayout;
