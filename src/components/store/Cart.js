import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const calculateDiscount = (totalAmount) => {
    if (totalAmount >= 2500) {
      return 0.2;
    } else if (totalAmount >= 1000) {
      return 0.15;
    } else if (totalAmount >= 300) {
      return 0.1;
    }
    return 0;
  };

  const discountRate = calculateDiscount(total);
  const discountAmount = total * discountRate;
  const finalTotal = total - discountAmount;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <div className="cart-controls">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            {discountRate > 0 && (
              <p>
                Discount: -${discountAmount.toFixed(2)} ({discountRate * 100}%)
              </p>
            )}
            <p>Final Total: ${finalTotal.toFixed(2)}</p>
          </div>

          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
