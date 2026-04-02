const axios = require("axios");
const API_KEY = process.env.FINNHUB_API_KEY;

exports.marketStatus = async function getMarketStatus() {
  const res = await axios.get("https://finnhub.io/api/v1/stock/market-status", {
    params: {
      exchange: "US",
      token: API_KEY,
    },
  });

  return res.data;
};