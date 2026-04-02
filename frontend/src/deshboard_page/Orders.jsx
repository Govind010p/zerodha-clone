import React, { useState, useEffect } from "react";
import "../assets/css/order.css";
import axios from "axios";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/orders/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  return (
    <div className="container py-md-3">
      <h3 className="ms-3 border-bottom mb-4 pb-md-3">Orders</h3>

      {orders.length === 0 ? (
        <div className="text-danger fs-4 not-found-box">No orders found !</div>
      ) : (
        <div className="row ms-3">
          {orders.map((order, index) => {
            return (
              <div className="div border-bottom border-top ms-0 bg-gray rounded-4 mb-2" key={index}>
                <div className="row px-md-1 py-md-1">
                  <div className="col-6">
                    <div className=" ms-0 row">
                      <p className="para-order">{order.displayName}</p>
                    </div>
                    <div className="row">
                      <div className="col">
                        <small className="bage">Qty : {order.qty}</small>
                      </div>
                      <div className="col">
                        {order.mode === "SELL" &&
                        typeof order.profit === "number" ? (
                          <p>
                            P&L :{" "}
                            <span
                              className={`text-profit ${order.profit >= 0 ? "text-success" : "text-danger"}`}
                            >
                              {order.profit.toFixed(2)}
                            </span>
                          </p>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <p className="para-order">Price : {order.OrderPrice}</p>
                    </div>
                    <div className="row">
                      <small
                        className={`bage ${order.mode === "BUY" ? "bg-green" : "bg-red"}`}
                      >
                        {order.mode}
                      </small>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Order;
