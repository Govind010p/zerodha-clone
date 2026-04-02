import React from "react";
import "../../assets/css/support.css"

function Hero() {
  return (
    <div className="bg-light py-3 px-4 text-center px-md-5">
      <div class="container d-flex justify-content-between px-md-4 py-md-5 py-4">
        <div>
          <h2>Support Portal</h2>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary px-md-3 me-2"
            style={{ backgroundColor: "#397DD0" }}
          >
            My tickets
          </button>
        </div>
      </div>
      <div
        className="container bg-white 
                      d-flex align-items-center
                      px-3 px-md-4 py-2 py-md-4 mb-5"
      >
        <i className="fa fa-search fs-5 text-muted me-md-3"></i>

        <input
          type="text"
          className="form-control border-0 shadow-none  fs-md-5"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
        />
      </div>
    </div>
  );
}

export default Hero;
