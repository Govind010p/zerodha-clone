const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");
const {
  createBuyOrder,
  createSellOrder,
  getAllOrders,
} = require("../Controllers/orderController");

router.post("/newBuyOrder", auth, createBuyOrder);
router.post("/newSellOrder", auth, createSellOrder);
router.get("/allOrders", auth, getAllOrders);

module.exports = router;
