import React from "react";
import "../../assets/css/pricing.css";

function Hero() {
  return (
    <div className="container text-center mt-4 mt-md-5 px-3 px-md-5 py-4">
      <div className="row mb-4 mb-md-5">
        <h2 className="fs-4 fs-md-2">Charges</h2>
        <p className="text-muted fs-6 fs-md-4 px-2 px-md-0 ms-0">
          List of all charges and taxes
        </p>
      </div>
      <div className="row text-center mb-5">
        <div className="col-12 col-md-4 p-2">
          <img className="brockrage-image" src="/media/images/pricing0.svg" alt="pricingLogo" />
          <h2 className="mt-3 mb-2">Free equity delivery</h2>
          <p className="ms-0 text-muted p-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="brockrage-image" src="/media/images/pricingEquity.svg" alt="equity page" />
          <h2 className="mt-3 mb-2">Intraday and F&O trades</h2>
          <p className="ms-0 text-muted p-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-2">
          <img className="brockrage-image" src="/media/images/pricingMF.svg" alt="MFImage" />
          <h2 className="mt-3 mb-2">Free direct MF</h2>
          <p className="ms-0 text-muted p-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
