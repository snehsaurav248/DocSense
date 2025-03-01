const User = require("../models/User");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.requestCredits = async (req, res) => {
    // Logic for requesting credits
};
