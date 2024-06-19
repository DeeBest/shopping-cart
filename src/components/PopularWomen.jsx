import PopularItems from './PopularItems';

const PopularWomen = ({ products }) => {
  const womenClothing = products.filter(
    (product) => product.category === `women's clothing`
  );

  const popularWomen = womenClothing.splice(0, 2);

  return (
    <PopularItems heading="Popular In Women" popularItems={popularWomen} />
  );
};

export default PopularWomen;
