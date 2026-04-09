const WebSocket = require("ws");
const { marketStatus } = require("../Controllers/stockController");
const API_KEY = process.env.FINNHUB_API_KEY;

let ws;
let reconnectDelay = 3000;
let priceInterval, pingInterval, statusInterval;
let latestPrices = {};

const symbols = [
  "BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:BNBUSDT", "BINANCE:SOLUSDT",
  "AAPL", "MSFT", "GOOGL", "NVDA", "META", "AMZN", "TSLA", "AMD", "INTC",
  "JPM", "BAC", "WFC", "GS", "MS", "C", "AXP", "BLK",
  "WMT", "COST", "HD", "NKE", "MCD", "SBUX", "TGT", "LOW",
  "JNJ", "PFE", "MRK", "ABBV", "LLY", "GILD", "TMO",
  "XOM", "CVX", "BA", "CAT", "GE", "HON",
];

function connectFinnhub(io) {
  clearInterval(priceInterval);
  clearInterval(pingInterval);
  clearInterval(statusInterval);

  ws = new WebSocket(`wss://ws.finnhub.io?token=${API_KEY}`);

  ws.on("open", () => {
    console.log("Connected to Finnhub WebSocket");
    reconnectDelay = 3000; 

    symbols.forEach((symbol) => {
      ws.send(JSON.stringify({ type: "subscribe", symbol }));
    });
  });

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);
      if (data.data) {
        data.data.forEach((trade) => {
          latestPrices[trade.s] = trade.p;
        });
      }
    } catch (err) {
      console.error("Error parsing message:", err);
    }
  });

  priceInterval = setInterval(() => {
    io.emit("priceUpdateBatch", latestPrices);
    io.emit("priceUpdateHolding", latestPrices);
  }, 1000);

  pingInterval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) ws.ping();
  }, 30000);

  statusInterval = setInterval(async () => {
    try {
      const status = await marketStatus();
      io.emit("marketStatus", status);
    } catch (err) {
      console.error("Failed to fetch market status:", err.message);
    }
  }, 60000);

  ws.on("error", (err) => {
    console.error("Finnhub error:", err.message);
  });

  ws.on("close", () => {
    clearInterval(priceInterval);
    clearInterval(pingInterval);
    clearInterval(statusInterval);

    console.log(`Finnhub closed. Reconnecting in ${reconnectDelay / 1000}s...`);
    setTimeout(() => {
      reconnectDelay = Math.min(reconnectDelay * 2, 60000); // max 60s backoff
      connectFinnhub(io);
    }, reconnectDelay);
  });
}

module.exports = connectFinnhub;