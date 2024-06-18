import { useLoaderData } from 'react-router-dom';

import Home from '../components/Home';

const HomePage = () => {
  const products = useLoaderData();

  return (
    <>
      <Home products={products} />
    </>
  );
};

const productsLoader = async () => {
  const products = await (
    await fetch('https://fakestoreapi.com/products')
  ).json();
  return products;
};

export { HomePage as default, productsLoader };
