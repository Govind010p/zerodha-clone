/* eslint-disable no-irregular-whitespace */
import React from "react";
import "../main.css";

function Footer() {
  return (
    <footer className="bg-light border-top pt-5 pb-3 mt-5">
      <div className="container">

        {/* Top Section */}
        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">

            <img
              src="../../public/media/images/logo.png"
              alt="Tradvise Logo"
              style={{ width: "100px", scale:1.8 }}
              className="mb-3 ms-md-4"
            />

            <p className="text-muted mt-3 ms-0">
              Tradvise is a modern stock trading simulation platform built for
              learning, portfolio management, market analysis, and real-time
              trading simulations.
            </p>

            <div className="mt-4">

              <a href="#" className="text-dark me-3 fs-5">
                <i className="fa fa-github"></i>
              </a>

              <a href="#" className="text-dark me-3 fs-5">
                <i className="fa fa-linkedin"></i>
              </a>

              <a href="#" className="text-dark me-3 fs-5">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="#" className="text-dark fs-5">
                <i className="fa fa-envelope"></i>
              </a>

            </div>

          </div>

          {/* Platform */}

          <div className="col-lg-2 col-md-6">

            <h5 className="fw-bold mb-3">
              Platform
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Dashboard
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Market Watch
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Portfolio
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Trading Simulator
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  AI Insights
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-3">
              Resources
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Learning Hub
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Documentation
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Tutorials
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Help Center
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  FAQs
                </a>
              </li>

            </ul>

          </div>

          {/* Technology */}

          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-3">
              Built With
            </h5>

            <div className="d-flex flex-wrap gap-2">

              <span className="badge bg-primary">
                React
              </span>

              <span className="badge bg-success">
                Node.js
              </span>

              <span className="badge bg-dark">
                Express
              </span>

              <span className="badge bg-success">
                MongoDB
              </span>

              <span className="badge bg-info text-dark">
                Socket.io
              </span>

              <span className="badge bg-warning text-dark">
                JWT
              </span>

              <span className="badge bg-secondary">
                REST API
              </span>

              <span className="badge bg-danger">
                WebSockets
              </span>

            </div>

            <p className="text-muted small mt-4 ms-0">
              Designed and developed as a Bachelor of Technology (Computer
              Science & Engineering) Major Project.
            </p>

          </div>

        </div>

        {/* Divider */}

        <hr className="my-5" />

        {/* Disclaimer */}

        <div className="row">

          <div className="col-lg-12">

            <h6 className="fw-bold mb-1">
              Disclaimer
            </h6>
            <p className="text-muted small ms-0">

              Tradvise is an educational stock trading simulation platform
              developed exclusively for academic and learning purposes.
              It does not facilitate real stock trading, investment advisory,
              brokerage services, or financial transactions. Market data is
              integrated through publicly available APIs to demonstrate
              real-time data processing, portfolio management, and modern
              full-stack application development.

            </p>

          </div>

        </div>

        <hr />

        {/* Bottom */}

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          <p className="text-muted small mb-2 mb-md-0 ms-0">
            © 2026 <strong>Tradvise</strong>. All rights reserved.
          </p>

          <div>

            <a
              href="#"
              className="text-decoration-none text-muted me-3 small"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted me-3 small"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-decoration-none text-muted small"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;