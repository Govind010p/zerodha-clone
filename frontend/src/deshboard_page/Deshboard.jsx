import React, { useState, useEffect } from "react";
import "../assets/css/deshboard.css";
import axios from "axios";
import socket from "../socket";

function Deshboard() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [userInfo, setUserinfo] = useState("");
  const [marketStatus, setmarketStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-lkju.onrender.com/api/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUserinfo(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-lkju.onrender.com/api/holding/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    socket.on("marketStatus", (data) => {
      setmarketStatus({
        holiday: data.holiday,
        isOpen: data.isOpen,
      });
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    socket.on("priceUpdateHolding", (data) => {
      setAllHoldings((prevStocks) =>
        prevStocks.map((stock) => {
          const newPrice = data[stock.symbol];
          if (newPrice !== undefined) {
            return {
              ...stock,
              currentPrice: newPrice,
            };
          }
          return stock;
        }),
      );
    });

    return () => {
      socket.off("priceUpdateHolding");
    };
  }, []);

  const totalInvest = allHoldings.reduce((sum, stock) => {
    return sum + stock.qty * stock.avg;
  }, 0);

  const currentValue = allHoldings.reduce((sum, stock) => {
    return sum + (stock.currentPrice ?? stock.avg) * stock.qty;
  }, 0);

  const totalProfitOrLoss = currentValue - totalInvest;
  const totalProfitPercent = (totalProfitOrLoss / totalInvest) * 100;
  const isTotalProfitClass = totalProfitOrLoss >= 0 ? "profit" : "loss";

  return (
    <div className="div p-md-1 p-3">
      <div className="row py-md-4 px-md-4">
        <div className="div d-flex justify-content-between">
          <h4 className="ms-md-3">Hi, {userInfo?.username}</h4>
          <h6 className="border px-3 py-2 rounded-5 bg-gray text-secondary desk-w">
            Market Status :
            {loading ? (
              <span className="loading-dots ms-1"> Loading</span>
            ) : (
              <>
                <span
                  className={
                    marketStatus?.isOpen ? "text-success" : "text-danger "
                  }
                >
                  {marketStatus?.isOpen ? " Open (Live)" : " Close"}
                </span>

                {marketStatus?.holiday && (
                  <span className="text-danger"> (Holiday)</span>
                )}
              </>
            )}
          </h6>
        </div>
        <div className="div pe-0 border"></div>
      </div>
      <div className="row p-md-5 p-3 mt-md-0 mt-3">
        <div className="col-md-6 col-12">
          <div className="row border rounded py-md-4 px-md-3 px-2 py-4">
            <div className="col">
              <div className="div">
                <h4 className="trade-head">
                  <i class="fa fa-pie-chart" aria-hidden="true"></i> Equity
                </h4>
                <p className="margin-amount text-success">1 L</p>
                <p className="text-muted">Margin Available</p>
              </div>
            </div>
            <div className="col">
              <div className="div">
                <p className="text-muted py-md-1 py-1 fs-less">
                  margin used :
                  <span className="fs-6 ms-2 fw-bold ">0</span>{" "}
                </p>
                <p className=" text-muted py-md-1 py-0 fs-less">
                  Opening balance:{" "}
                  <span className="fs-6 ms-0 fw-bold">1 L</span>{" "}
                </p>
                <p className="text-primary py-md-1 py-1 fs-less ">
                  View statement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row border rounded py-md-4 px-md-3 px-2 py-4 ms-md-2 mb-md-3 mt-md-0 mt-4">
            <div className="col">
              <div className="div">
                <h4 className="trade-head">
                  <i class="fa fa-tint fs-3" aria-hidden="true"></i> Commodity
                </h4>
                <p className="margin-amount text-success">50K</p>
                <p className="text-muted">Margin Available</p>
              </div>
            </div>
            <div className="col">
              <div className="div">
                <p className="text-muted py-md-1 py-1 fs-less">
                  margin used :<span className="fs-6 ms-2 fw-bold ">0</span>
                </p>
                <p className=" text-muted py-md-1 py-0 fs-less">
                  Opening balance:
                  <span className="fs-6 ms-0 fw-bold"> 50K</span>
                </p>
                <p className="text-primary py-md-1 py-1 fs-less ">
                  View statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div border display-none-mobile"></div>
      <div className="row py-md-4 px-md-4 px-3 py-4 ms-md-2 mb-md-3 mt-md-0 mt-4">
        <div className="col-md-8 ">
          <div className="row border rounded py-md-4 py-4 ">
            <div className="col">
              <div className="div">
                <h4 className="trade-head fs-5">
                  <i class="fa fa-briefcase fs-5" aria-hidden="true"></i>{" "}
                  Holdings({allHoldings.length})
                </h4>
                <p
                  className={`${isTotalProfitClass} margin-amount text-success mt-md-3 mt-3`}
                >
                  {totalProfitOrLoss.toFixed(2)}
                  <span className={`${isTotalProfitClass} fs-small`}>
                    ({totalProfitPercent.toFixed(2)}%)
                  </span>
                </p>
                <p className="text-muted ms-md-4 ms-3">P&L</p>
              </div>
            </div>
            <div className="col">
              <div className="div">
                <p className="text-muted py-md-1 py-1 fs-less">
                  <span className="fs-6 ms-2 fw-bold "></span>
                </p>
                <p className={`text-muted py-md-1 py-0 fs-less`}>
                  Current value:
                  <span className={`fs-6 ms-0 fw `}>
                    &nbsp;{currentValue.toFixed(2)}
                  </span>
                </p>
                <p className="text-muted py-md-1 py-1 fs-less ">
                  Investment :{" "}
                  <span className="fs-6 ms-0 ">
                    &nbsp;{totalInvest.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshboard;
