require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3002;
const connectDB = require("./config/db");

connectDB();

// web socket code
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

// Socket Setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// import the socket logic
require("./sockets/stockSocket")(io);

// end of websocket code

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Authentication routers
const AuthRoutes = require("./Routes/AuthRoute");
app.use("/api/auth", AuthRoutes);

//main routes
const orderRoutes = require("./Routes/orderRoutes");
const holdingRoute = require("./Routes/holdingRoutes");
const WatchlistRoute = require("./Routes/watchlistRoute");
app.use("/api/orders", orderRoutes);
app.use("/api/holding", holdingRoute);
app.use("/api/watchlist", WatchlistRoute);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

//jobs (for database updation at opening and closing of market)
const startMarketCloseJob = require("./Jobs/marketCloseJob");
const startMarketOpenJob = require("./Jobs/marketOpenJob");
const cryptoUpdateJob = require("./Jobs/cryptoUpdateJob");
startMarketCloseJob();
startMarketOpenJob();
cryptoUpdateJob();

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
