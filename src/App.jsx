import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

function App() {
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
      <Header />
      <Main products={products} />
      <Footer />
    </>
  );
}

export default App;
