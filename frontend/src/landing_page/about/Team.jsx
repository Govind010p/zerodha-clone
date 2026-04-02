import React from "react";
import "../../assets/css/about.css";
import "../../assets/css/home.css";

function Team() {
  return (
    <div className="container text-center me-md-auto px-md-0 py-md-0 py-2 px-4 ps-md-0 ps-3">
      <div className="div mobile-bordered py-md-0 py-5">
        <div className="row p-md-3 p-0 mt-md-5 mt-2  ">
          <h2>People</h2>
        </div>
        <div className="row ms-md-5">
          <div className="col-1 ms-md-5"></div>
          <div className="col-md-3 col-12 founder-profile text-center ">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="founder of zerodha"
              className="founder-img founder-img-mobile"
            />
            <h5 className="mt-md-2 pb-md-1 pb-0 ms-md-5 ms-0 mt-0">
              Nithin Kamath
            </h5>
            <p className="text-muted ms-md-5 ms-0 position-up">Founder, CEO</p>
          </div>
          <div className="col-md-6 col-12 text-start about-founder-para p-md-3 px-4">
            <p className="para-fontsize-mobile margin-start-none">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="para-fontsize-mobile margin-start-none">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="para-fontsize-mobile margin-start-none">Playing basketball is his zen.</p>
            <p className="para-fontsize-mobile margin-start-none">
              Connect on{" "}
              <span>
                <a href="/">Homepage</a>
              </span>
              /{" "}
              <span>
                <a href="#">TradingQnA</a>
              </span>
              /{" "}
              <span>
                <a href="#">Twitter</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
