const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/OrdersSchema");

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = { OrderModel };