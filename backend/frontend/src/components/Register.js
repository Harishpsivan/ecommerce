import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to register user");
    }
  };

  return (
    <div style={styles.registerPage}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  registerPage: {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px", // Set a max width for larger screens
    marginLeft: "auto", // Center the register form
    marginRight: "auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007bff",
    textAlign: "center", // Center the heading
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
    width: "100%", // Make the button full width
  },
};

// Add hover effect for the submit button
const HoverButton = ({ style, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: isHovered ? "#0056b3" : style.backgroundColor, // Change color on hover
      }}
    >
      {children}
    </button>
  );
};

export default Register;