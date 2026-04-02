import React from "react";
import Signup from "./Signup";
import DematAccount from "./DemateAccount";
import StepsOfDemat from "./StepsOfDemat";
import DiffAccount from "./DiffAccount";
import Openaccount from "../Openaccount";

function Signuppage() {
  return (
    <>
      <Signup></Signup>
      <div className="container px-md-5 mt-md-0 mt-5 ">
      <h3 className="text-md-center text-start px-md-0 ps-3 py-md-5 py-3 mt-md-5 mb-md-4 ">Investment options with Zerodha demat account</h3>

        <div className="row mx-md-0 mx-1">
          <div className="col-md-6 col-12">
            <DematAccount
              image={"../../../public/media/images/stocks-acop.svg"}
              demateType={"Stock"}
              demateDiscription={"Invest in all exchange-listed securities"}
            ></DematAccount>
            </div>
            <div className="col-md-6 col-12">
            <DematAccount
              image={"../../../public/media/images/mf-acop.svg"}
              demateType={"Mutual funds"}
              demateDiscription={"Invest in commission-free direct mutual funds"}
            ></DematAccount>
          </div>
        </div>
        <div className="row mx-md-0 mx-1">
          <div className="col-md-6 col-12">
            <DematAccount
              image={"../../../public/media/images/ipo-acop.svg"}
              demateType={"IPO"}
              demateDiscription={"Apply to the latest IPOs instantly via UPI"}
            ></DematAccount>
            </div>
            <div className="col-md-6 col-12">
            <DematAccount
              image={"../../../public/media/images/fo-acop.svg"}
              demateType={"Futures & options"}
              demateDiscription={"Hedge and mitigate market risk through simplified F&O trading"}
            ></DematAccount>
          </div>
        </div>
        <div className="row text-center mt-md-5">
            <div className="col">
            <button className="btn btn-primary fs-5 px-md-5 px-3 mt-md-0 mt-3">
                Explore Investments
            </button>
            </div>
        </div>
      </div>
      <StepsOfDemat></StepsOfDemat>
      <DiffAccount></DiffAccount>
      <Openaccount></Openaccount>
    </>
  );
}

export default Signuppage;
