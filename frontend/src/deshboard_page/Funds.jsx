import React from "react";
import "../assets/css/funds.css";

function Funds() {
  const handleAddFunds = () => {
    alert("Adding funds are under development");
  };

  return (
    <div className="container funds-container">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="mb-3">Funds</h2>

        <p>
          Manage your investment funds easily from this page. Here, you will be
          able to add money to your account, track your available balance, and
          ensure you are always ready to invest in the market.
        </p>

        <p>
          This section is currently under development, and more features will be
          added soon to give you a seamless funding experience.
        </p>

        <button className="btn btn-secondary mt-3 " onClick={handleAddFunds}>
          Add Funds
        </button>
      </div>
    </div>
  );
}

export default Funds;


