const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.token || req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = auth;
