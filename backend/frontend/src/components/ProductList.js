import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ addToCart, isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Failed to fetch products", error));
  }, []);

  return (
    <div style={styles.productList}>
      <h2 style={styles.heading}>Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product._id} style={styles.product}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
            {isLoggedIn ? (
              <AddToCartButton product={product} addToCart={addToCart} />
            ) : (
              <p style={styles.loginMessage}>Please log in to add to cart.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AddToCartButton = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#0056b3" : "#007bff", // Change color on hover
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <button
      onClick={() => addToCart(product)}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Add to Cart
    </button>
  );
};

const styles = {
  productList: {
    marginTop: "20px",
    padding: "0 20px", // Add horizontal padding for better spacing
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff",
    textAlign: "center", // Center the heading
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  product: {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  productName: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#007bff",
  },
  productPrice: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "15px",
  },
  loginMessage: {
    color: "#ff4d4d",
    fontSize: "1rem",
  },
};

// Add hover effect for product cards
const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        ...styles.product,
        transform: "scale(1.02)", // Slightly scale up on hover
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={styles.productImage}
      />
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductList;