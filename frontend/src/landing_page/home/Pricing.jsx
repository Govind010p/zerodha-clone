import React from "react";
import '../../assets/css/home.css';

function Pricing() {
  return (
    <div className="container p-md-5 mt-md-2 mt-5 px-md-4 px-3 ">
      <div className="row p-md-5 p-4 mx-md-0 mx-1 mobile-bordered">
        <div className="col-md-5 col-12">
          <h2 className="px-md-0 px-1 mt-md-0 mt-4">Unbeatable pricing</h2>
          <p className="mt-md-4 mt-2 ms-md-0 ms-1 para-fontsize-mobile">
            We pionneered the concept of discount broking and price transparency
            in india. Flat fees and no hidden charges
          </p>
          <a className="para-fontsize-mobile align-content-center py-4" style={{ textDecoration: "none" }} href="">
            See pricing&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-2 "></div>
        <div className="col-md-5 col-12 mt-md-0 mt-4">
          <div className="row">
            <div className="col border text-center px-md-3 py-md-3 px-0 py-0">
              <h2 className="mt-md-0 mt-4">₹0</h2>
              <p className="mt-2 para-fontsize-mobile px-md-0 pe-3">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border px-md-3 py-md-4 px-0 py-0 text-center">
              <h2 className="mt-md-0 mt-4">₹20</h2>
              <p className="mt-2 para-fontsize-mobile px-md-0 pe-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
