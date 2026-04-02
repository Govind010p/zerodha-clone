import React from "react";
import SingleTypeAcc from "./singleTypeAcc";
import "../../assets/css/signup.css";


function DiffAccount() {
  return (
    <div className="container">
      <h3 className="text-md-center text-start  pt-md-3 mt-md-5 mb-md-0 pb-md-2 py-5 px-3 bold-text-mobile">Explore different account types</h3>
      <div className="row px-md-5">
        <div className="col-md-4 col-12">
          <SingleTypeAcc
            heading={"Individual Account "}
            discription={"Invest in equity, mutual funds and derivatives"}
            icon={<i class="fa fa-user" aria-hidden="true"></i>}
          ></SingleTypeAcc>
        </div>
        <div className="col-md-4 col-12">
          <SingleTypeAcc
            heading={"HUF Account"}
            discription={"Make tax-efficient investments for your family"}
            icon={<i class="fa fa-users fs-4" aria-hidden="true"></i>}
          ></SingleTypeAcc>
        </div>
        <div className="col-md-4 col-12">
          <SingleTypeAcc
            heading={"NRI Account"}
            discription={"Invest in equity, mutual funds, debentures, and more"}
            icon={<i class="fa fa-globe" aria-hidden="true"></i>}
          ></SingleTypeAcc>
        </div>
      </div>
      <div className="row px-md-5 ">
        <div className="col-md-4 col-12">
          <SingleTypeAcc
            heading={"Minor Account"}
            discription={"Teach your little ones about money & invest for their future with them"}
            icon={<i class="fa fa-child" aria-hidden="true"></i>}
          ></SingleTypeAcc>
        </div>
        <div className="col-md-4 col-12">
          <SingleTypeAcc
            heading={"Corporate / LLP/ Partnership"}
            discription={"Manage your business surplus and investments easily"}
            icon={<i class="fa fa-building-o fs-4" aria-hidden="true"></i>}
          ></SingleTypeAcc>
        </div>
        
      </div>
    </div>
  );
}

export default DiffAccount;
