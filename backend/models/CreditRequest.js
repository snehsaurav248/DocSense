const mongoose = require("mongoose");

const CreditRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    creditsRequested: Number,
    status: { type: String, default: "pending" }
});

module.exports = mongoose.model("CreditRequest", CreditRequestSchema);
