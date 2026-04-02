const { HoldingsModel } = require("../model/HoldingsModel");

exports.getAllholdings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({
    user: req.user.id,
  });
  res.json(allHoldings);
};

exports.getQty = async (req, res) => {
  try {
    const holding = await HoldingsModel.findOne({
      user: req.user.id,
      symbol: req.params.uid,   // ✅ FIX
    });

    res.json({ qty: holding ? holding.qty : 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
