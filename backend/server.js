require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const documentRoutes = require("./routes/documentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors()); // Enable CORS before JSON parsing
app.use(express.json()); // Parse JSON request body

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/admin", adminRoutes);

// Database Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.error("❌ Error: MONGO_URI is not defined in .env file");
    process.exit(1); // Stop execution
}

mongoose.set("strictQuery", true); // Avoid deprecated warnings

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Stop execution on DB failure
    });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
