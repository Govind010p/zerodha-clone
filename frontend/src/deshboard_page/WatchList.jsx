import React, { useContext } from "react";
// import {tooltip, Grow} from '@mui/material';
import "../assets/css/watchListNav.css";
import WatchListNav from "./WatchListNav";
import { watchlist } from "../Data/data";
import WatchlistItem from "./WatchlistItem";
// import socket from "../socket.js";
// import axios from "axios";
import GeneralContext from "./GeneralContext";

function WatchList() {
  const { stockData } = useContext(GeneralContext);

  const stocks = stockData.filter((item) => item.type === "stock");
  const crypto = stockData.filter((item) => item.type === "crypto");

  return (
    <div className="container row p-0">
      <div className="col-md-3 col-12 top-contant sticky-at-top">
        <div className="div display-none-mobile">
          <WatchListNav></WatchListNav>
        </div>
        <h4 className="display-none-desktop display-on-mobile ms-md-0 ms-4">
          Your Watchlist
        </h4>
        <div className="div mt-2 ms-md-2 ms-4 d-flex align-content-between justify-content-between ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search (infy bse, nifty fut, etc)"
            className="search input-width"
          />
          <span className="count pe-md-0 pe-2 mt-2">{watchlist.length}/60</span>
        </div>
      </div>
      <div className="div border page-content-watchlist"></div>
      <div className="mt-3 p-md-0 ps-2">
        <div className="mt-3 p-md-0 ps-2">
          {crypto.length > 0 && (
            <>
              <div className="badge bg-warning text-dark mb-2 ms-2">Crypto</div>
              <ul className="watchlist">
                {crypto.map((stock, index) => (
                  <WatchlistItem stock={stock} key={`crypto-${index}`} />
                ))}
              </ul>
            </>
          )}
          {stocks.length > 0 && (
            <>
              <div className="badge bg-primary mb-2 ms-2">Stocks</div>
              <ul className="watchlist">
                {stocks.map((stock, index) => (
                  <WatchlistItem stock={stock} key={`stock-${index}`} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
