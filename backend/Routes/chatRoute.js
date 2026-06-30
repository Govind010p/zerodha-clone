const express = require("express");
const { chatController } = require("../Controllers/chatboxController");
const router = express.Router();

router.post("/", chatController);

module.exports = router;