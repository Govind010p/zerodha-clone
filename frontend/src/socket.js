// socket.js
import { io } from "socket.io-client";

const socket = io("https://zerodha-clone-lkju.onrender.com", {
  withCredentials: true,
  transports: ["websocket", "polling"], 
});

export default socket;
