const cron = require("node-cron");
const axios = require("axios");
const WatchlistModel = require("../model/WatchlistModel");

const API_KEY = process.env.FINNHUB_API_KEY;

const cryptoSymbols = [
  "BINANCE:BTCUSDT",
  "BINANCE:ETHUSDT",
  "BINANCE:BNBUSDT",
  "BINANCE:SOLUSDT",
];


function startCryptoDailyPCJob() {
  cron.schedule(
    "0 0 * * *", 
    async () => {
      try {
        const promises = cryptoSymbols.map((symbol) =>
          axios
            .get("https://finnhub.io/api/v1/quote", {
              params: { symbol, token: API_KEY },
            })
            .then((res) => ({
              symbol,
              data: res.data,
            }))
        );

        const results = await Promise.allSettled(promises);

        const successResult = results
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value);

        const bulkOperations = successResult.map(({ symbol, data }) => {
          const currentPrice = data.c;

          if (!currentPrice) return null;

          return {
            updateOne: {
              filter: { symbol },
              update: {
                $set: {
                  prevClose: currentPrice, 
                },
              },
              upsert: true,
            },
          };
        }).filter(Boolean);

        if (bulkOperations.length > 0) {
          await WatchlistModel.bulkWrite(bulkOperations);
          console.log("Crypto prevClose updated at 00:00");
        }
      } catch (error) {
        console.log("Error in Crypto PC Job:", error);
      }
    },
    {
      timezone: "America/New_York",
    }
  );
}

module.exports = startCryptoDailyPCJob;