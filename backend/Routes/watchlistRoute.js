const express = require("express");
const router = express.Router();

const { getWatchlistData } = require("../Controllers/watchlistController");

router.get("/getWatchlistData", getWatchlistData);

module.exports = router;