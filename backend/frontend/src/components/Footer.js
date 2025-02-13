import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>&copy; 2025 My E-Commerce Store. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
          <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
          <a href="/contact" style={styles.link}>Contact Us</a>
        </div>
      </div>
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
  container: {
    maxWidth: "1200px", // Set a max width for larger screens
    margin: "0 auto", // Center the footer content
    padding: "0 20px", // Add some horizontal padding
  },
  text: {
    margin: "0",
    fontSize: "1rem",
  },
  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Space between links
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#e0e0e0", // Lighter color on hover
  },
};

export default Footer;