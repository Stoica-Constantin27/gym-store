import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "../../context/CartContext";
import "../../styles/store.css";

const Store = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState({
    supplements: [],
    equipment: [],
    clothes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/gym-products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="store">
      <h2>Store Products</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="category-section">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="product-list">
            {items
              .filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((product) => (
                <div key={product.id} className="product-item">
                  <Link to={`/product/${product.id}`}>
                    <img src={`${product.image}`} alt={product.name} />
                  </Link>
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
