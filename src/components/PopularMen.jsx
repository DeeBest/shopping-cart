import PopularItems from './PopularItems';

const PopularMen = ({ products }) => {
  const menClothing = products.filter(
    (product) => product.category === `men's clothing`
  );

  const popularMen = menClothing.splice(0, 2);

  return <PopularItems heading="Popular In Men" popularItems={popularMen} />;
};

export default PopularMen;
