import React from "react";
import "../assets/css/position.css";
import "../assets/css/holdings.css";

function Positions() {

  return (
          <div className="div" style={{ paddingTop: "20%" }}>
        <div className="container mt-5 d-flex text-center justify-content-center h-100 align-content-center">
          <div className="row mb-5">
            <div className="col">
              <form action="#">
                <h3>No active Postions found </h3>
                <p>Open The F&O or Equity Intraday Account </p>
                <button className="btn btn-primary">
                  Activate F&O or Intraday
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Positions;
