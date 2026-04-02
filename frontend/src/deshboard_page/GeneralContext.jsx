import React, { useState, useEffect } from "react";
import socket from "../socket";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [stockData, setStockData] = useState([]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setSellWindowOpen(false);
    setSelectedStockUID("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/watchlist/getWatchlistData", {
        withCredentials: true,
      })
      .then((res) => setStockData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    socket.on("priceUpdateBatch", (data) => {
      // update watchlist
      setStockData((prev) =>
        prev.map((stock) => {
          const newPrice = data[stock.symbol];
          return newPrice !== undefined
            ? { ...stock, currentPrice: newPrice }
            : stock;
        }),
      );

     
    });

    return () => {
      socket.off("priceUpdateBatch");
    };
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        stockData,
        setStockData,
        // allHoldings,
        // setAllHoldings,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
