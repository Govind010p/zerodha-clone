import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/mobileNav.css";
import ProfileSidebar from "../ProfileSidebar";


function NavMobile() {
  return (
    <div className="row">
      <div className="col-12 ms-0 mb-3 mt-2">
        <div className="mobile-nav d-lg-none">
          <div className="mobile-nav-scroll mb-1">
            <Link
              to="/tradvise"
              className="mobile-nav-item border border-primary fs-6 ms-2"
            >
              Dashboard
            </Link>
            <Link
              to="/tradvise/holdings"
              className="mobile-nav-item border border-primary fs-6 "
            >
              Holdings
            </Link>
            <Link
              to="/tradvise/orders"
              className="mobile-nav-item border border-primary fs-6 "
            >
              Orders
            </Link>
            <Link
              to="/tradvise/positions"
              className="mobile-nav-item border border-primary fs-6 "
            >
              Positions
            </Link>
            <Link
              to="/tradvise/funds"
              className="mobile-nav-item border border-primary fs-6"
            >
              Funds
            </Link>
            <Link
              className="mobile-nav-item border border-primary fs-6 me-3"
              to="/tradvise/watchlist"
            >
              Your Watchlist
            </Link>
          </div>
          <div className="div border border-1"></div>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
