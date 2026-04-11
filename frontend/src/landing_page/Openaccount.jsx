import React from "react";
import { useNavigate } from "react-router-dom";

function Openaccount() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="row mt-md-3 mt-4">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="ms-0 fs-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades
        </p>

        <button
          className="btn btn-primary w-50 w-auto px-md-5 px-4 py-md-2 py-2 me-auto ms-auto"
          onClick={() => navigate("/signup")}  
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Openaccount;