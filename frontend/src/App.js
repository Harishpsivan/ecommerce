import React, { useState } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./views/ProductList";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Register from "./views/Register";
import Footer from "./components/Footer";
import Checkout from "./views/Checkout";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id); // Use _id to check for existing product
    if (existingItem) {
      // If the product is already in the cart, update its quantity
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId)); // Use _id to remove the product
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/products");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]); // Clear the cart on logout
    navigate("/");
  };

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
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    console.log("Order Details:", orderDetails); // Simulate order submission
    setCart([]); // Clear the cart
    navigate("/products"); // Redirect to the products page
    alert("Order confirmed! Thank you for your purchase.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}  />
      <Routes>
        <Route
          path="/"
          element={
            <Login
            onLogin={handleLogin}
            onNavigateToRegister={() => navigate("/register")}
            onSkipToProducts={() => navigate("/products")}
          />
          }
        />
         <Route
          path="/products"
          element={<ProductList addToCart={addToCart} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              onNavigateToCheckout={() => navigate("/checkout")}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              shippingAddress={shippingAddress}
              paymentMethod={paymentMethod}
              onInputChange={handleInputChange}
              onPaymentMethodChange={handlePaymentMethodChange}
              onConfirmOrder={handleConfirmOrder}
            />
          }
        />
        <Route
          path="/register"
          element={<Register onNavigateToLogin={() => navigate("/")} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;