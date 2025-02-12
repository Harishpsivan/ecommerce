import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My E-Commerce Store</h1>
      <nav style={styles.nav}>
        <Link to="/products" style={styles.navLink}>
          Products
        </Link>
        <Link to="/cart" style={styles.navLink}>
          Cart
        </Link>
        {isLoggedIn ? (
          <button onClick={onLogout} style={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <Link to="/" style={styles.navLink}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "color 0.3s ease",
  },
  logoutButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default Header;