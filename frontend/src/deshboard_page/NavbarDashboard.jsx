import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navstyle.css";
import ProfileSidebar from "../ProfileSidebar";

function NavbarDeshboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navbarTogglerRef = useRef(null);

  const closeNavbar = () => {
    // Close only if navbar is open (mobile view)
    if (window.innerWidth < 992 && navbarTogglerRef.current) {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div className="container px-3 px-md-0 w-md-75 px-md-4 d-flex align-content-between ">
          <div className="div d-flex flex-row">
            <Link className="navbar-brand" to="/kite" onClick={closeNavbar}>
              <img
                src="/media/images/logokite.svg"
                alt="logo"
                className="img-fluid"
                style={{ maxWidth: "40px" }}
              />
            </Link>

            <button
              ref={navbarTogglerRef}
              className="navbar-toggler border-0 shadow-none ms-auto display-none-mobile"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="div display-none-desktop display-on-mobile navbtn">
              <Link
                className="mobile-nav-item border border-success fs-6 ms-2 disabled"
                to=""
              >
                Apps
              </Link>
              <Link className="mobile-nav-item rounded-5  fs-4 ms-2" to="">
                <i  
                  className="fa fa-user-circle p-0 "
                  aria-hidden="true"
                  onClick={() => setIsProfileOpen(true)}
                ></i>
              </Link>
            </div>
          </div>

          <div
            className="collapse navbar-collapse display-none-mobile"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-md-5 mb-2 mb-lg-0 px-md-3 py-md-1 w-75">
              <li className="nav-item px-md-3">
                <Link className="nav-link" to="/kite" onClick={closeNavbar}>
                  Deshboard
                </Link>
              </li>
              <li className="nav-item  px-md-3">
                <Link
                  className="nav-link"
                  to="/kite/orders"
                  onClick={closeNavbar}
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className="nav-link"
                  to="/kite/holdings"
                  onClick={closeNavbar}
                >
                  Holdings
                </Link>
              </li>
              <li className="nav-item  px-md-3">
                <Link
                  className="nav-link"
                  to="/kite/positions"
                  onClick={closeNavbar}
                >
                  Positions
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className="nav-link"
                  to="/kite/funds"
                  onClick={closeNavbar}
                >
                  Funds
                </Link>
              </li>
              <li className="nav-item  px-md-3">
                <Link
                  className="nav-link"
                  to="/kite/apps"
                  onClick={closeNavbar}
                >
                  apps
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <div>
                  <i
                    className="fa fa-user-circle p-0 fs-3 mt-2  "
                    aria-hidden="true"
                    onClick={() => setIsProfileOpen(true)}
                  ></i>
                </div>
              </li>
            </ul>
          </div>
          <ProfileSidebar
            isOpen={isProfileOpen}
            closeSidebar={() => setIsProfileOpen(false)}
          />
        </div>
      </nav>
    </>
  );
}

export default NavbarDeshboard;
