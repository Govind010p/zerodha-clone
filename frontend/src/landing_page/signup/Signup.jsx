import React, { useState } from "react";
import "../../assets/css/home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Signup() {

    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(
        "https://zerodha-clone-lkju.onrender.com/api/auth/signup",
        formData,
        {
          withCredentials: true,
        },
      );

      const data = res.data;

      if (data.success) {
        setSuccess(true);
        setMessage("Signup successful! ");
        sessionStorage.setItem("token", data.token);
        setFormData({ username: "", email: "", password: "" });

        // Redirect to dashboard
        navigate("/kite", { replace: true });
      } else {
        setSuccess(false);
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        setMessage(error.response.data.message || "Signup failed");
      } else {
        setMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <div className="row text-center p-md-5 mt-md-5 mt-3 p-3 order-md-0 order-">
        <h2 className="text-md-center text-start display-none-mobile">
          Open a free demat and trading account online
        </h2>
        <p className=" fs-7 text-muted text-md-center text-start fs-5 ms-md-0 ms-0 mt-md-2 mt-2 display-none-mobile">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row px-md-5 py-md-4 ">
        <div className="col-md-6 col-12">
          <img
            className="w-100 ps-md-5 py-md-5 p-2"
            src="/media/images/signup.png"
            alt="signup png"
          />
        </div>
        <div className="col-1"></div>
        <div className="col-md-5 col-12 d-flex flex-column px-md-1 px-4 mt-md-0 mt-5  ">
          <h2 className="display-none-desktop display-blockon-mobile">
            Open a free demat & trading account online
          </h2>
          <h2 className="py-md-0 py-3">Signup now</h2>
          <p className="ms-0 text-muted display-none-mobile">
            Or track your existing application
          </p>

          <div className="container">
            <div
              style={{
                maxWidth: "420px",
                width: "100%",
              }}
            >
              {message && (
                <div
                  className={`alert ${success ? "alert-success" : "alert-danger"}`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <p className="ms-md-0 ms-0 mt-md-4 mt-2 mb-1 px-md-0 px-3 text-muted fs-vs-p fs-10">
            By proceeding, you agree to the Zerodha
            <span className="text-primary"> terms</span> &
            <span className="text-primary"> privacy policy</span>
          </p>
          <div className="div border px-md-0 px-3 "></div>
          <p className="ms-md-0 ms-0 mt-1 mb-0 px-md-0 px-3  text-muted fs-vs-p fs-10 ">
            Do you have an existing account?
            <Link
              className="nav-link text-primary d-sm-inline ms-1"
              to="/login"
            >
              click here for login
            </Link>
          </p>
          <p className="ms-md-0 ms-0 mt-1 mb-0 px-md-0 px-3  text-muted fs-vs-p fs-10 ">
            Looking to open NRI account?
            <span className="text-primary">Click here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
