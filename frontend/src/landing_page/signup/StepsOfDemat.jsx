import React from "react";
import "../../assets/css/signup.css";

function StepsOfDemat() {
  return (
    <div className="div bg-gray py-md-5 py-5 text-md-center mt-md-5 mt-5 ">
      <div className="container pb-md-5">
        <h3 className="ms-md-0 ms-3 mb-md-2 mb-4 fw-medium fw-bolder ">
          Steps to open a demat account with Zerodha
        </h3>
        <div className="row px-md-5">
          <div className="col-md-6 col-12 ps-md-5 pe-md-5 ms-md-5 mt-md-5">
            <div className="div">
              <img src="../../../public/media/images/tutorial.svg" alt="" />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="row d-flex flex-row mt-md-5 ">
              <div className="div d-flex flex-lg-row  justify-content-start ">
                <p className="border border-black border-opacity-50 px-2  py-0 ms-md-0 rounded-circle fs-6 mt-md-4">
                  01
                </p>
                <p className="ms-md-4 ms-2 fs-5 fw-bold">
                  Enter the requested details
                </p>
              </div>
            </div>
            <div className="div border border-1 border-black border-opacity-10 mx-md-0 mx-3  "></div>
            <div className="row d-flex flex-row mt-md-0 ">
              <div className="div d-flex flex-lg-row  justify-content-start ">
                <p className="border border-black border-opacity-50 px-md-2 px-2 py-md-0 py-0  ms-md-0 rounded-circle fs-6 mt-md-4">
                  02
                </p>
                <p className="ms-md-4 ms-2 fs-5 fw-bold">
                  Complete e-sign & verification
                </p>
              </div>
            </div>
            <div className="div border border-1 border-black border-opacity-10 mx-md-0 mx-3 "></div>
            <div className="row d-flex flex-row mt-md-0 ">
              <div className="div d-flex flex-lg-row  justify-content-start ">
                <p className="border border-black border-opacity-50 px-2 py-0  ms-md-0 rounded-circle fs-6 mt-md-4">
                  03
                </p>
                <p className="ms-md-4 ms-2 fs-5 fw-bold">Start investing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsOfDemat;
