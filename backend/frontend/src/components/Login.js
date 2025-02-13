import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin, onNavigateToRegister, onSkipToProducts }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      alert(response.data.message);
      onLogin(); // Call the onLogin function to update login status
    } catch (error) {
      alert("Failed to login");
    }
  };

  return (
    <div style={styles.loginPage}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Login
        </button>
      </form>
      <button onClick={onNavigateToRegister} style={styles.secondaryButton}>
        Register
      </button>
      <button onClick={onSkipToProducts} style={styles.secondaryButton}>
        Skip to Products
      </button>
    </div>
  );
};

const styles = {
  loginPage: {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px", // Set a max width for larger screens
    marginLeft: "auto", // Center the login form
    marginRight: "auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    margin: "0 auto",
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
  submitButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease",
    width: "100%",
    marginTop: "10px",
  },
  // Hover effects
  submitButtonHover: {
    backgroundColor: "#0056b3", // Darker blue for hover
  },
  secondaryButtonHover: {
    backgroundColor: "#5a6268", // Darker gray for hover
  },
};

// Add hover effects using state
const HoverButton = ({ style, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={isHovered ? { ...style, ...styles.submitButtonHover } : style}
    >
      {children}
    </button>
  );
};

export default Login;