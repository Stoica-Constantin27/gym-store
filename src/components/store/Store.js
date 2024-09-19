import React, { useContext, useState, useEffect } from "react";
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
        console.error("Error fetching the products:", error);
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
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="category-section">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="product-list">
            {items.map((product) => (
              <div key={product.id} className="product-item">
                <img src={`/images/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
