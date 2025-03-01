const express = require("express");
const { approveCreditRequest } = require("../controllers/adminController"); // Ensure the correct path

const router = express.Router();

router.post("/approve-credit", approveCreditRequest);

module.exports = router;
