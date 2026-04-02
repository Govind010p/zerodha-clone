const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");

const { getAllholdings, getQty } = require("../Controllers/holdingController");

router.get("/allHoldings", auth, getAllholdings);
router.get("/getQty/:uid", auth, getQty);

module.exports = router;