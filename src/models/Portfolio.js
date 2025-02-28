const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    codelink: String,
    livelink: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
