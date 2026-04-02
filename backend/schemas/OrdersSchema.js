const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  symbol: String,
  qty: Number,
  OrderPrice: Number,
  displayName: String,
  mode: String,
  profit: Number,
});

module.exports = { OrderSchema };
