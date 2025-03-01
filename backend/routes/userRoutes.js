const express = require("express");
const { getProfile, requestCredits } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.post("/request-credits", authMiddleware, requestCredits);

module.exports = router;
