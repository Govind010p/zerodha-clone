import React, { useState, useEffect} from "react";
import "../assets/css/holdings.css";
import axios from "axios";
import socket from "../socket";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/holding/allHoldings", {
        withCredentials: true,
      })
      .then((res) => {
        setAllHoldings(res.data);
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
  });

  const totalInvest = allHoldings.reduce((sum, stock) => {
    return sum + stock.qty * stock.avg;
  }, 0);

  const currentValue = allHoldings.reduce((sum, stock) => {
    return sum + stock.currentPrice * stock.qty;
  }, 0);

  const today = new Date().toDateString();
  const daysPL = allHoldings.reduce((sum, stock) => {
    const boughtToday = new Date(stock.buyDate).toDateString() === today;
    const basePrice = boughtToday ? stock.avg : stock.prevClose;
    const change = stock.currentPrice - basePrice;
    return sum + change * stock.qty;
  }, 0);

  const daysPLClass = daysPL >= 0 ? "profit" : "loss";

  const dayChange = (currentValue, daysPL) => {
    const previousValue = currentValue - daysPL;
    return (daysPL / previousValue) * 100;
  };

  const dayPercent = dayChange(currentValue, daysPL).toFixed(2);

  const totalProfitOrLoss = currentValue - totalInvest;
  const totalProfitPercent = (totalProfitOrLoss / totalInvest) * 100;
  const isTotalProfitClass = totalProfitOrLoss >= 0 ? "profit" : "loss";

  return (
    <div className="div container" style={{ height: "100vh" }}>
      <div className="row px-md-5 px-3 py-md-0 py-2">
        <h4>Holdings({allHoldings.length})</h4>
      </div>
      <div className="div mt-md-2  border"></div>

      <div className="row mt-md-2">
        <div className="col-md-6 col-12 px-md-5 py-md-2 pe-md-4 px-4 py-3">
          <div className="row">
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Total investment</p>
              <h5> {totalInvest.toFixed(2)}</h5>
            </div>
            <div className="col-md-6 col-6 border bg-body-tertiary  rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Current value</p>
              <h5> {currentValue.toFixed(2)}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 px-md-5 ps-md-0 py-md-2 px-4 py-0">
          <div className="row">
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Day's P&L</p>
              <h5 className={`${daysPLClass}`}>
                {daysPL.toFixed(2)}
                <span className={`${daysPLClass} fs-6`}>({dayPercent}%)</span>
              </h5>
            </div>
            <div className="col-md-6 col-6 border bg-body-tertiary  rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Total P&L</p>
              <h5 className={`${isTotalProfitClass}`}>
                {totalProfitOrLoss.toFixed(2)}
                <span className={`${isTotalProfitClass} fs-6`}>
                  ({totalProfitPercent.toFixed(2)}%)
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="div border mt-md-2 mt-4"></div>
      <div className="row px-md-4 py-md-3 display-none-mobile">
        <table className="px-md-0 py-md-3">
          <thead className="border">
            <tr className="px-md-0 py-md-5">
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Instrument
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Qty.
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Avg. price
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Current price
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Current value
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                P&L
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Net Gain
              </th>
              <th className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal">
                Day chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.currentPrice * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const perShareProfit = profit / stock.qty;
              const netprofitPercent = (profit / (stock.avg * stock.qty)) * 100;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const boughtToday =
                new Date(stock.buyDate).toDateString() ===
                new Date().toDateString();
              const basePrice = boughtToday ? stock.avg : stock.prevClose;
              const dayValue = stock.currentPrice - basePrice;
              const dayChangePercent = (dayValue / basePrice) * 100;
              const dayClass = dayValue >= 0 ? "profit" : "loss";

              return (
                <tr key={index} className="px-md-0 py-md-5">
                  <td className="ps-md-2 py-md-2 border border-end-1 text-muted fw-normal">
                    {stock.displayName}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {stock.qty}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {stock.currentPrice.toFixed(2)}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {curValue.toFixed(2)}
                  </td>
                  <td
                    className={`ps-md-3 py-md-2 border border-end-1 text-muted fw-normal ${profClass}`}
                  >
                    {profit.toFixed(2)}
                  </td>
                  <td
                    className={`ps-md-3 py-md-2 border border-end-1 text-muted fw-normal ${profClass}`}
                  >
                    {perShareProfit.toFixed(2)} ({netprofitPercent.toFixed(2)}%)
                  </td>
                  <td
                    className={`ps-md-3 py-md-2 border border-end-1 text-muted fw-normal ${dayClass}`}
                  >
                    {dayValue.toFixed(2)} ({dayChangePercent.toFixed(2)}%)
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

      {/* for the mobile screen  */}
      <div className="d-md-none mt-3">
        {allHoldings.map((stock, index) => {
          const curValue = stock.currentPrice * stock.qty;
          const profit = curValue - stock.avg * stock.qty;
          const profClass = profit >= 0 ? "profit" : "loss";
          const dayclass =
            stock.currentPrice - stock.prevClose >= 0 ? "profit" : "loss";

          return (
            <div key={index} className="border rounded px-3 py-1 mb-2">
              <div className="d-flex justify-content-between text-muted small">
                <span>Qty. {stock.qty}</span>
                <span>LTP {stock.currentPrice.toFixed(2)}</span>
              </div>

              <div className="fw-semibold mt-0">
                {stock.symbol} <span className="text-muted small">NSE</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-0">
                <div className="text-muted small">₹{stock.avg.toFixed(2)}</div>

                <div className={`text-end`}>
                  <div className={`small ${dayclass}`}>stock day</div>
                  <div className={`fw-semibold ${profClass}`}>
                    {profit.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Holdings;
