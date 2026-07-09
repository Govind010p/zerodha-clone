import React from "react";
import "../../assets/css/stats.css";
import "../../assets/css/home.css";

function Stats() {
  return (
    <div className="container p-md-5 px-md-4 px-3">
      <div className="row mt-5 m-md-0 m-1 mobile-bordered">
        <div className="col-md-6 col-12 px-md-5 py-md-5 px-3 py-2 ">
          <h1 className="mb-md-5 mb-4 mt-md-1 mt-4">
            Built for Smarter Trading Experiences
          </h1>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">
            Real-Time Market Engine
          </h4>
          <p className="text-muted ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            Experience live market updates powered by WebSocket technology,
            ensuring synchronized stock prices and instant market movements
            across every connected device.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">
            Secure & Reliable
          </h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            JWT-based authentication, encrypted communication, and secure
            session management provide a safe and dependable trading simulation
            environment.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">
            Interactive Portfolio
          </h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            Track virtual investments, monitor performance, analyze profits and
            losses, and visualize portfolio growth using modern analytics
            dashboards.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">
            Future-Ready AI
          </h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            Designed with an extensible architecture that supports upcoming
            AI-powered investment insights, trend prediction, and smart trading
            recommendations.
          </p>
        </div>

        <div className="col-md-6 col-12 p-md-5 px-3  mt-md-5 mt-0">
          <img
            src="/media/images/ecosystem.png"
            alt="ecosystem image "
            style={{ width: "90%", borderRadius:"30px" }}
          />
          <div className="text-center flex-link">
            <a
              className="mx-md-5 mx-2 mb-3"
              style={{ textDecoration: "none" }}
              href=""
            >
              Explore our product{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="mb-5" style={{ textDecoration: "none" }} href="">
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
