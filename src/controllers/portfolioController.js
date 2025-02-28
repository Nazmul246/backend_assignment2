const Portfolio = require("../models/Portfolio");

exports.createPortfolio = async (req, res) => {
    const portfolio = new Portfolio({ ...req.body, user: req.user.id });
    await portfolio.save();
    res.status(201).json(portfolio);
};

exports.getPortfolios = async (req, res) => {
    console.log("User ID: ", req.user.id);
    const portfolios = await Portfolio.find({ user: req.user.id });
    res.json(portfolios);
};

exports.updatePortfolio = async (req, res) => {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(portfolio);
};

exports.deletePortfolio = async (req, res) => {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Portfolio deleted" });
};
