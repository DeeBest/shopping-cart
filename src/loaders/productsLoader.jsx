const productsLoader = async () => {
  const products = await (
    await fetch('https://fakestoreapi.com/products')
  ).json();
  return products;
};

export default productsLoader;
