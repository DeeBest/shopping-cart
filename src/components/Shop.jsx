import ProductsList from './ProductsList';
import { useOutletContext } from 'react-router-dom';
import Spinner from './Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
  const { product, setProducts, originalProducts, loading } =
    useOutletContext();

  const addedItemNotification = () => {
    toast.success('Item successfully added to the cart !');
  };

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
  {
    if (loading) {
      return <Spinner />;
    } else {
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
            <ProductsList addedItemNotification={addedItemNotification} />
          </div>
          <ToastContainer
            style={{
              zIndex: '10000000000',
            }}
          />
        </main>
      );
    }
  }
};

export default Shop;
