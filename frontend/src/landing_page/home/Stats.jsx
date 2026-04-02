import React from "react";
import "../../assets/css/stats.css"
import '../../assets/css/home.css';


function Stats() {
  return (
    <div className="container p-md-5 px-md-4 px-3">
      <div className="row mt-5 m-md-0 m-1 mobile-bordered">
        <div className="col-md-6 col-12 px-md-5 py-md-5 px-3 py-2 ">
          <h1 className="mb-md-5 mb-4 mt-md-1 mt-4">Trust with confidence</h1>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">Customer-first always</h4>
          <p className="text-muted ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            That's why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crore
            worth of equity investments.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">No spam or gimmicks</h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">The Zerodha universe</h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="ms-md-2 ms-2 subh4-fontsize-mobile">Do better with money</h4>
          <p className="text-muted  ms-md-2 ms-3 para-fontsize-mobile mb-md-3 mb-4">
            With initiatives like Nudge and kill switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-md-6 col-12 p-md-5 px-3  mt-md-5 mt-0">
          <img
            src="/media/images/ecosystem.png"
            alt="ecosystem image "
            style={{ width: "90%" }}
          />
          <div className="text-center flex-link">
            <a className="mx-md-5 mx-2 mb-3" style={{textDecoration : "none"}} href="">Explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a className="mb-5"  style={{textDecoration : "none"}} href="">Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
