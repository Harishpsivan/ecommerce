import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity,onNavigateToCheckout }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.cartPage}>
      <h2 style={styles.heading}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} style={styles.tableRow}>
                  <td>
                    <img
                      src={item.image} // Display product image
                      alt={item.name}
                      style={styles.cartImage}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item._id, parseInt(e.target.value))
                      }
                      style={styles.input}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={onNavigateToCheckout} style={styles.checkoutButton}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartPage: {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff",
  },
  emptyCart: {
    fontSize: "1.2rem",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  cartImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  input: {
    width: "60px",
    padding: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "center",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  removeButtonHover: {
    backgroundColor: "#cc0000",
  },
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "right",
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
    width: "100%",
  }
};

export default Cart;