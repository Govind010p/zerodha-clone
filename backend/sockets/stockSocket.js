const WebSocket = require("ws");
const { marketStatus } = require("../Controllers/stockController");
const API_KEY = process.env.FINNHUB_API_KEY;

let ws;

function connectFinnhub(io) {
  ws = new WebSocket(`wss://ws.finnhub.io?token=${API_KEY}`);

  const symbols = [
    "BINANCE:BTCUSDT",
    "BINANCE:ETHUSDT",
    "BINANCE:BNBUSDT",
    "BINANCE:SOLUSDT",
    "AAPL",
    "MSFT",
    "GOOGL",
    "NVDA",
    "META",
    "AMZN",
    "TSLA",
    "AMD",
    "INTC",
    "JPM",
    "BAC",
    "WFC",
    "GS",
    "MS",
    "C",
    "AXP",
    "BLK",
    "WMT",
    "COST",
    "HD",
    "NKE",
    "MCD",
    "SBUX",
    "TGT",
    "LOW",
    "JNJ",
    "PFE",
    "MRK",
    "ABBV",
    "LLY",
    "GILD",
    "TMO",
    "XOM",
    "CVX",
    "BA",
    "CAT",
    "GE",
    "HON",
  ];

  ws.on("open", () => {
    console.log("Connected to Finnhub WebSocket");

    symbols.forEach((symbol) => {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          symbol,
        }),
      );
    });
  });

  let latestPrices = {};
  let latestIndexPoints = {};

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);
      // console.log(data.data);
      if (data.data) {
        data.data.forEach((trade) => {
          const symbol = trade.s;
          const price = trade.p;
          latestPrices[symbol] = price;
        });
      }
    } catch (err) {
      console.error("Error parsing message:", err);
    }
  });

  // Send to frontend users via Socket.io
  setInterval(() => {
    io.emit("priceUpdateBatch", latestPrices);
    io.emit("priceUpdateHolding", latestPrices);
  }, 1000);

  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
       ws.ping();
    }
  }, 30000);

setInterval(async () => {
  try {
    const status = await marketStatus();
    io.emit("marketStatus", status);
  } catch (err) {
    console.error("Failed to fetch market status:", err.message);
  }
}, 60000);

 ws.on("close", () => {
  console.log("Finnhub connection closed. Reconnecting...");
  setTimeout(() => connectFinnhub(io), 3000);
});

  ws.on("error", (err) => {
    console.error("Finnhub error:", err.message);
  });
}

module.exports = connectFinnhub;
