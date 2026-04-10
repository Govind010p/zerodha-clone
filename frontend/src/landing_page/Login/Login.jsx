import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(
        "https://zerodha-clone-lkju.onrender.com/api/auth/login",
        formData,
        {
          withCredentials: true,
        },
      );

      const data = res.data;

      if (data.success) {
        setSuccess(true);
        setMessage("Login successful! 🎉");
        setFormData({ email: "", password: "" });

        // Redirect to dashboard
        navigate("/kite", { replace: true });
      } else {
        setSuccess(false);
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        //  Backend responded with 4xx/5xx — show actual message
        setMessage(error.response.data.message || "Login failed");
      } else {
        //  Network error / server down
        setMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">User Login</h2>

        {message && (
          <div
            className={`alert ${success ? "alert-success" : "alert-danger"}`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
