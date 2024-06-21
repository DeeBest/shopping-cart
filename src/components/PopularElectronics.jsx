import PopularItems from './PopularItems';
import { useOutletContext } from 'react-router-dom';

const PopularElectronics = () => {
  const { products } = useOutletContext();

  const electronics = products.filter(
    (product) => product.category === `electronics`
  );

  const PopularElectronics = electronics.splice(0, 2);

  return (
    <PopularItems
      heading="Popular In Electronics"
      popularItems={PopularElectronics}
    />
  );
};

export default PopularElectronics;
