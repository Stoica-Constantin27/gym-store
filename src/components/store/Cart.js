import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate discount based on total amount
  const calculateDiscount = (totalAmount) => {
    if (totalAmount >= 2500) {
      return 0.2; // 20% discount
    } else if (totalAmount >= 1000) {
      return 0.15; // 15% discount
    } else if (totalAmount >= 300) {
      return 0.1; // 10% discount
    }
    return 0; // No discount
  };

  const discountRate = calculateDiscount(total);
  const discountAmount = total * discountRate; // Calculate the discount amount
  const finalTotal = total - discountAmount; // Final total after discount

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
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
