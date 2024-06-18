import { useState, useEffect } from 'react';

import Home from '../components/Home';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await (
        await fetch('https://fakestoreapi.com/products')
      ).json();
      setProducts(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Home products={products} />
    </>
  );
};

export default HomePage;
