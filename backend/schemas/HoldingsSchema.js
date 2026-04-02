const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  symbol: String,
  qty: Number,
  avg: Number,
  currentPrice: Number,
  prevClose: Number,
  displayName:String,
  buyDate: { type: Date, default: Date.now },
});

module.exports = { HoldingsSchema };
