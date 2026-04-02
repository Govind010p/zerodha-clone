import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center d-flex justify-content-center">
        <img
          src="/media/images/homeHero.png"
          alt="home page image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="ms-0  fs-6">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="btn btn-primary text-center w-50 w-auto px-md-5 px-4 py-md-2 py-2"
          onClick={() => navigate("/signup")}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
