import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My E-Commerce Store</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/cart" style={styles.navLink}>
          Cart
        </Link>
        <Link to="/login" style={styles.navLink}>
          Login
        </Link>
        <Link to="/register" style={styles.navLink}>
          Register
        </Link>
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
  navLinkHover: {
    color: "#cce6ff",
  },
};

export default Header;