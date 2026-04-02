// socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:3002", {
  transports: ["websocket"], // optional but good
});

export default socket;