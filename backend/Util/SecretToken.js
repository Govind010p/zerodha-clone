require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.getMe = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id; // ✅ handles both
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: "Server error at getMe" });
  }
};
