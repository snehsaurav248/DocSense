const approveCreditRequest = (req, res) => {
    res.status(200).json({ message: "Credit request approved!" });
};

module.exports = { approveCreditRequest };
