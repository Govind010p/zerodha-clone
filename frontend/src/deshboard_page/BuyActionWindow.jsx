import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "../assets/css/BuyActionWindow.css";
import socket from "../socket";
import { useNavigate } from "react-router-dom";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [userInfo, setUserinfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUserinfo(res.data);
        setLoading(false);
      })
      .catch(() => {
        setUserinfo(null);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    const handlePriceUpdate = (data) => {
      setStockPrice(data[uid]);
    };

    socket.on("priceUpdateBatch", handlePriceUpdate);

    return () => {
      socket.off("priceUpdateBatch", handlePriceUpdate);
    };
  }, [uid]);

  const handleBuyClick = () => {
    if (loading) return;

    if (!userInfo) {
      navigate("/login");
      return;
    }
    axios.post(
      "http://localhost:3002/api/orders/newBuyOrder",
      {
        symbol: uid,
        qty: Number(stockQuantity),
        OrderPrice: Number(stockPrice),
        mode: "BUY",
      },
      {
        withCredentials: true,
      },
    );

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
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
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span className="ms-0">Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-blue btn-primary mt-2"
            onClick={handleBuyClick}
          >
            Buy
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

export default BuyActionWindow;
