import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2023 My E-Commerce Store. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#007bff",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
    marginTop: "40px",
    boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
  },
  text: {
    margin: "0",
    fontSize: "1rem",
  },
};

export default Footer;