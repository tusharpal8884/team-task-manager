import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
        role: "admin"
      });

      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #43cea2, #185a9d)"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Create Account 🚀
        </h2>

        <input
          placeholder="Name"
          style={inputStyle}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup} style={buttonStyle}>
          Signup
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <span style={linkStyle} onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#43cea2",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const linkStyle = {
  color: "#185a9d",
  cursor: "pointer",
  fontWeight: "bold"
};