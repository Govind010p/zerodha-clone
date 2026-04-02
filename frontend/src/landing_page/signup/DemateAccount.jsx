import React from "react";
import "../../assets/css/signup.css";

function DematAccount({ image, demateType, demateDiscription }) {
  return (
    <div className="container px-md-5 py-md-3 my-md-0 my-3 ">
      <div className="row px-md-5">
        <div className="col-md-12 ">
          <div className="row">
            <div className="col-3 d-flex align-content-center ">
              <div className="div">
                <img className=" image-mobile" src={image} alt="image" />
              </div>
            </div>
            <div className="col-9 d-flex align-content-center">
              <div className="row ms-md-5">
                <h4 className="dematetype-h2 ms-md-0 ms-3">{demateType}</h4>
                <p className="ms-md-0 ms-3 small-para fs-6 text-muted">{demateDiscription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DematAccount;
