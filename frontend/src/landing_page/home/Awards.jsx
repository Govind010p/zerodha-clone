import React from "react";
import '../../assets/css/home.css';

function Awards() {
  return (
    <div className="container mt-2 px-md-4 px-4">
      <div className="row m-md-0 m-1 align-items-center  mobile-bordered">

        <div className="col-md-6 col-12 p-4 order-1 order-md-2">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="ms-2 para-fontsize-mobile">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-4">
            <div className="col-6">
              <ul className="list-fontsize-mobile ps-md-5 ps-4">
                <li className="mb-3">Futures and Options</li>
                <li className="mb-3">Commodity derivatives</li>
                <li className="mb-3">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-fontsize-mobile">
                <li className="mb-3">Stocks & IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Gold</li>
              </ul>
            </div>
          </div>

          <div className="row mt-2">
            <img
              src="/media/images/pressLogos.png"
              alt="award-png"
              className="img-fluid w-90"
            />
          </div>
        </div>

        <div className="col-md-6 col-12 p-4 order-2 order-md-1 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="largest broker"
            className="img-fluid"
            style={{ maxWidth: "85%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
