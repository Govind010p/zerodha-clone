import React, { useState } from "react";
import "../assets/css/watchListNav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WatchlistActions from "./WatchlistActions";

function WatchlistItem({ stock }) {
  const [showWatchlistActions, SetWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    SetWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    SetWatchlistActions(false);
  };

  const percent =
    stock.prevClose > 0
      ? (
          ((stock.currentPrice - stock.prevClose) / stock.prevClose) *
          100
        ).toFixed(2)
      : 0;

  const isDown = percent < 0;

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="watchlist-item"
    >
      <div className="div row border-bottom ms-md-0 py-0 d-flex align-content-center justify-content-center mx-1 ps-md-1">
        <div className="col-4 small">
          <p className={`${isDown ? "loss" : "profit"}`}>
            {stock.displayName}
          </p>
        </div>
        <div className="col-8 text-end pe-1 small d-flex justify-content-end">
          <p>
            <div className="row">
              <div className="col-3">
                <span className={`small ${isDown ? "flash-red" : "flash-green"}`}>{percent}%</span>&nbsp;&nbsp;
              </div>
              <div className="col-2">
                <span>
                  <KeyboardArrowUpIcon
                    className="small"
                    style={{
                      color: isDown ? "red" : "green",
                      transform: isDown ? "rotate(180deg)" : "rotate(0deg)",
                      fill: isDown ? "#ef5350" : "#26a69a",
                      marginLeft : "4px"
                    }}
                  />
                </span>
              </div>
              <div className="col-7">
                <span className={`${isDown ? "loss" : "profit"} `}>
                  {stock.currentPrice}
                </span>
              </div>
            </div>
          </p>
        </div>
        {showWatchlistActions && (
          <WatchlistActions className="add-top" uid={stock.symbol} />
        )}
      </div>
    </li>
  );
}

export default WatchlistItem;
