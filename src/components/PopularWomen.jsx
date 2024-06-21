import PopularItems from './PopularItems';
import { useOutletContext } from 'react-router-dom';

const PopularWomen = () => {
  const { products } = useOutletContext();

  const womenClothing = products.filter(
    (product) => product.category === `women's clothing`
  );

  const popularWomen = womenClothing.splice(0, 2);

  return (
    <PopularItems heading="Popular In Women" popularItems={popularWomen} />
  );
};

export default PopularWomen;
