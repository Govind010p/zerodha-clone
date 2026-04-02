const WatchlistModel = require("../model/WatchlistModel");

exports.getWatchlistData = async (req, res)=>{
    let allWatchlistData = await WatchlistModel.find({});
    res.json(allWatchlistData);
};