import React from "react";
import "../../assets/css/signup.css";

function SingleTypeAcc({ heading, discription, icon }) {
  return (
    <div className="div container border rounded ps-md-4 ps-4 py-2 py-md-0 mb-md-5 mb-4 ms-md-5 my-md-5 width-pc-mobile singlecontainer">
      <div className="div fs-3 icon-position icon-position-mobile">{icon}</div>
      <h4 className="fs-5 mb-md-2 ms-md-2 ms-2">{heading}</h4>
      <p className="ms-md-2 ms-2 mt-md-0 text-muted  fs-6">{discription}</p>
    </div> 
  );
}

export default SingleTypeAcc;
