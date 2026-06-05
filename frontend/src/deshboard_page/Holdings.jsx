import React, { useState, useEffect } from "react";
import "../assets/css/holdings.css";
import axios from "axios";
import socket from "../socket";

// Safe number helper — avoids .toFixed() crashes on undefined/null/NaN
const safe = (val, fallback = 0) => {
  const n = Number(val);
  return isFinite(n) ? n : fallback;
};

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(
          "https://zerodha-clone-lkju.onrender.com/api/holding/allHoldings",
          { withCredentials: true },
        );
        if (Array.isArray(res.data)) {
          setAllHoldings(res.data);
        } else {
          console.warn("Invalid holdings data:", res.data);
          setAllHoldings([]);
        }
      } catch (err) {
        console.error("Failed to fetch holdings:", err);
        setAllHoldings([]);
      }
    };
    fetchHoldings();
  }, []);

  useEffect(() => {
    const handler = (data) => {
      setAllHoldings((prevStocks) =>
        prevStocks.map((stock) => {
          const newPrice = data[stock.symbol];
          if (newPrice !== undefined) {
            return { ...stock, currentPrice: newPrice };
          }
          return stock;
        }),
      );
    };

    socket.on("priceUpdateHolding", handler);
    return () => socket.off("priceUpdateHolding", handler); // BUG FIX: pass handler ref so only THIS listener is removed
  }, []);

  // ─── Summary calculations ───────────────────────────────────────────────────

  const totalInvest = allHoldings.reduce(
    (sum, stock) => sum + safe(stock.qty) * safe(stock.avg),
    0,
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) =>
      sum + safe(stock.currentPrice ?? stock.avg) * safe(stock.qty),
    0,
  );

  const today = new Date().toDateString();

  const daysPL = allHoldings.reduce((sum, stock) => {
    const price = safe(stock.currentPrice ?? stock.avg);
    const boughtToday = new Date(stock.buyDate).toDateString() === today;
    // FIX: guard prevClose — fall back to avg so we never subtract undefined
    const basePrice = boughtToday
      ? safe(stock.avg)
      : safe(stock.prevClose, safe(stock.avg));
    const change = price - basePrice;
    return sum + change * safe(stock.qty);
  }, 0);

  const daysPLClass = daysPL >= 0 ? "profit" : "loss";

  // FIX: guard division-by-zero (previousValue can be 0)
  const previousValue = currentValue - daysPL;
  const dayPercent =
    previousValue !== 0 ? ((daysPL / previousValue) * 100).toFixed(2) : "0.00";

  const totalProfitOrLoss = currentValue - totalInvest;
  const totalProfitPercent =
    totalInvest > 0 ? (totalProfitOrLoss / totalInvest) * 100 : 0;
  const isTotalProfitClass = totalProfitOrLoss >= 0 ? "profit" : "loss";

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="div container" style={{ height: "100vh" }}>
      <div className="row px-md-5 px-3 py-md-0 py-2">
        <h4>Holdings({allHoldings.length})</h4>
      </div>
      <div className="div mt-md-2 border"></div>

      <div className="row mt-md-2">
        <div className="col-md-6 col-12 px-md-5 py-md-2 pe-md-4 px-4 py-3">
          <div className="row">
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Total investment</p>
              <h5>{totalInvest.toFixed(2)}</h5>
            </div>
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Current value</p>
              <h5>{currentValue.toFixed(2)}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 px-md-5 ps-md-0 py-md-2 px-4 py-0">
          <div className="row">
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Day's P&L</p>
              <h5 className={daysPLClass}>
                {daysPL.toFixed(2)}
                <span className={`${daysPLClass} fs-6`}>({dayPercent}%)</span>
              </h5>
            </div>
            <div className="col-md-6 col-6 border bg-body-tertiary rounded gx-md-5 py-md-1 py-2 holding-container">
              <p className="p-md-0 m-md-0 m-0 mb-md-1 mb-2">Total P&L</p>
              <h5 className={isTotalProfitClass}>
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

      {/* ── Desktop table ── */}
      <div className="row px-md-4 py-md-3 display-none-mobile">
        <table className="px-md-0 py-md-3">
          <thead className="border">
            <tr className="px-md-0 py-md-5">
              {[
                "Instrument",
                "Qty.",
                "Avg. price",
                "Current price",
                "Current value",
                "P&L",
                "Net Gain",
                "Day chg.",
              ].map((h) => (
                <th
                  key={h}
                  className="ps-md-2 py-md-2 border-1 border-end-1 text-muted fw-normal"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const price = safe(stock.currentPrice ?? stock.avg);
              const avg = safe(stock.avg);
              const qty = safe(stock.qty);
              const curValue = price * qty;
              const profit = curValue - avg * qty;
              const perShareProfit = qty !== 0 ? profit / qty : 0;
              const netprofitPercent =
                avg * qty !== 0 ? (profit / (avg * qty)) * 100 : 0;
              const profClass = profit >= 0 ? "profit" : "loss";

              const boughtToday =
                new Date(stock.buyDate).toDateString() ===
                new Date().toDateString();
              // FIX: guard prevClose
              const basePrice = safe(
                boughtToday ? avg : (stock.prevClose ?? avg),
                avg,
              );
              const dayValue = price - basePrice;
              const dayChangePercent =
                basePrice !== 0 ? (dayValue / basePrice) * 100 : 0;
              const dayClass = dayValue >= 0 ? "profit" : "loss";

              return (
                <tr key={index} className="px-md-0 py-md-5">
                  <td className="ps-md-2 py-md-2 border border-end-1 text-muted fw-normal">
                    {stock.displayName}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {qty}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {avg.toFixed(2)}
                  </td>
                  <td className="ps-md-3 py-md-2 border border-end-1 text-muted fw-normal">
                    {price.toFixed(2)}
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
          <tfoot />
        </table>
      </div>

      {/* ── Mobile cards ── */}
      <div className="d-md-none mt-3">
        {allHoldings.map((stock, index) => {
          const price = safe(stock.currentPrice ?? stock.avg);
          const avg = safe(stock.avg);
          const qty = safe(stock.qty);
          const curValue = price * qty;
          const profit = curValue - avg * qty;
          const profClass = profit >= 0 ? "profit" : "loss";

          // FIX: was crashing because prevClose could be undefined
          const prevClose = safe(stock.prevClose, avg);
          const dayDiff = price - prevClose;
          const dayclass = dayDiff >= 0 ? "profit" : "loss";

          return (
            <div key={index} className="border rounded px-3 py-1 mb-2">
              <div className="d-flex justify-content-between text-muted small">
                <span>Qty. {qty}</span>
                {/* FIX: was stock.currentPrice.toFixed(2) — crashed on undefined */}
                <span>LTP {price.toFixed(2)}</span>
              </div>
              <div className="fw-semibold mt-0">
                {stock.symbol} <span className="text-muted small">NSE</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-0">
                <div className="text-muted small">₹{avg.toFixed(2)}</div>
                <div className="text-end">
                  <div className={`small ${dayclass}`}>
                    {dayDiff.toFixed(2)}
                  </div>
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
