import React from "react";
import UniversTools from "./UniversTools";
import { useNavigate } from "react-router-dom";

function Univers() {
  const navigate = useNavigate();
  return (
    <div className="container text-center p-md-0 p-3">
      <div className="row text-center">
        <h4 className="text-muted mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <span style={{ color: "#0a8ac5ff" }}>Zerodha.tech </span>blog.
        </h4>
        <h2 className="mt-5">The Zerodha Universe</h2>
        <p className="ms-0">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row ms-0">
          <div className="col-md-4 col-12 ">
            <div className="row mobile-bordered">
              <UniversTools
                imageUrl={"/media/images/zerodhaFundhouse.png"}
                Link={"#"}
                ToolDescription={
                  "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                }
              ></UniversTools>
              <UniversTools
                imageUrl={"/media/images/streakLogo.png"}
                Link={"#"}
                ToolDescription={
                  "Systematic trading platform that allows you to create and backtest strategies without coding."
                }
              ></UniversTools>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="row mobile-bordered">
              <UniversTools
                imageUrl={"/media/images/sensibullLogo.svg"}
                Link={"#"}
                ToolDescription={
                  "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
                }
              ></UniversTools>
              <UniversTools
                imageUrl={"/media/images/smallcaseLogo.png"}
                Link={"#"}
                ToolDescription={
                  "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
                }
              ></UniversTools>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="row mobile-bordered">
              <UniversTools
                imageUrl={"/media/images/smallcaseLogo.png"}
                Link={"#"}
                ToolDescription={
                  "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                }
              ></UniversTools>
              <UniversTools
                imageUrl={"/media/images/dittoLogo.png"}
                Link={"#"}
                ToolDescription={
                  "Personalized advice on life and health insurance. No spam and no mis-selling."
                }
              ></UniversTools>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary btn btn-primary text-center w-50 w-auto px-md-5 px-4 py-md-2 py-2 mt-md-3 mt-5 "
          style={{ width: "20%", margin: "0 auto", fontSize: "1.15rem" }}
          onClick={() => navigate("/signup")}  
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Univers;
