import React, { useContext } from "react";
// import {tooltip, Grow} from '@mui/material';
import "../assets/css/watchListNav.css";
import WatchListNav from "./WatchListNav";
import { watchlist } from "../Data/data";
import WatchlistItem from "./WatchlistItem";
// import socket from "../socket.js";
// import axios from "axios";
import GeneralContext  from "./GeneralContext";

function WatchList() {
  const {stockData  } = useContext(GeneralContext);

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
          <span className="count pe-md-0 pe-2 mt-2">{watchlist.length}/50</span>
        </div>
      </div>
      <div className="div border page-content-watchlist"></div>
      <div className="mt-3 p-md-0 ps-2">
        <ul className="watchlist">
          {stockData.map((stock, index) => {
            return <WatchlistItem stock={stock} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default WatchList;
