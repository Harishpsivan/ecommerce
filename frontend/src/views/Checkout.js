import React, { useState } from "react";

const Checkout = ({ cart, onConfirmOrder }) => {
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (
      !shippingAddress.name ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.zip
    ) {
      alert("Please fill out all shipping address fields.");
      return;
    }

    const orderDetails = {
      shippingAddress,
      paymentMethod,
      cart,
      totalPrice,
    };

    console.log("Order Details:", orderDetails); // Simulate order submission
    onConfirmOrder();
    alert("Order confirmed! Thank you for your purchase.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  return (
    <div style={styles.checkoutPage}>
      <h2 style={styles.heading}>Checkout</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div>
          <h3 style={styles.sectionHeading}>Shipping Address</h3>
          <form style={styles.shippingForm}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={shippingAddress.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="address" style={styles.label}>
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingAddress.address}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="city" style={styles.label}>
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingAddress.city}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="state" style={styles.label}>
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={shippingAddress.state}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="zip" style={styles.label}>
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={shippingAddress.zip}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </form>

          <h3 style={styles.sectionHeading}>Payment Method</h3>
          <div style={styles.paymentOptions}>
            <label style={styles.paymentOption}>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              Credit Card
            </label>
            <label style={styles.paymentOption}>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>

          <h3 style={styles.sectionHeading}>Order Summary</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} style={styles.tableRow}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.cartImage}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleConfirmOrder} style={styles.confirmButton}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  checkoutPage: {
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
  sectionHeading: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#007bff",
  },
  emptyCart: {
    fontSize: "1.2rem",
    color: "#555",
  },
  shippingForm: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "1.1rem",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  paymentOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  paymentOption: {
    fontSize: "1.1rem",
    color: "#333",
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
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "right",
  },
  confirmButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

export default Checkout;