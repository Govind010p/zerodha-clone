import React from "react";
import "../assets/css/app.css";

const Apps = () => {
  const handleExploreApps = () => {
    alert("Other apps and services are under development");
  };

  return (
    <div className="container apps-container">
      <div className="shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="mb-3">Apps & Services</h2>

        <p>
          Explore a range of apps and services designed to enhance your trading
          and investment experience. From advanced analytics tools to portfolio
          trackers, this section will soon offer powerful features.
        </p>

        <p>
          This area is currently under development. More apps and services will
          be available soon to help you trade smarter and faster.
        </p>

        <button className="btn btn-secondary mt-3" onClick={handleExploreApps}>
          Explore Apps
        </button>
      </div>
    </div>
  );
};

export default Apps;
