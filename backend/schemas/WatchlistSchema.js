const { Schema } = require("mongoose");

const WatchlistSchema = new Schema({
  symbol: String,
  currentPrice: Number,
  displayName : String,
  percent: Number,
  prevClose: Number,
  type: String,
  isDown: Boolean,
});

module.exports = {WatchlistSchema};