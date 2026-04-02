const { Signup, Login, getMe, Logout } = require("../Controllers/AuthController")
const router = require("express").Router();
const auth = require("../Middleware/Auth");

router.post("/signup", Signup);
router.post('/login', Login)
router.get("/me", auth, getMe);
router.post("/logout", Logout);

module.exports = router;