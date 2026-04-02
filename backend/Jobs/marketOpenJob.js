const cron = require("node-cron");
const WatchlistModel = require("../model/WatchlistModel");
const axios = require("axios");
const API_KEY = process.env.FINNHUB_API_KEY;

const symbols = [
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

function startMarketCloseJob() {
  cron.schedule(
    "50 14 * * 1-5",
    async () => {
      try {
        //get all stocks data through api
        const promises = symbols.map((symbol) =>
          axios
            .get(`https://finnhub.io/api/v1/quote`, {
              params: { symbol, token: API_KEY },
            })
            .then((res) => ({
              symbol,
              data: res.data,
            })),
        );

        //wait for all
        const results = await Promise.allSettled(promises);

        //filter the correct ones
        const successResult = results
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value);

        const bulkOperations = successResult.map(({ symbol, data }) => {
          const currentPrice = data.c;
          const prevClose = data.pc;

          if (!currentPrice || !prevClose) return null;

          const percent = ((currentPrice - prevClose) / prevClose) * 100;
          const isDown = currentPrice < prevClose;

          return {
            updateOne: {
              filter: { symbol },
              update: {
                $set: {
                  symbol,
                  currentPrice,
                  prevClose,
                  percent: Number(percent.toFixed(2)),
                  isDown,
                },
              },
              upsert: true,
            },
          };
        });

        // bulk updates
        if (bulkOperations.length > 0) {
          await WatchlistModel.bulkWrite(bulkOperations);
          console.log("job done at startMarketOpenJob");
        }
      } catch (error) {
        console.log("error at startMarketOpenJob!!", error);
      }
    },
    {
      timezone: "America/New_York",
    },
  );
}

module.exports = startMarketCloseJob;
