import React, { useRef, useState } from "react";
import "../main.css";
import { Link } from "react-router-dom";
import ProfileSidebar from "../ProfileSidebar";

function Navbar() {
  const navbarTogglerRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const closeNavbar = () => {
    // Close only if navbar is open (mobile view)
    if (window.innerWidth < 992 && navbarTogglerRef.current) {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <>
      <ProfileSidebar
        isOpen={isProfileOpen}
        closeSidebar={() => setIsProfileOpen(false)}
      />
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div className="container px-3 ps-md-5 ">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img
              src="/media/images/logo.svg"
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "140px" }}
            />
          </Link>
            <button
              ref={navbarTogglerRef}
              className="navbar-toggler border-0 shadow-none ms-auto pe-0 ham-burger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <i
              className="fa fa-user-circle ps-0 pb-1 fs-3 mt-2 me-3 display-none-desktop display-on-mobile"
              aria-hidden="true"
              onClick={() => setIsProfileOpen(true)}
            ></i>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-md-3 py-md-1">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="signup" onClick={closeNavbar}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product" onClick={closeNavbar}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing" onClick={closeNavbar}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="support" onClick={closeNavbar}>
                  Support
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link ms-md-4  mt-md-0 ms-4 mt-2"
                  to="/kite"
                  onClick={closeNavbar}
                  style={{ padding: "0" }}
                >
                  <button className="btn custom-btn">Go to Dashboard </button>
                </Link>
              </li>
              <li className="nav-item display-none-mobile">
                <div className="profile-position">
                  <i
                    className="fa fa-user-circle p-0 fs-3 mt-2"
                    aria-hidden="true"
                    onClick={() => setIsProfileOpen(true)}
                  ></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
