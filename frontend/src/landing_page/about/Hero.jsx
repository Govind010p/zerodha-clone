import React from "react";
import '../../assets/css/about.css';
import '../../assets/css/home.css';

function Hero() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-md-8 p-md-5 p-1 text-start ">
          <h3 className="p-md-5 px-5 py-3">
            We poineered the discount broking model in India. Now, we are
            breaking ground with our technology.
          </h3>
        </div>
        <div className="col-2"></div>
      </div>
      <div
        className="row border-top mb-5 text-center"
        style={{
          height: "1px",
          backgroundColor: "grey",
          width: "85%",
          justifySelf: "center",
        }}
      ></div>
      <div className="row mb-5 px-md-0 py-md-0 px-3">
        <div className="col-1"></div>
        <div className="col-md-5 col-12 me-md-1 px-md-1 py-md-0 px-3 py-1 ms-md-0  text-start about-page-para mobile-bordered">
          <p className="ms-md-2 ms-0 p-md-0 p-3">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier. Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India. Over 1.6+
            crore clients place billions of orders every year through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-md-5 col-12 me-md-1 px-md-1 py-md-0 px-3 py-1 ms-md-0 mt-md-0 mt-3 text-start about-page-para mobile-bordered">
          <p className="ms-md-2 ms-0">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
