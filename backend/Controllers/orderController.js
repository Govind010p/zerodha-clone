const { OrderModel } = require("../model/OrderModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const WatchlistModel = require("../model/WatchlistModel");

exports.createBuyOrder = async (req, res) => {
  try {
    // order saved in db
    const { symbol, qty, OrderPrice, mode } = req.body;
    const stockData = await WatchlistModel.findOne({ symbol: symbol });
    const newBuyOrder = new OrderModel({
      user: req.user.id,
      symbol,
      qty, 
      OrderPrice,
      mode,
      displayName: stockData.displayName,
      profit: 0,
    });
    await newBuyOrder.save();

    // checking the holding and updeting
    const existingHolding = await HoldingsModel.findOne({
      user: req.user.id,
      symbol,
    });

    // updating existing holding
    if (existingHolding) {
      const totalAmount =
        existingHolding.avg * existingHolding.qty + OrderPrice * qty;
      const newQty = existingHolding.qty + qty;
      const newAvg = totalAmount / newQty;

      await HoldingsModel.updateOne(
        { user: req.user.id, symbol },
        {
          $set: {
            qty: newQty,
            avg: newAvg,
          },
        },
      );
    } else {
      const newHolding = new HoldingsModel({
        user: req.user.id,
        symbol,
        qty,
        avg: OrderPrice,
        currentPrice: OrderPrice,
        prevClose: stockData.prevClose,
        displayName: stockData.displayName,
      });
      await newHolding.save();
    }
    res.send("Order saved!!");
  } catch (error) {
    console.error("Error in /newBuyOrder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createSellOrder = async (req, res) => {
  try {
    const { symbol, qty, OrderPrice, mode } = req.body;
    const holding = await HoldingsModel.findOne({
      user: req.user.id,
      symbol,
    });

    if (!holding) {
      return res.status(404).json({ message: "Stock not found in holdings" });
    }

    let profit = qty * (OrderPrice - holding.avg);

    // checking for the legal qty to sell
    if (holding.qty >= qty) {
      const newSellOrder = new OrderModel({
        user: req.user.id,
        symbol,
        qty,
        OrderPrice,
        mode,
        displayName: holding.displayName,
        profit,
      });
      await newSellOrder.save();

      // updating holding after executing sell order
      if (holding.qty > qty) {
        await HoldingsModel.updateOne(
          { user: req.user.id, symbol },
          { $set: { qty: holding.qty - qty } },
        );
      }

      if (holding.qty === qty) {
        await HoldingsModel.deleteOne({ user: req.user.id, symbol });
      }

      res.status(200).json({ message: "Order saved successfully!" });
    } else {
      res
        .status(400)
        .json({ message: "You do not have enough quantity to sell" });
    }
  } catch (error) {
    console.error("Error in /newSellOrder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllOrders = async (req, res) => {
  let allOrders = await OrderModel.find({ user: req.user.id });
  res.json(allOrders);
};
