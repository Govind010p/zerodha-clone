import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "../assets/css/BuyActionWindow.css";
import socket from "../socket";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);

  const { closeSellWindow } = useContext(GeneralContext);

  // Fetch available quantity for this stock
  useEffect(() => {
    if (!uid) return;

    axios
      .get(`http://localhost:3002/api/holding/getQty/${uid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setAvailableQty(res.data.qty);
      })
      .catch((err) => {
        console.error("Error fetching quantity:", err);
      });
  }, [uid]);

  useEffect(() => {
    const handler = (data) => {
      if (data[uid] !== undefined) {
        setStockPrice(data[uid]);
      }
    };

    socket.on("priceUpdateBatch", handler);

    return () => {
      socket.off("priceUpdateBatch", handler);
    };
  }, [uid]);

  const handleSellClick = async () => {
    try {
      console.log("Sell clicked");

      if (stockQuantity > availableQty) {
        alert("You don't have enough quantity to sell!");
        return;
      }

      const res = await axios.post(
        "http://localhost:3002/api/orders/newSellOrder",
        {
          symbol: uid,
          qty: Number(stockQuantity),
          OrderPrice: Number(stockPrice),
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      console.log(res.data);
      alert(res.data.message || "Sell order placed!");
      closeSellWindow();
    } catch (err) {
      console.error("Sell error:", err.response?.data || err.message);
      alert("Sell failed!");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <h5>{uid}</h5>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={availableQty}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          {stockQuantity > availableQty && (
            <div className="NotavailablePera">
              <p className="text-danger ms-0">
                You have {availableQty} stocks to sell
              </p>
            </div>
          )}
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="1"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span className="ms-0">Max Available Qty to sell : { availableQty }</span>
        <div>
          <button
            className="btn btn-blue btn-danger mt-2"
            onClick={handleSellClick}
          >
            SELL
          </button>

          <button
            className="btn btn-grey btn-dark ms-3 mt-2"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
