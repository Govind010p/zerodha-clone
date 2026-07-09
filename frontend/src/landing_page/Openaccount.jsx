import React from "react";
import { useNavigate } from "react-router-dom";

function Openaccount() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="row mt-md-3 mt-4">
        <h1 className="mt-5">Start Your Trading Journey Today</h1>
        <p className="ms-0 fs-6">
          Create your free Tradvise account to explore real-time market data,
          build virtual investment portfolios, analyze market trends, and
          practice trading strategies in a secure simulation environment.
          Experience professional-grade trading tools without financial risk.
        </p>

        <button
          className="btn btn-primary w-50 w-auto px-md-5 px-4 py-md-2 py-2 me-auto ms-auto"
          onClick={() => navigate("/signup")}  
        >
          Get Started Free
        </button>
      </div>
    </div>
  );
}

export default Openaccount;