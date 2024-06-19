const ProductsList = ({ products }) => {
  return (
    <div
      className="products-cards-container"
      style={{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {products.map((item) => {
        return (
          <section className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-title-container">
              <p>{item.title.slice(0, 50)}...</p>
              <p className="product-price">${item.price}</p>
            </div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </section>
        );
      })}
    </div>
  );
};

export default ProductsList;
