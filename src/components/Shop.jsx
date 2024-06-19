import ProductsList from './ProductsList';
import { useOutletContext, NavLink } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts, originalProducts] = useOutletContext();

  const filterMen = () => {
    const menClothing = originalProducts.filter(
      (product) => product.category === `men's clothing`
    );
    setProducts(menClothing);
  };

  const filterWomen = () => {
    const womenClothing = originalProducts.filter(
      (product) => product.category === `women's clothing`
    );
    setProducts(womenClothing);
  };

  const filterElectronics = () => {
    const electronics = originalProducts.filter(
      (product) => product.category === `electronics`
    );
    setProducts(electronics);
  };

  const filterJewelry = () => {
    const jewelry = originalProducts.filter(
      (product) => product.category === `jewelery`
    );
    setProducts(jewelry);
  };

  const resetFilters = () => {
    setProducts(originalProducts);
  };

  return (
    <main className="shop">
      <h1>Shop Now</h1>
      <hr />
      <aside className="products-filter">
        <button className="filter-btn" onClick={filterMen}>
          Men
        </button>
        <button className="filter-btn" onClick={filterWomen}>
          Women
        </button>
        <button className="filter-btn" onClick={filterJewelry}>
          Jewelry
        </button>
        <button className="filter-btn" onClick={filterElectronics}>
          Electronics
        </button>
        <button className="filter-btn" onClick={resetFilters}>
          All
        </button>
      </aside>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <ProductsList products={products} />
      </div>
    </main>
  );
};

export default Shop;
