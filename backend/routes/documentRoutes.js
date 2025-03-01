const express = require("express");
const { uploadDocument, getUserDocuments } = require("../controllers/documentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route to upload a document (Protected)
router.post("/upload", authMiddleware, async (req, res) => {
    try {
        await uploadDocument(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to upload document", details: error.message });
    }
});

// Route to get user documents (Protected)
router.get("/my-documents", authMiddleware, async (req, res) => {
    try {
        await getUserDocuments(req, res);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch documents", details: error.message });
    }
});

module.exports = router;
